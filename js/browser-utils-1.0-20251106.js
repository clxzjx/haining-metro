/**
 * 浏览器版本检测工具
 */

(function(window, undefined) {
    'use strict';
    
    // 移动端检测
    function checkMobile() {
        var browser = {
            versions: function () {
                var u = navigator.userAgent;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
                    android: u.indexOf('Android') > -1 || (u.indexOf('Linux') > -1 && u.indexOf('x86_64') < 0), //android
                    iPhone: u.indexOf('iPhone') > -1, //iPhone
                    iPad: u.indexOf('iPad') > -1, //iPad
                    webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
                    Harmony:!!u.match(/ArkWeb.*Mobile.*/)//鸿蒙移动端
                };
            }()
        };
        if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad  || browser.versions.Harmony) {
            return true;
        }
        return false;
    }

    // IE版本检测
    function IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return 7;
            } else if (fIEVersion == 8) {
                return 8;
            } else if (fIEVersion == 9) {
                return 9;
            } else if (fIEVersion == 10) {
                return 10;
            } else {
                return 6;//IE版本<=7
            }
        } else if (isEdge) {
            return 'edge';//edge
        } else if (isIE11) {
            return 11; //IE11
        } else {
            return -1;//不是ie浏览器
        }
    }

    // 导出函数供全局使用
    window.BrowserUtils = {
        checkMobile: checkMobile,
        IEVersion: IEVersion
    };
    
})(window);
