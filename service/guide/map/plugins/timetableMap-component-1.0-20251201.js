// 时刻表插件实现（支持多语言）
(function($) {
    // 插件默认配置
    var defaults = {
        apiUrl: '/api/timetable', // AJAX请求地址
        type:'GET',               // AJAX请求方式
        stationId: null,          // 站点ID
        stationName:null,         //站点名称
        lineId: null,             // 实际线路ID（如：3、11）
        virtualLineId: null,      // 虚拟线路ID（如：3_11，用于接口请求）
        language: 'Zh',           // 默认语言：中文(Zh/En)
        lines:[],                 //站点所属线路
        langMap:null,              //多语言映射表
        stations:[],              //多语言车站映射表
    };

    // 插件主函数
    function TimetablePlugin(element, options) {
        this.settings = $.extend({}, defaults, options);
        this.$container = $(element);
        this.init();
    }

    TimetablePlugin.prototype = {
        // 初始化插件
        init: function() {
            this.bindEvents();
        },

        // 对外暴露的数据加载方法（支持多语言）
        loadTimetable: function(stationId, stationName, lineId, virtualLineId, lines, language) {
            var self = this;

            // 如果传入了参数，则更新设置
            if (stationId !== undefined) {
                this.settings.stationId = stationId;
            }
            if (stationName !== undefined) {
                this.settings.stationName = stationName;
            }
            if (lineId !== undefined) {
                this.settings.lineId = lineId;
            }
            if (virtualLineId !== undefined) {
                this.settings.virtualLineId = virtualLineId;
            }
            if (lines !== undefined) {
                this.settings.lines = lines;
            }
            if (language !== undefined) {
                this.settings.language = language;
            }

            // 显示加载状态
            this.$container.html('<div class="loading">' + this.getLangText('loading') + '</div>');
            this.$container.show();

            // 判断 transfer-box 是否显示，如果显示则调整样式
            var $transferBox = $('#transfer-box');
            if ($transferBox.length > 0 && $transferBox.is(':visible')) {
                // 韩文环境下需调整样式
                if (this.settings.language === 'Kr') {
                    this.$container.css({
                        'z-index': '9999',
                        'left': '444px'
                    });
                } else {
                    this.$container.css({
                        'z-index': '9999',
                        'left': '400px'
                    });
                }
            }

            // 发送AJAX请求获取时刻表数据（携带语言参数）
            $.ajax({
                url: this.settings.apiUrl,
                type: this.settings.type,
                data: {
                    stationId: this.settings.stationId,
                    lineId: this.settings.lineId,
                    virtualLineId: this.settings.virtualLineId,  // 传递虚拟线路ID给后台
                    language: this.settings.language  // 传递语言参数给后台
                },
                dataType: 'json',
                success: function(response) {
                    if (response.code === 0) {
                        self.renderTimetable(response);
                    } else {
                        self.$container.html('<div class="error">' + self.getLangText('error') + '</div>');
                    }
                },
                error: function(error) {
                    console.error(error);
                    self.$container.html('<div class="error">' + self.getLangText('error') + '</div>');
                }
            });
        },

        // 获取当前语言对应的文本
        getLangText: function(key) {
            var langMap = this.settings.langMap;
            return langMap[key];
        },

        // 渲染时刻表内容
        renderTimetable: function(response) {
            // 缓存响应数据供后续使用
            this.cachedResponse = response;
            // 直接使用后台返回的数据，不进行语言判断
            var data = response.data;
            var stationName = this.settings.stationName;
            stationName = stationName.replace(/[\r\n\t\s\/]/g, "");

            // 构造线路标签数据
            var lines = [];
            for (var i = 0; i < this.settings.lines.length; i++) {
                var line = this.settings.lines[i];
                lines.push({
                    id: line.lineId,
                    name: line.lineName,
                    stationId: line.stationId,
                    lineColor: line.lineColor || '',  // 线路颜色
                    lineId: line.lineId,              // 实际线路ID（如：3、11）
                    virtualLineId: line.virtualLineId,  // 虚拟线路ID（如：3_11）
                    selected: line.lineId === this.settings.lineId
                });
            }

            // 构造时间选项卡数据
            var timeTabs = [];
            // 获取当前线路的颜色
            var currentLineColor = '';
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].selected) {
                    currentLineColor = lines[i].lineColor || '';
                    break;
                }
            }
            for (var j = 0; j < data.timetables.length; j++) {
                var timetable = data.timetables[j];
                timeTabs.push({
                    lineId:this.settings.lineId,
                    lineColor: currentLineColor,  // 添加线路颜色
                    title: timetable.timeName, // 后台直接返回对应语言的时间表名称
                    type: j // 使用索引作为类型标识
                });
            }

            // 构造时刻表数据
            var schedules = {};
            if (data.timetables.length > 0) {
                var timetableData = data.timetables[0]; // 默认使用第一个时间表
                var frequencyData = timetableData.timetableFrequencys;

                for (var k = 0; k < frequencyData.length; k++) {
                    var freq = frequencyData[k];
                    var directionType = freq.frequencyDirectionType.toLowerCase(); // UP or DOWN

                    var toStationId = freq.frequencyDirectionTypeStationId;
                    var fromStationId = freq.frequencyDirectionTypeFromStationId;
                    var toStations = [];    // 目标站
                    var fromStations = [];  //  起始站
                    for (var stationId in szmtr.stations) {
                        if (stationId.indexOf(toStationId) !== -1) {
                            toStations.push(szmtr.stations[stationId]);
                        }
                        if (stationId.indexOf(fromStationId) !== -1) {
                            fromStations.push(szmtr.stations[stationId]);
                        }
                    }
                    var directionName = fromStations[0].name + '→' + toStations[0].name;
                    var directionTitle = (directionType=='up'?this.getLangText('timetableUp'):this.getLangText('timetableDown'))+"("+directionName+")"; // freq.frequencyDirectionTypeName;

                    // 构造时刻表项
                    var items = [];
                    var firstLastTimes = freq.timetableFirstLastTimes;
                    for (var l = 0; l < firstLastTimes.length; l++) {
                        var timeEntry = firstLastTimes[l];
                        var frequencyName = timeEntry.frequencyName;

                        for (var m = 0; m < timeEntry.directions.length; m++) {
                            var direction = timeEntry.directions[m];
                            var directionName = direction.directionName;

                            items.push({
                                label: frequencyName,
                                text: directionName,
                                time: direction.time
                            });
                        }
                    }

                    schedules[directionType] = {
                        direction: directionTitle,
                        items: items
                    };
                }
            }

            // 构造旅游信息数据
            var info = {
                gallery: []
            };
            if (data.travels) {
                for (var n = 0; n < data.travels.length; n++) {
                    var travel = data.travels[n];
                    info.gallery.push({
                        image: travel.url,
                        caption: travel.name,
                        link: travel.href
                    });
                }
            }

            var html =
                '<div id="timetable-box-search">' +
                    '<div class="search-top" style="float:left;">' +
                        '<div class="title-red" id="stationName">' + (stationName || '-') + '</div>' +
                    '</div>' +
                    '<div id="lineTags" class="line-tags">' +
                    this.renderLineTags(lines) +
                    '</div>' +
                    '<div id="timetable-box-close" class="title-btn"></div>' +
                '</div>' +
                '<div id="timetable-time" class="timetable-box-tabs">' +
                this.renderTimeTabs(timeTabs) +
                '</div>' +
                this.renderScheduleSections(schedules) +
                this.renderInfoSection(info);

            this.$container.html(html);
        },

        // 渲染线路标签
        renderLineTags: function(lines) {
            if (!lines || lines.length === 0) return '';

            var html = '';
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var colorStyle = line.lineColor ? ' style="background-color:' + line.lineColor + ';"' : '';
                var colorAttr = ' data-line-color="' + (line.lineColor || '') + '"';
                if (line.selected) {
                    html += '<span class="line-tag line-tag-selected"' + colorAttr + colorStyle + ' data-lineId="' + line.id + '" data-virtual-lineId="' + line.virtualLineId + '" data-stationId="' + line.stationId + '">' + line.name + '</span>';
                } else {
                    html += '<span class="line-tag"' + colorAttr + ' data-lineId="' + line.id + '" data-virtual-lineId="' + line.virtualLineId + '" data-stationId="' + line.stationId + '">' + line.name + '</span>';
                }
            }
            return html;
        },

        // 渲染时间选项卡
        renderTimeTabs: function(tabs) {
            if (!tabs || tabs.length === 0) return '';

            var html = '';
            for (var i = 0; i < tabs.length; i++) {
                var tab = tabs[i];
                html += '<div class="timetable-box-tab ' + (i === 0 ? 'timetable-box-tab-selected' : '') + '" data-daytype="' + tab.type + '" title="'+tab.title+'">' + tab.title + '</div>';
            }
            return html;
        },

        // 渲染时刻表部分
        renderScheduleSections: function(schedules) {
            if (!schedules) return '';

            var html = '<div class="schedule-section">';  // 使用 var 而不是 let 保证 IE9 兼容性

            // 上行方向
            if (schedules.up) {
                html +=
                    '<div class="direction-title">' + schedules.up.direction + '</div>' +
                    '<div id="up-schedule-item">' +
                    this.renderScheduleItems(schedules.up.items,'up') +
                    '</div>';
            }

            // 下行方向
            if (schedules.down) {
                html +=
                    '<div class="direction-title" style="padding-top: 10px;">' + schedules.down.direction + '</div>' +
                    '<div id="down-schedule-item">' +
                    this.renderScheduleItems(schedules.down.items,'down') +
                    '</div>';
            }
            html += '</div>';
            return html;
        },

        // 更新时刻表显示内容
        updateScheduleSections: function(schedules) {
            // 清空时刻表显示内容
            $('#up-schedule-item').html('');
            $('#down-schedule-item').html('');
            // 更新上行方向
            if (schedules.up) {
                $('#up .direction-title').text(schedules.up.direction);
                $('#up-schedule-item').html(this.renderScheduleItems(schedules.up.items,'up'));
            }

            // 更新下行方向
            if (schedules.down) {
                $('#down .direction-title').text(schedules.down.direction);
                $('#down-schedule-item').html(this.renderScheduleItems(schedules.down.items,'down'));
            }
        },

        // 渲染时刻表项
        renderScheduleItems: function(items, direction) {
            if (!items || items.length === 0) return '';
            var html = '';
            var stopLabel = []; // 用于记录已出现的标签
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var frequencyNameZh = item.label;
                // if (stopLabel.indexOf(frequencyNameZh) < 0) {
                // 首次出现的标签使用 first 样式
                html += '<div class="schedule-item"><div>';
                if(frequencyNameZh==='首班车' || frequencyNameZh==='First' || frequencyNameZh==='첫차' || frequencyNameZh==='始発') {
                    html +='<img class="step-icon" src="/service/guide/map/images/icon_start.png" alt="首班车"/>';
                }else{
                    html +='<img class="step-icon" src="/service/guide/map/images/icon_end.png" alt="末班车"/>';
                }
                html +='<div class="step-text">' + item.text + '</div>' +
                    '</div>' +
                    '<div class="time">' + item.time + '</div>' +
                    '</div>';
                stopLabel.push(frequencyNameZh);
                // } else {
                //     // 已存在的标签使用 default 样式
                //     html +=
                //         '<div class="schedule-item">' +
                //         '<div>' +
                //         '<div class="step-text default">' + item.text + '</div>' +
                //         '</div>' +
                //         '<div class="time default">' + item.time + '</div>' +
                //         '</div>';
                // }
            }
            return html;
        },

        // 渲染信息,景点信息部分
        renderInfoSection: function(info) {
            // 非中文语言下不显示景点信息
            if (this.settings.language !== 'Zh') return '';

            if (!info || !info.gallery || info.gallery.length === 0) return '';
            var html =
                '<div class="info-section">' +
                '<div class="info-title">' + this.getLangText('infoTitle') + '</div>' +
                '<ul class="gallery">';
            for (var i = 0; i < info.gallery.length; i++) {
                var item = info.gallery[i];
                html +=
                    '<li class="gallery-item"><a href="'+item.link+'" target="_blank">' +
                    '<img src="' + item.image + '" alt="' + item.caption + '" />' +
                    '<div class="caption">' + item.caption + '</div>' +
                    '</a></li>';
            }
            html += '</ul></div>';
            return html;
        },

        // 绑定事件
        bindEvents: function() {
            var self = this;
            // 时间选项卡切换事件
            this.$container.on('click', '.timetable-box-tab', function() {
                var $this = $(this);
                // 更新选中状态
                self.$container.find('.timetable-box-tab').removeClass('timetable-box-tab-selected');
                $this.addClass('timetable-box-tab-selected');

                // 获取选中的日期类型（索引）
                var dayType = parseInt($this.attr('data-daytype'));

                // 根据索引渲染对应的时刻表
                if (self.cachedResponse && self.cachedResponse.data.timetables[dayType]) {
                    var timetableData = self.cachedResponse.data.timetables[dayType];

                    // 构造时刻表数据
                    var schedules = {};
                    var frequencyData = timetableData.timetableFrequencys;

                    for (var k = 0; k < frequencyData.length; k++) {
                        var freq = frequencyData[k];
                        var directionType = freq.frequencyDirectionType.toLowerCase(); // UP or DOWN

                        // 直接使用后台返回的方向标题
                        var directionTitle = freq.frequencyDirectionTypeName;

                        // 构造时刻表项
                        var items = [];
                        var firstLastTimes = freq.timetableFirstLastTimes;
                        for (var l = 0; l < firstLastTimes.length; l++) {
                            var timeEntry = firstLastTimes[l];
                            var frequencyName = timeEntry.frequencyName;

                            for (var m = 0; m < timeEntry.directions.length; m++) {
                                var direction = timeEntry.directions[m];
                                var directionName = direction.directionName;

                                items.push({
                                    label: frequencyName,
                                    text: directionName,
                                    time: direction.time
                                });
                            }
                        }

                        schedules[directionType] = {
                            direction: directionTitle,
                            items: items
                        };
                    }

                    // 更新整个时刻表区域
                    self.updateScheduleSections(schedules);
                }
            });

            // 关闭按钮事件
            this.$container.on('click', '#timetable-box-close', function() {
                self.$container.hide();
            });

            // 线路标签点击事件（对外暴露）
            this.$container.on('click', '.line-tag', function() {
                var $this = $(this);
                if ($this.hasClass('line-tag-selected')) {
                    return;
                }

                var lineId = $this.attr('data-lineId');
                var virtualLineId = $this.attr('data-virtual-lineId');
                var stationId = $this.attr('data-stationId');

                // 更新设置
                self.settings.lineId = lineId;
                self.settings.virtualLineId = virtualLineId;
                self.settings.stationId = stationId;

                // 重新加载时刻表数据
                self.loadTimetable();

                // 调用外部传入的回调函数
                if (self.settings.onLineChange) {
                    self.settings.onLineChange(lineId, stationId, self.settings.language);
                }
            });

            // // mouseleave 事件
            // this.$container.on('mouseleave', function() {
            //     self.$container.hide();
            // });

            // 内部任意位置点击事件，将该弹窗至于顶层
            this.$container.on('click', function(event) {
                $(this).css("z-index", "9999");
            });
        },

        // 更新线路的方法（对外暴露）
        updateLine: function(lineId, stationId) {
            this.settings.lineId = lineId;
            this.settings.stationId = stationId;
            this.loadTimetable();
        },

        // 切换语言的方法（对外暴露）
        switchLanguage: function(language) {
            this.settings.language = language;
            this.loadTimetable(); // 重新加载当前数据，使用新语言
        },

        // 添加手动关闭方法（对外暴露）
        close: function() {
            this.$container.hide();
            // 清除left偏移
            this.$container.css('left', '');
        },

        show: function() {
            this.$container.show();
        }
    };

    // jQuery 插件定义
    $.fn.timetable = function(options) {
        var args = Array.prototype.slice.call(arguments, 1);
        var result = this;

        this.each(function() {
            // 如果已经初始化过，则返回已有的实例
            var instance = $.data(this, 'timetable');
            if (!instance) {
                instance = new TimetablePlugin(this, options);
                $.data(this, 'timetable', instance);
            }

            // 如果传入的是字符串，尝试调用方法
            if (typeof options === 'string') {
                // 检查方法是否存在且为函数
                if (instance[options] && typeof instance[options] === 'function') {
                    var methodResult = instance[options].apply(instance, args);
                    // 如果有返回值，保存第一个元素的结果
                    if (methodResult !== undefined && result === this) {
                        result = methodResult;
                    }
                } else {
                    console.warn('Method ' + options + ' does not exist on timetable plugin');
                }
            }
        });

        return result;
    };
})(jQuery);
