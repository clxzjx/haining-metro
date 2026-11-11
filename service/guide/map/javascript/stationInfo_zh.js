szmtr.line[0].name = "10号线";
szmtr.line[1].name = "8号线";
szmtr.line[2].name = "1号线";
szmtr.line[3].name = "2号线";
szmtr.line[4].name = "3号线";
szmtr.line[5].name = "4号线";
szmtr.line[6].name = "5号线";
szmtr.line[7].name = "6号线";
szmtr.line[8].name = "7号线";
szmtr.line[9].name = "11号线";
szmtr.line[10].name = "6延线";
szmtr.line[11].name = "7延线";

szmtr.stations = new Array();

szmtr.language = {
    fromPlaceHolder: "输入起点",
    toPlaceHolder: "输入终点",
    searchText:"查询",
    from:'从',
    to:'往',
    searchTitle:'出行方案',
    continueRide:"11号线和3号线贯通运行，乘坐常规列车您无需下车，即可以到达您的目的站。",
    transferTo: "往",
    toEnd: "",
    unFold: "展开",
    fold: "收起",
    fare: "票价",
    unit: "元",
    station: "站",
    kilometer: "公里",
    duration: "时长",
    fullLength: "全长",
    monToThu: "周一至周四",
    friToSun: "周五至周日",
    satToSun: "周六至周日", //周六至周日
    point: "以上方案仅供参考， 具体以实际情况为准。请您留意进站及换乘的首末班时间，以免耽误您的行程。",
    mobilePoint: "出行方案仅供参考，具体以实际为准。",
    minutes: "分钟",
    branchLine: "支线",
    transfer: "换乘",
    transfer1: "换乘",
    stationNum: "站",
    first: "首班车",
    last: "末班车",
    ride: "乘坐", //乘坐
    rideRep: "乘坐",
    rideDesc: "",
    errorTip1: "系统异常：未加载到数据",
    errorTip2: "系统异常：数据格式错误",
    errorTip3: "数据加载失败",
    all: "共", //共几站
    times: "次",
    direction:'',
    language: "Chinese",
    arrowRightImg: "url(images/arrow_right.png) no-repeat",
    arrowLeftImg: "url(images/arrow_left.png) no-repeat",
    arrowDownImg: "url(images/arrow_down.png) no-repeat",
    arrowUpImg: "url(images/arrow_up.png) no-repeat",
    fontSize: "45",
    backgroundImage: "images/line",
    directLength: undefined, //用于判断行驶方向字符串长度
    lineStationPlaceholder: "输入首字母快速查询",    // 线路站点选择组件-搜索提示
    timetableUp: "上行",    // 首末班车时刻表-上行
    timetableDown: "下行",    // 首末班车时刻表-下行
    timetableStation: "车站",    // 首末班车时刻表-车站
    timetableDirection: "方向",     // 首末班车时刻表-方向
    timetableFirstLastTimes: "首/末班车",   // 首末班车时刻表-首/末班车时间
    loading: '加载中...',
    error: '加载失败，请稍后重试',
    infoTitle: '景点信息'
};



szmtr.stations["1002"] = { name: "", displayName: "", pinyin: "", tx: 3340, ty: 1339.5, dx: 0 };
szmtr.stations["1003"] = { name: "", displayName: "", pinyin: "", tx: 3509, ty: 1170.5, dx: 0 };
szmtr.stations["1004"] = { name: "", displayName: "", pinyin: "", tx: 3736, ty: 1105.5, dx: 0 };
szmtr.stations["1005"] = { name: "", displayName: "", pinyin: "", tx: 3940, ty: 1105.5, dx: 0 };
szmtr.stations["1006"] = { name: "", displayName: "", pinyin: "", tx: 4137, ty: 960.5, dx: 0 };
szmtr.stations["1007"] = { name: "", displayName: "", pinyin: "", tx: 4137, ty: 773.5, dx: 0 };
szmtr.stations["1008"] = { name: "", displayName: "", pinyin: "", tx: 4137, ty: 558.5, dx: 0 };
szmtr.stations["1009"] = { name: "", displayName: "", pinyin: "", tx: 3967, ty: 429.5, dx: 0 };
szmtr.stations["1010"] = { name: "", displayName: "", pinyin: "", tx: 3742, ty: 429.5, dx: 0 };
szmtr.stations["1011"] = { name: "", displayName: "", pinyin: "", tx: 3518, ty: 429.5, dx: 0 };
szmtr.stations["1012"] = { name: "", displayName: "", pinyin: "", tx: 3293, ty: 429.5, dx: 0 };
szmtr.stations["1013"] = { name: "", displayName: "", pinyin: "", tx: 3068, ty: 429.5, dx: 0 };
szmtr.stations["1014"] = { name: "", displayName: "", pinyin: "", tx: 2844, ty: 429.5, dx: 0 };
szmtr.stations["1015"] = { name: "", displayName: "", pinyin: "", tx: 2619, ty: 429.5, dx: 0 };
szmtr.stations["1016"] = { name: "", displayName: "", pinyin: "", tx: 2393, ty: 429.5, dx: 0 };
szmtr.stations["1017"] = { name: "", displayName: "", pinyin: "", tx: 2169, ty: 429.5, dx: 0 };
szmtr.stations["1018"] = { name: "", displayName: "", pinyin: "", tx: 1945, ty: 429.5, dx: 0 };
szmtr.stations["1019"] = { name: "", displayName: "", pinyin: "", tx: 1719, ty: 429.5, dx: 0 };
szmtr.stations["1020"] = { name: "", displayName: "", pinyin: "", tx: 1494, ty: 429.5, dx: 0 };
szmtr.stations["1021"] = { name: "", displayName: "", pinyin: "", tx: 1270, ty: 429.5, dx: 0 };
szmtr.stations["t0701"] = { name: "", displayName: "", pinyin: "", tx: 1999, ty: 1820.5, dx: 0 };
szmtr.stations["t0702"] = { name: "", displayName: "", pinyin: "", tx: 2163, ty: 1656.5, dx: 0 };
szmtr.stations["t0704"] = { name: "", displayName: "", pinyin: "", tx: 2337, ty: 1539.5, dx: 0 };
szmtr.stations["t0705"] = { name: "", displayName: "", pinyin: "", tx: 2609, ty: 1539.5, dx: 0 };
szmtr.stations["t0708"] = { name: "", displayName: "", pinyin: "", tx: 2794, ty: 1334.5, dx: 0 };
szmtr.stations["t0709"] = { name: "", displayName: "", pinyin: "", tx: 2794, ty: 1135.5, dx: 0 };
szmtr.stations["0738"] = { name: "莫阳", displayName: "莫阳", pinyin: "moyang", tx: 2700, ty: 1604, dx: 0 };
szmtr.stations["0739"] = { name: "朱泾", displayName: "朱泾", pinyin: "zhujing", tx: 2878, ty: 1475, dx: 0 };
szmtr.stations["t0711"] = { name: "", displayName: "", pinyin: "", tx: 3140, ty: 657.5, dx: 0 };
szmtr.stations["t0712"] = { name: "", displayName: "", pinyin: "", tx: 3140, ty: 815.5, dx: 0 };
szmtr.stations["t0713"] = { name: "", displayName: "", pinyin: "", tx: 3140, ty: 974.5, dx: 0 };
szmtr.stations["0741"] = { name: "雪南", displayName: "雪南", pinyin: "xuenan", tx: 3279, ty: 1475, dx: 0 };
szmtr.stations["0742"] = { name: "常楼", displayName: "常楼", pinyin: "changlou", tx: 3548, ty: 1612, dx: 0 };
szmtr.stations["0743"] = { name: "登云", displayName: "登云", pinyin: "dengyun", tx: 3659, ty: 1723, dx: 0 };
szmtr.stations["0744"] = { name: "蠡塘河路", displayName: "蠡塘河路", pinyin: "litanghelu", tx: 3739, ty: 1930.5, dx: 0 };
szmtr.stations["0745"] = { name: "春申湖东路", displayName: "春申湖东路", pinyin: "chunshenhudonglu", tx: 3739, ty: 2142.5, dx: 0 };
szmtr.stations["0746"] = { name: "华元路东", displayName: "华元路东", pinyin: "huayuandonglu", tx: 3739, ty: 2353.5, dx: 0 };
szmtr.stations["s33_0747"] = { name: "白荡北", displayName: "白荡北", pinyin: "baidangbei", tx: 3709, ty: 2513, dx: 0 };
szmtr.stations["0748"] = { name: "白荡南", displayName: "白荡南", pinyin: "baidangnan", tx: 3739, ty: 2824.5, dx: 0 };
szmtr.stations["0749"] = { name: "板泾", displayName: "板泾", pinyin: "banjing", tx: 3739, ty: 3054.5, dx: 0 };
szmtr.stations["0750"] = { name: "洋泾", displayName: "洋泾", pinyin: "yangjing", tx: 3739, ty: 3284.5, dx: 0 };
szmtr.stations["0751"] = { name: "积翠桥", displayName: "积翠桥", pinyin: "jicuiqiao", tx: 3739, ty: 3514.5, dx: 0 };
szmtr.stations["s27_0752"] = { name: "中央公园", displayName: "中央公园", pinyin: "zhongyanggongyuan", tx: 3709, ty: 3809, dx: 0 };
szmtr.stations["s25_0753"] = { name: "惹云桥", displayName: "惹云桥", pinyin: "reyunqiao", tx: 3709, ty: 4055, dx: 0 };
szmtr.stations["s28_0754"] = { name: "黄天荡", displayName: "黄天荡", pinyin: "huangtiandang", tx: 3709, ty: 4285, dx: 0 };
szmtr.stations["0755"] = { name: "娄葑", displayName: "娄葑", pinyin: "loufeng", tx: 3739, ty: 4422.5, dx: 0 };
szmtr.stations["0756"] = { name: "群力", displayName: "群力", pinyin: "qunli", tx: 3739, ty: 4625.5, dx: 0 };
szmtr.stations["s29_0757"] = { name: "通园路南", displayName: "通园路南", pinyin: "tongyuanlunan", tx: 3739, ty: 4861, dx: 0 };
szmtr.stations["0758"] = { name: "林家潭", displayName: "林家潭", pinyin: "linjiatan", tx: 3739, ty: 4974.5, dx: 0 };
szmtr.stations["s30_0759"] = { name: "郭巷", displayName: "郭巷", pinyin: "guoxiang", tx: 3709, ty: 5207, dx: 0 };
szmtr.stations["0760"] = { name: "尹山", displayName: "尹山", pinyin: "yinshan", tx: 3540, ty: 5437, dx: 0 };
szmtr.stations["0761"] = { name: "金家桥南", displayName: "金家桥南", pinyin: "jinjiaqiaonan", tx: 3323, ty: 5308, dx: 0 };
szmtr.stations["0762"] = { name: "枫津路", displayName: "枫津路", pinyin: "fengjinlu", tx: 3188.5, ty: 5437, dx: 0 };
szmtr.stations["0140"] = { name: "木渎", displayName: "木渎", pinyin: "mudu", tx: 991, ty: 4022, dx: 0 };
szmtr.stations["0141"] = { name: "金枫路", displayName: "金枫路", pinyin: "jinfenglu", tx: 1182.5, ty: 3893, dx: 0 };
szmtr.stations["0142"] = { name: "汾湖路", displayName: "汾湖路", pinyin: "fenhulu", tx: 1395.5, ty: 4022, dx: 0 };
szmtr.stations["0143"] = { name: "玉山路", displayName: "玉山路", pinyin: "yushanlu", tx: 1609.5, ty: 3893, dx: 0 };
szmtr.stations["s6_0144"] = { name: "狮子山", displayName: "狮子山", pinyin: "shizishan", tx: 1944, ty: 3889, dx: 0 };
szmtr.stations["0145"] = { name: "塔园路", displayName: "塔园路", pinyin: "tayuanlu", tx: 1979.5, ty: 3809, dx: 0 };
szmtr.stations["0146"] = { name: "滨河路", displayName: "滨河路", pinyin: "binhelu", tx: 2142.5, ty: 3680, dx: 0 };
szmtr.stations["0147"] = { name: "西环路", displayName: "西环路", pinyin: "xihuanlu", tx: 2305.5, ty: 3809, dx: 0 };
szmtr.stations["0148"] = { name: "桐泾北路", displayName: "桐泾北路", pinyin: "tongjingbeilu", tx: 2446, ty: 3680, dx: 0 };
szmtr.stations["s1_0149"] = { name: "广济南路", displayName: "广济南路", pinyin: "guangjinanlu", tx: 2544, ty: 3809, dx: 0 };
szmtr.stations["0150"] = { name: "养育巷", displayName: "养育巷", pinyin: "yangyuxiang", tx: 2849.5, ty: 3680, dx: 0 };
szmtr.stations["s3_0151"] = { name: "乐桥", displayName: "乐桥", pinyin: "leqiao", tx: 3110, ty: 3809, dx: 0 };
szmtr.stations["s19_0152"] = { name: "临顿路", displayName: "临顿路", pinyin: "lindunlu", tx: 3152, ty: 3680, dx: 0 };
szmtr.stations["0153"] = { name: "相门", displayName: "相门", pinyin: "xiangmen", tx: 3399, ty: 3809, dx: 0 };
szmtr.stations["0154"] = { name: "东环路", displayName: "东环路", pinyin: "donghuanlu", tx: 3496.5, ty: 3680, dx: 0 };
szmtr.stations["s27_0155"] = { name: "中央公园", displayName: "中央公园", pinyin: "zhongyanggongyuan", tx: 3709, ty: 3809, dx: 0 };
szmtr.stations["0156"] = { name: "星海广场", displayName: "星海广场", pinyin: "xinghaiguangchang", tx: 3806, ty: 3680, dx: 0 };
szmtr.stations["s9_0157"] = { name: "东方之门", displayName: "东方之门", pinyin: "dongfangzhimen", tx: 4092, ty: 3809, dx: 0 };
szmtr.stations["0158"] = { name: "文化博览中心", displayName: "文化博览中心", pinyin: "wenhuabolanzhongxin", tx: 4346, ty: 3680, dx: 0 };
szmtr.stations["s39_0159"] = { name: "时代广场", displayName: "时代广场", pinyin: "shidaiguangchang", tx: 4600, ty: 3809, dx: 0 };
szmtr.stations["0160"] = { name: "星湖街", displayName: "星湖街", pinyin: "xinghujie", tx: 4920.5, ty: 3680, dx: 0 };
szmtr.stations["0161"] = { name: "南施街", displayName: "南施街", pinyin: "nanshijie", tx: 5109.5, ty: 3809, dx: 0 };
szmtr.stations["s14_0162"] = { name: "星塘街", displayName: "星塘街", pinyin: "xingtangjie", tx: 5386, ty: 3680, dx: 0 };
szmtr.stations["0163"] = { name: "钟南街", displayName: "钟南街", pinyin: "zhongnanjie", tx: 5611, ty: 3744.5, dx: 0 };
szmtr.stations["0238"] = { name: "骑河", displayName: "骑河", pinyin: "qihe", tx: 3140, ty: 1135.5, dx: 0 };
szmtr.stations["0239"] = { name: "富翔路", displayName: "富翔路", pinyin: "fuxianglu", tx: 2905, ty: 1334.5, dx: 0 };
szmtr.stations["0240"] = { name: "高铁苏州北站", displayName: "高铁苏州北站", pinyin: "gaotiesuzhoubeizhan", tx: 3110, ty: 1604, dx: 0 };
szmtr.stations["0241"] = { name: "大湾", displayName: "大湾", pinyin: "dawan", tx: 3140, ty: 1758.5, dx: 0 };
szmtr.stations["0242"] = { name: "富元路", displayName: "富元路", pinyin: "fuyuanlu", tx: 3140, ty: 1956.5, dx: 0 };
szmtr.stations["0243"] = { name: "蠡口", displayName: "蠡口", pinyin: "likou", tx: 3140, ty: 2161.5, dx: 0 };
szmtr.stations["0244"] = { name: "徐图港", displayName: "徐图港", pinyin: "xutugang", tx: 3140, ty: 2362.5, dx: 0 };
szmtr.stations["s36_0245"] = { name: "阳澄湖中路", displayName: "阳澄湖中路", pinyin: "yangchenghuzhonglu", tx: 3110, ty: 2513, dx: 0 };
szmtr.stations["0246"] = { name: "陆慕", displayName: "陆慕", pinyin: "lumu", tx: 3140, ty: 2691.5, dx: 0 };
szmtr.stations["0247"] = { name: "平泷路东", displayName: "平泷路东", pinyin: "pinglongludong", tx: 3140, ty: 2804.5, dx: 0 };
szmtr.stations["s18_0248"] = { name: "平河路", displayName: "平河路", pinyin: "pingheliu", tx: 3110, ty: 2984, dx: 0 };
szmtr.stations["s2_0249"] = { name: "苏州火车站", displayName: "苏州火车站", pinyin: "suzhouhuochezhan", tx: 2642, ty: 3138.5, dx: 0 };
szmtr.stations["0250"] = { name: "山塘街", displayName: "山塘街", pinyin: "shantangjie", tx: 2559, ty: 3357.5, dx: 0 };
szmtr.stations["0251"] = { name: "石路", displayName: "石路", pinyin: "shilu", tx: 2604, ty: 3541.5, dx: 0 };
szmtr.stations["s1_0252"] = { name: "广济南路", displayName: "广济南路", pinyin: "guangjinanlu", tx: 2544, ty: 3809, dx: 0 };
szmtr.stations["0253"] = { name: "三香广场", displayName: "三香广场", pinyin: "sanxiangguangchang", tx: 2514, ty: 3974.5, dx: 0 };
szmtr.stations["s11_0254"] = { name: "劳动路", displayName: "劳动路", pinyin: "laodonglu", tx: 2589, ty: 4156, dx: 0 };
szmtr.stations["0255"] = { name: "胥江路", displayName: "胥江路", pinyin: "xujianglu", tx: 2559, ty: 4378.5, dx: 0 };
szmtr.stations["0256"] = { name: "桐泾公园", displayName: "桐泾公园", pinyin: "tongjinggongyuan", tx: 2514, ty: 4522.5, dx: 0 };
szmtr.stations["0257"] = { name: "友联", displayName: "友联", pinyin: "youlian", tx: 2604, ty: 4667.5, dx: 0 };
szmtr.stations["s7_0258"] = { name: "盘蠡路", displayName: "盘蠡路", pinyin: "panlilu", tx: 2589, ty: 4893, dx: 0 };
szmtr.stations["0259"] = { name: "新家桥", displayName: "新家桥", pinyin: "xinjiaqiao", tx: 2559, ty: 5071.5, dx: 0 };
szmtr.stations["s4_0260"] = { name: "石湖东路", displayName: "石湖东路", pinyin: "shihudonglu", tx: 2890, ty: 5078, dx: 0 };
szmtr.stations["0261"] = { name: "宝带桥南", displayName: "宝带桥南", pinyin: "baodaiqiaonan", tx: 3224, ty: 5207, dx: 0 };
szmtr.stations["0262"] = { name: "尹中路", displayName: "尹中路", pinyin: "yinzhonglu", tx: 3450.5, ty: 5078, dx: 0 };
szmtr.stations["s30_0263"] = { name: "郭巷", displayName: "郭巷", pinyin: "guoxiang", tx: 3709, ty: 5207, dx: 0 };
szmtr.stations["0264"] = { name: "郭苑路", displayName: "郭苑路", pinyin: "guoyuanlu", tx: 3805.5, ty: 5078, dx: 0 };
szmtr.stations["0265"] = { name: "尹山湖", displayName: "尹山湖", pinyin: "yinshanhu", tx: 3990.5, ty: 5207, dx: 0 };
szmtr.stations["0266"] = { name: "独墅湖南", displayName: "独墅湖南", pinyin: "dushihunannan", tx: 4153, ty: 5078, dx: 0 };
szmtr.stations["0267"] = { name: "独墅湖邻里中心", displayName: "独墅湖邻里中心", pinyin: "dushihulinlizhongxin", tx: 4271.5, ty: 5207, dx: 0 };
szmtr.stations["0268"] = { name: "月亮湾", displayName: "月亮湾", pinyin: "yueliangwan", tx: 4546.5, ty: 5078, dx: 0 };
szmtr.stations["s41_0269"] = { name: "松涛街", displayName: "松涛街", pinyin: "songtaojie", tx: 4820, ty: 5207, dx: 0 };
szmtr.stations["0270"] = { name: "金谷路", displayName: "金谷路", pinyin: "jinguolu", tx: 5047.5, ty: 5078, dx: 0 };
szmtr.stations["s22_0271"] = { name: "金尚路", displayName: "金尚路", pinyin: "jinshanglu", tx: 5364.5, ty: 5207, dx: 0 };
szmtr.stations["s23_0272"] = { name: "桑田岛", displayName: "桑田岛", pinyin: "sangtiandao", tx: 5540.5, ty: 5047, dx: 0 };
szmtr.stations["s16_0340"] = { name: "苏州新区火车站", displayName: "苏州新区火车站", pinyin: "suzhouxinquhuochezhan", tx: 1548, ty: 1922, dx: 0 };
szmtr.stations["0341"] = { name: "惠昌路", displayName: "惠昌路", pinyin: "huichanglu", tx: 1423, ty: 2270.5, dx: 0 };
szmtr.stations["0342"] = { name: "文昌路", displayName: "文昌路", pinyin: "wenchanglu", tx: 1383, ty: 2470.5, dx: 0 };
szmtr.stations["0343"] = { name: "长亭", displayName: "长亭", pinyin: "changting", tx: 1658, ty: 2658.5, dx: 0 };
szmtr.stations["0344"] = { name: "铜墩", displayName: "铜墩", pinyin: "tongdun", tx: 1658, ty: 2847.5, dx: 0 };
szmtr.stations["0345"] = { name: "马运路", displayName: "马运路", pinyin: "mayunlu", tx: 1521, ty: 3152, dx: 0 };
szmtr.stations["s34_0346"] = { name: "西津桥", displayName: "西津桥", pinyin: "xijinqiao", tx: 1709, ty: 3340, dx: 0 };
szmtr.stations["0347"] = { name: "何山", displayName: "何山", pinyin: "heshan", tx: 1944, ty: 3542.5, dx: 0 };
szmtr.stations["s6_0348"] = { name: "狮子山", displayName: "狮子山", pinyin: "shizishan", tx: 1944, ty: 3889, dx: 0 };
szmtr.stations["0349"] = { name: "狮山路", displayName: "狮山路", pinyin: "shishanlu", tx: 1709, ty: 4038.5, dx: 0 };
szmtr.stations["0350"] = { name: "沙金桥", displayName: "沙金桥", pinyin: "shajinqiao", tx: 1709, ty: 4228.5, dx: 0 };
szmtr.stations["s10_0351"] = { name: "索山桥西", displayName: "索山桥西", pinyin: "suoshanqiaoxi", tx: 1944, ty: 4479, dx: 0 };
szmtr.stations["0352"] = { name: "横山", displayName: "横山", pinyin: "hengshan", tx: 1873, ty: 4632, dx: 0 };
szmtr.stations["0353"] = { name: "横塘", displayName: "横塘", pinyin: "hengtang", tx: 1973, ty: 4732, dx: 0 };
szmtr.stations["0354"] = { name: "石湖北", displayName: "石湖北", pinyin: "shihubei", tx: 2028, ty: 4832, dx: 0 };
szmtr.stations["0355"] = { name: "新郭", displayName: "新郭", pinyin: "xinguo", tx: 2417, ty: 4764, dx: 0 };
szmtr.stations["s7_0356"] = { name: "盘蠡路", displayName: "盘蠡路", pinyin: "panlilu", tx: 2589, ty: 4893, dx: 0 };
szmtr.stations["s8_0357"] = { name: "宝带路", displayName: "宝带路", pinyin: "baodailu", tx: 2934, ty: 4764, dx: 0 };
szmtr.stations["0358"] = { name: "迎春路", displayName: "迎春路", pinyin: "yingchunlu", tx: 3236.5, ty: 4893, dx: 0 };
szmtr.stations["0359"] = { name: "北港路", displayName: "北港路", pinyin: "beiganglu", tx: 3450.5, ty: 4764, dx: 0 };
szmtr.stations["s29_0360"] = { name: "通园路南", displayName: "通园路南", pinyin: "tongyuanlunan", tx: 3739, ty: 4861, dx: 0 };
szmtr.stations["0361"] = { name: "墅浦路北", displayName: "墅浦路北", pinyin: "shupulubei", tx: 3986, ty: 4649, dx: 0 };
szmtr.stations["0362"] = { name: "东振路", displayName: "东振路", pinyin: "dongzhenlu", tx: 4122, ty: 4446.5, dx: 0 };
szmtr.stations["s13_0363"] = { name: "金厍桥", displayName: "金厍桥", pinyin: "jinkeqiao", tx: 3917, ty: 4156, dx: 0 };
szmtr.stations["s20_0364"] = { name: "李公堤西", displayName: "李公堤西", pinyin: "ligongdixi", tx: 4092, ty: 4055, dx: 0 };
szmtr.stations["s9_0365"] = { name: "东方之门", displayName: "东方之门", pinyin: "dongfangzhimen", tx: 4092, ty: 3809, dx: 0 };
szmtr.stations["0366"] = { name: "烟雨桥", displayName: "烟雨桥", pinyin: "yanyuqiao", tx: 4122, ty: 3568.5, dx: 0 };
szmtr.stations["0367"] = { name: "倪浜", displayName: "倪浜", pinyin: "nibang", tx: 4122, ty: 3407.5, dx: 0 };
szmtr.stations["s37_0368"] = { name: "唐庄", displayName: "唐庄", pinyin: "tangzhuang", tx: 4111, ty: 3188, dx: 0 };
szmtr.stations["0369"] = { name: "跨塘", displayName: "跨塘", pinyin: "kuatang", tx: 4325, ty: 3348, dx: 0 };
szmtr.stations["s38_0370"] = { name: "苏州园区/火车站", displayName: "苏州园区/火车站", pinyin: "suzhouyuanqu/huochezhan", tx: 4600, ty: 3348, dx: 45 };
szmtr.stations["0371"] = { name: "方湾街", displayName: "方湾街", pinyin: "fangwanjie", tx: 4870.5, ty: 3219, dx: 0 };
szmtr.stations["0372"] = { name: "丰和路", displayName: "丰和路", pinyin: "fengheliu", tx: 5012.5, ty: 3348, dx: 0 };
szmtr.stations["0373"] = { name: "双马街", displayName: "双马街", pinyin: "shuangmajie", tx: 5154.5, ty: 3219, dx: 0 };
szmtr.stations["s15_0374"] = { name: "葑亭大道", displayName: "葑亭大道", pinyin: "fengtingdadao", tx: 5386, ty: 3219, dx: 0 };
szmtr.stations["0375"] = { name: "戈巷街", displayName: "戈巷街", pinyin: "gexiangjie", tx: 5460.5, ty: 3348, dx: 0 };
szmtr.stations["s24_0376"] = { name: "唯亭", displayName: "唯亭", pinyin: "weiting", tx: 5659, ty: 3348, dx: 0 };
szmtr.stations["0440"] = { name: "龙道浜", displayName: "龙道浜", pinyin: "longdaobang", tx: 2559, ty: 1755.5, dx: 0 };
szmtr.stations["0441"] = { name: "张庄", displayName: "张庄", pinyin: "zhangzhuang", tx: 2604, ty: 1957.5, dx: 0 };
szmtr.stations["0442"] = { name: "姚祥", displayName: "姚祥", pinyin: "yaoxiang", tx: 2604, ty: 2159.5, dx: 0 };
szmtr.stations["0443"] = { name: "活力岛", displayName: "活力岛", pinyin: "huolidao", tx: 2559, ty: 2361.5, dx: 0 };
szmtr.stations["s35_0444"] = { name: "孙武纪念园", displayName: "孙武纪念园", pinyin: "sunwujinianyuan", tx: 2499, ty: 2513, dx: 0 };
szmtr.stations["0445"] = { name: "平泷路西", displayName: "平泷路西", pinyin: "pinglongluxi", tx: 2514, ty: 2738.5, dx: 0 };
szmtr.stations["s17_0446"] = { name: "苏锦", displayName: "苏锦", pinyin: "sujin", tx: 2764, ty: 2855, dx: 0 };
szmtr.stations["s2_0447"] = { name: "苏州火车站", displayName: "苏州火车站", pinyin: "suzhouhuochezhan", tx: 2642, ty: 3138.5, dx: 0 };
szmtr.stations["0448"] = { name: "北寺塔", displayName: "北寺塔", pinyin: "beisita", tx: 3140, ty: 3357.5, dx: 0 };
szmtr.stations["0449"] = { name: "察院场", displayName: "察院场", pinyin: "chayuanchang", tx: 2905, ty: 3541.5, dx: 0 };
szmtr.stations["s3_0450"] = { name: "乐桥", displayName: "乐桥", pinyin: "leqiao", tx: 3110, ty: 3809, dx: 0 };
szmtr.stations["0451"] = { name: "三元坊", displayName: "三元坊", pinyin: "sanyuanfang", tx: 2905, ty: 3974.5, dx: 0 };
szmtr.stations["s12_0452"] = { name: "南门", displayName: "南门", pinyin: "nanmen", tx: 3110, ty: 4156, dx: 0 };
szmtr.stations["0453"] = { name: "人民桥南", displayName: "人民桥南", pinyin: "renminqiaonan", tx: 3140, ty: 4426.5, dx: 0 };
szmtr.stations["0454"] = { name: "团结桥", displayName: "团结桥", pinyin: "tuanjieqiao", tx: 3140, ty: 4621.5, dx: 0 };
szmtr.stations["s8_0455"] = { name: "宝带路", displayName: "宝带路", pinyin: "baodailu", tx: 2934, ty: 4764, dx: 0 };
szmtr.stations["s4_0456"] = { name: "石湖东路", displayName: "石湖东路", pinyin: "shihudonglu", tx: 2890, ty: 5078, dx: 0 };
szmtr.stations["s5_0457"] = { name: "红庄", displayName: "红庄", pinyin: "hongzhuang", tx: 2980, ty: 5308, dx: 0 };
szmtr.stations["0458"] = { name: "清树湾", displayName: "清树湾", pinyin: "qingshuwan", tx: 3140, ty: 5558.5, dx: 0 };
szmtr.stations["0459"] = { name: "花港", displayName: "花港", pinyin: "huagang", tx: 3140, ty: 5747.5, dx: 0 };
szmtr.stations["0460"] = { name: "江陵西路", displayName: "江陵西路", pinyin: "jianglingxilu", tx: 3140, ty: 6056.5, dx: 0 };
szmtr.stations["0461"] = { name: "江兴西路", displayName: "江兴西路", pinyin: "jiangxingxilu", tx: 3140, ty: 6243.5, dx: 0 };
szmtr.stations["0462"] = { name: "流虹路", displayName: "流虹路", pinyin: "liuhonglu", tx: 3140, ty: 6433.5, dx: 0 };
szmtr.stations["0463"] = { name: "笠泽路", displayName: "笠泽路", pinyin: "lizelu", tx: 3140, ty: 6624.5, dx: 0 };
szmtr.stations["0464"] = { name: "顾家荡", displayName: "顾家荡", pinyin: "gujiadang", tx: 3140, ty: 6810.5, dx: 0 };
szmtr.stations["0465"] = { name: "苏州湾东", displayName: "苏州湾东", pinyin: "suzhouwandong", tx: 3140, ty: 6997.5, dx: 0 };
szmtr.stations["0466"] = { name: "松陵大道", displayName: "松陵大道", pinyin: "songlingdadao", tx: 3160, ty: 7217, dx: 0 };
szmtr.stations["0467"] = { name: "吴江人民广场", displayName: "吴江人民广场", pinyin: "wujiangrenminguangchang", tx: 3417, ty: 7217, dx: 0 };
szmtr.stations["0468"] = { name: "吴江汽车站", displayName: "吴江汽车站", pinyin: "wujiangqichezhan", tx: 3729.5, ty: 7088, dx: 0 };
szmtr.stations["0469"] = { name: "庞金路", displayName: "庞金路", pinyin: "pangjinlu", tx: 4051.5, ty: 7217, dx: 0 };
szmtr.stations["0470"] = { name: "同里", displayName: "同里", pinyin: "tongli", tx: 4299, ty: 7217, dx: 0 };
szmtr.stations["0531"] = { name: "太湖香山", displayName: "太湖香山", pinyin: "taihuxiangshan", tx: 177, ty: 5400, dx: 0 };
szmtr.stations["0532"] = { name: "花墩", displayName: "花墩", pinyin: "huadun", tx: 352, ty: 5529, dx: 0 };
szmtr.stations["0533"] = { name: "津桥", displayName: "津桥", pinyin: "jinqiao", tx: 482, ty: 5400, dx: 0 };
szmtr.stations["0534"] = { name: "胥口", displayName: "胥口", pinyin: "xukou", tx: 724, ty: 5388, dx: 0 };
szmtr.stations["0535"] = { name: "茅蓬路东", displayName: "茅蓬路东", pinyin: "maopengludong", tx: 859, ty: 5253, dx: 0 };
szmtr.stations["0536"] = { name: "许家桥", displayName: "许家桥", pinyin: "xujiaqiao", tx: 995, ty: 5117, dx: 0 };
szmtr.stations["0537"] = { name: "灵岩山", displayName: "灵岩山", pinyin: "lingyanshan", tx: 1131, ty: 4981, dx: 0 };
szmtr.stations["0538"] = { name: "渎川桥", displayName: "渎川桥", pinyin: "duchuanqiao", tx: 1266, ty: 4846, dx: 0 };
szmtr.stations["0539"] = { name: "大治桥", displayName: "大治桥", pinyin: "dazhiqiao", tx: 1401, ty: 4711, dx: 0 };
szmtr.stations["0540"] = { name: "西跨塘", displayName: "西跨塘", pinyin: "xikuatang", tx: 1537, ty: 4575, dx: 0 };
szmtr.stations["0541"] = { name: "石城", displayName: "石城", pinyin: "shicheng", tx: 1589, ty: 4370, dx: 0 };
szmtr.stations["0542"] = { name: "落星桥", displayName: "落星桥", pinyin: "luoxinqiao", tx: 1696.5, ty: 4499, dx: 0 };
szmtr.stations["s10_0543"] = { name: "索山桥西", displayName: "索山桥西", pinyin: "suoshanqiaoxi", tx: 1944, ty: 4479, dx: 0 };
szmtr.stations["0544"] = { name: "双桥", displayName: "双桥", pinyin: "shuangqiao", tx: 2352, ty: 4285, dx: 0 };
szmtr.stations["s11_0545"] = { name: "劳动路", displayName: "劳动路", pinyin: "laodonglu", tx: 2589, ty: 4156, dx: 0 };
szmtr.stations["0546"] = { name: "新市桥", displayName: "新市桥", pinyin: "xinshiqiao", tx: 2849.5, ty: 4285, dx: 0 };
szmtr.stations["s12_0547"] = { name: "南门", displayName: "南门", pinyin: "nanmen", tx: 3110, ty: 4156, dx: 0 };
szmtr.stations["0548"] = { name: "南园北路", displayName: "南园北路", pinyin: "nanyuanbeilu", tx: 3161, ty: 4285, dx: 0 };
szmtr.stations["0549"] = { name: "竹辉桥", displayName: "竹辉桥", pinyin: "zhuhuiqiao", tx: 3343.5, ty: 4156, dx: 0 };
szmtr.stations["0550"] = { name: "荷花荡", displayName: "荷花荡", pinyin: "hehuadang", tx: 3503.5, ty: 4285, dx: 0 };
szmtr.stations["s28_0551"] = { name: "黄天荡", displayName: "黄天荡", pinyin: "huangtiandang", tx: 3709, ty: 4285, dx: 0 };
szmtr.stations["s13_0552"] = { name: "金厍桥", displayName: "金厍桥", pinyin: "jinkeqiao", tx: 3917, ty: 4156, dx: 0 };
szmtr.stations["0553"] = { name: "星波街", displayName: "星波街", pinyin: "xingbojie", tx: 4132.5, ty: 4285, dx: 0 };
szmtr.stations["0554"] = { name: "李公堤南", displayName: "李公堤南", pinyin: "ligongtinan", tx: 4250, ty: 4156, dx: 0 };
szmtr.stations["0555"] = { name: "金湖", displayName: "金湖", pinyin: "jinhu", tx: 4447, ty: 4285, dx: 0 };
szmtr.stations["0556"] = { name: "华莲", displayName: "华莲", pinyin: "hualian", tx: 4602, ty: 4156, dx: 0 };
szmtr.stations["s40_0557"] = { name: "斜塘", displayName: "斜塘", pinyin: "xietang", tx: 4820, ty: 4285, dx: 0 };
szmtr.stations["s21_0558"] = { name: "苏州奥体中心", displayName: "苏州奥体中心", pinyin: "suzhouaotizhongxin", tx: 5244, ty: 4105.5, dx: 0 };
szmtr.stations["0559"] = { name: "方洲公园", displayName: "方洲公园", pinyin: "fangzhougongyuan", tx: 5416, ty: 3903.5, dx: 0 };
szmtr.stations["s14_0560"] = { name: "星塘街", displayName: "星塘街", pinyin: "xingtangjie", tx: 5386, ty: 3680, dx: 0 };
szmtr.stations["0561"] = { name: "龙墩", displayName: "龙墩", pinyin: "longdun", tx: 5226, ty: 3590.5, dx: 0 };
szmtr.stations["0562"] = { name: "东沙湖", displayName: "东沙湖", pinyin: "dongshahu", tx: 5181, ty: 3435.5, dx: 0 };
szmtr.stations["s15_0563"] = { name: "葑亭大道", displayName: "葑亭大道", pinyin: "fengtingdadao", tx: 5386, ty: 3219, dx: 0 };
szmtr.stations["0564"] = { name: "阳澄湖南", displayName: "阳澄湖南", pinyin: "yangchenghunan", tx: 5416, ty: 3040.5, dx: 0 };
szmtr.stations["s16_0621"] = { name: "苏州新区火车站", displayName: "苏州新区火车站", pinyin: "suzhouxinquhuochezhan", tx: 1548, ty: 1922, dx: 0 };
szmtr.stations["0622"] = { name: "保丰", displayName: "保丰", pinyin: "baofeng", tx: 1721, ty: 2095, dx: 0 };
szmtr.stations["0623"] = { name: "富强", displayName: "富强", pinyin: "fuqiang", tx: 1877, ty: 2251, dx: 0 };
szmtr.stations["0624"] = { name: "长泾", displayName: "长泾", pinyin: "changjing", tx: 2048, ty: 2422, dx: 0 };
szmtr.stations["s31_0625"] = { name: "白洋湾公园", displayName: "白洋湾公园", pinyin: "baiyangwangongyuan", tx: 1906.5, ty: 2638, dx: 0 };
szmtr.stations["0626"] = { name: "金鸡墩", displayName: "金鸡墩", pinyin: "jinjidun", tx: 2125, ty: 2781, dx: 0 };
szmtr.stations["0627"] = { name: "虎丘", displayName: "虎丘", pinyin: "huqiu", tx: 2255, ty: 2866, dx: 0 };
szmtr.stations["0628"] = { name: "青山桥浜", displayName: "青山桥浜", pinyin: "qingshanqiaobang", tx: 2250, ty: 2951, dx: 0 };
szmtr.stations["0629"] = { name: "江星桥南", displayName: "江星桥南", pinyin: "jiangxingqiaonan", tx: 2501, ty: 2984, dx: 0 };
szmtr.stations["s17_0630"] = { name: "苏锦", displayName: "苏锦", pinyin: "sujin", tx: 2764, ty: 2855, dx: 0 };
szmtr.stations["s18_0631"] = { name: "平河路", displayName: "平河路", pinyin: "pingheliu", tx: 3110, ty: 2984, dx: 0 };
szmtr.stations["0632"] = { name: "梅巷", displayName: "梅巷", pinyin: "meixiang", tx: 3357, ty: 3072.5, dx: 0 };
szmtr.stations["0633"] = { name: "拙政园苏博", displayName: "拙政园苏博", pinyin: "zhuozhengyuansubo", tx: 3357, ty: 3295.5, dx: 0 };
szmtr.stations["0634"] = { name: "悬桥巷", displayName: "悬桥巷", pinyin: "xuanqiaoxiang", tx: 3357, ty: 3519.5, dx: 0 };
szmtr.stations["s19_0635"] = { name: "临顿路", displayName: "临顿路", pinyin: "lindunlu", tx: 3152, ty: 3680, dx: 0 };
szmtr.stations["0636"] = { name: "望星桥苏大", displayName: "望星桥苏大", pinyin: "wangxingqiaosuda", tx: 3262.5, ty: 4055, dx: 0 };
szmtr.stations["0637"] = { name: "徐家浜", displayName: "徐家浜", pinyin: "xujiabang", tx: 3465.5, ty: 3926, dx: 0 };
szmtr.stations["s25_0638"] = { name: "惹云桥", displayName: "惹云桥", pinyin: "reyunqiao", tx: 3709, ty: 4055, dx: 0 };
szmtr.stations["0639"] = { name: "秋塘浜", displayName: "秋塘浜", pinyin: "qiutangbang", tx: 3828.5, ty: 3926, dx: 0 };
szmtr.stations["s20_0640"] = { name: "李公堤西", displayName: "李公堤西", pinyin: "ligongdixi", tx: 4092, ty: 4055, dx: 0 };
szmtr.stations["s32_0641"] = { name: "琼姬墩", displayName: "琼姬墩", pinyin: "qiongjidun", tx: 4645, ty: 4055, dx: 0 };
szmtr.stations["0642"] = { name: "南施公园南", displayName: "南施公园南", pinyin: "nanshigongyuannan", tx: 4865.5, ty: 4055, dx: 0 };
szmtr.stations["s21_0643"] = { name: "苏州奥体中心", displayName: "苏州奥体中心", pinyin: "suzhouaotizhongxin", tx: 5244, ty: 4105.5, dx: 0 };
szmtr.stations["0644"] = { name: "儿童医院总院", displayName: "儿童医院总院", pinyin: "ertongyiyuanzongyuan", tx: 5416, ty: 4285.5, dx: 0 };
szmtr.stations["0645"] = { name: "涵青桥", displayName: "涵青桥", pinyin: "hanqingqiao", tx: 5416, ty: 4445.5, dx: 0 };
szmtr.stations["0646"] = { name: "金家堰", displayName: "金家堰", pinyin: "jinjiayan", tx: 5416, ty: 4611.5, dx: 0 };
szmtr.stations["0647"] = { name: "北斜步", displayName: "北斜步", pinyin: "beixiebu", tx: 5416, ty: 4776.5, dx: 0 };
szmtr.stations["0648"] = { name: "南斜步", displayName: "南斜步", pinyin: "nanxiebu", tx: 5416, ty: 4941.5, dx: 0 };
szmtr.stations["s22_0649"] = { name: "金尚路", displayName: "金尚路", pinyin: "jinshanglu", tx: 5364.5, ty: 5207, dx: 0 };
szmtr.stations["s23_0650"] = { name: "桑田岛", displayName: "桑田岛", pinyin: "sangtiandao", tx: 5540.5, ty: 5047, dx: 0 };
szmtr.stations["s5_0763"] = { name: "红庄", displayName: "红庄", pinyin: "hongzhuang", tx: 2980, ty: 5308, dx: 0 };
szmtr.stations["0764"] = { name: "蠡墅", displayName: "蠡墅", pinyin: "lishu", tx: 2852, ty: 5437, dx: 0 };
szmtr.stations["0765"] = { name: "石湖莫舍", displayName: "石湖莫舍", pinyin: "shihumoshe", tx: 2455, ty: 5494, dx: 0 };
szmtr.stations["0766"] = { name: "越溪", displayName: "越溪", pinyin: "yuexi", tx: 2376, ty: 5663, dx: 0 };
szmtr.stations["0767"] = { name: "文溪路", displayName: "文溪路", pinyin: "wenxilu", tx: 2169, ty: 5825, dx: 0 };
szmtr.stations["0768"] = { name: "天鹅荡路", displayName: "天鹅荡路", pinyin: "tianedanglu", tx: 1955, ty: 5994, dx: 0 };
szmtr.stations["0769"] = { name: "苏州湾北", displayName: "苏州湾北", pinyin: "suzhouwanbei", tx: 1843, ty: 6149, dx: 0 };
szmtr.stations["0770"] = { name: "木里", displayName: "木里", pinyin: "muli", tx: 1601, ty: 6149, dx: 0 };
szmtr.stations["s34_0840"] = { name: "西津桥", displayName: "西津桥", pinyin: "xijinqiao", tx: 1709, ty: 3340, dx: 0 };
szmtr.stations["0841"] = { name: "新元", displayName: "新元", pinyin: "xinyuan", tx: 1944, ty: 2995.5, dx: 0 };
szmtr.stations["0842"] = { name: "时家桥", displayName: "时家桥", pinyin: "shijiaqiao", tx: 1865, ty: 2737, dx: 0 };
szmtr.stations["s31_0843"] = { name: "白洋湾公园", displayName: "白洋湾公园", pinyin: "baiyangwangongyuan", tx: 1906.5, ty: 2638, dx: 0 };
szmtr.stations["0844"] = { name: "虎北路", displayName: "虎北路", pinyin: "hubeilu", tx: 2266.5, ty: 2513, dx: 0 };
szmtr.stations["0845"] = { name: "虎丘湿地公园", displayName: "虎丘湿地公园", pinyin: "huqiushidigongyuan", tx: 2403, ty: 2642, dx: 0 };
szmtr.stations["s35_0846"] = { name: "孙武纪念园", displayName: "孙武纪念园", pinyin: "sunwujinianyuan", tx: 2499, ty: 2513, dx: 0 };
szmtr.stations["0847"] = { name: "御窑", displayName: "御窑", pinyin: "yuyao", tx: 2815, ty: 2513, dx: 0 };
szmtr.stations["0848"] = { name: "陆慕/古巷", displayName: "陆慕/古巷", pinyin: "lumu/guxiang", tx: 2930, ty: 2642, dx: 0 };
szmtr.stations["s36_0849"] = { name: "阳澄湖中路", displayName: "阳澄湖中路", pinyin: "yangchenghuzhonglu", tx: 3110, ty: 2513, dx: 0 };
szmtr.stations["0850"] = { name: "夏圩", displayName: "夏圩", pinyin: "xiawei", tx: 3328, ty: 2642, dx: 0 };
szmtr.stations["s33_0851"] = { name: "白荡北", displayName: "白荡北", pinyin: "baidangbei", tx: 3709, ty: 2513, dx: 0 };
szmtr.stations["0852"] = { name: "五潨泾", displayName: "五潨泾", pinyin: "wucongjing", tx: 3907, ty: 2678, dx: 0 };
szmtr.stations["0853"] = { name: "古香圩", displayName: "古香圩", pinyin: "guxiangwei", tx: 4050, ty: 2821, dx: 0 };
szmtr.stations["0854"] = { name: "南泽庄", displayName: "南泽庄", pinyin: "nanzhezhuang", tx: 4122, ty: 3034.5, dx: 0 };
szmtr.stations["s37_0855"] = { name: "唐庄", displayName: "唐庄", pinyin: "tangzhuang", tx: 4111, ty: 3188, dx: 0 };
szmtr.stations["0856"] = { name: "古楼", displayName: "古楼", pinyin: "gulou", tx: 4538, ty: 3188, dx: 0 };
szmtr.stations["s38_0857"] = { name: "苏州园区/火车站", displayName: "苏州园区/火车站", pinyin: "suzhouyuanqu/huochezhan", tx: 4600, ty: 3348, dx: 45 };
szmtr.stations["0858"] = { name: "华池浜", displayName: "华池浜", pinyin: "huachibang", tx: 4850, ty: 3511.5, dx: 0 };
szmtr.stations["s39_0859"] = { name: "时代广场", displayName: "时代广场", pinyin: "shidaiguangchang", tx: 4600, ty: 3809, dx: 0 };
szmtr.stations["0860"] = { name: "苏州当代美术馆", displayName: "苏州当代美术馆", pinyin: "suzhoudaidangmeishuguan", tx: 4850, ty: 3867.5, dx: 0 };
szmtr.stations["s32_0861"] = { name: "琼姬墩", displayName: "琼姬墩", pinyin: "qiongjidun", tx: 4645, ty: 4055, dx: 0 };
szmtr.stations["s40_0862"] = { name: "斜塘", displayName: "斜塘", pinyin: "xietang", tx: 4820, ty: 4285, dx: 0 };
szmtr.stations["0863"] = { name: "莲池桥", displayName: "莲池桥", pinyin: "lianchiqiao", tx: 4850, ty: 4503.5, dx: 0 };
szmtr.stations["0864"] = { name: "仁爱路", displayName: "仁爱路", pinyin: "renailu", tx: 4850, ty: 4834.5, dx: 0 };
szmtr.stations["s41_0865"] = { name: "松涛街", displayName: "松涛街", pinyin: "songtaojie", tx: 4820, ty: 5207, dx: 0 };
szmtr.stations["0866"] = { name: "裕新路", displayName: "裕新路", pinyin: "yuxinlu", tx: 4850, ty: 5350.5, dx: 0 };
szmtr.stations["0867"] = { name: "车坊", displayName: "车坊", pinyin: "chefang", tx: 4850, ty: 5595.5, dx: 0 };
szmtr.stations["s24_1140"] = { name: "唯亭", displayName: "唯亭", pinyin: "weiting", tx: 5659, ty: 3348, dx: 0 };
szmtr.stations["1141"] = { name: "草鞋山", displayName: "草鞋山", pinyin: "caoxieshan", tx: 5820.5, ty: 3348, dx: 0 };
szmtr.stations["1142"] = { name: "阳澄湖东", displayName: "阳澄湖东", pinyin: "yangchenghudong", tx: 6095, ty: 3391.5, dx: 0 };
szmtr.stations["1143"] = { name: "正仪", displayName: "正仪", pinyin: "zhengyi", tx: 6095, ty: 3545.5, dx: 0 };
szmtr.stations["1144"] = { name: "莲湖公园", displayName: "莲湖公园", pinyin: "lianhugongyuan", tx: 6095, ty: 3700.5, dx: 0 };
szmtr.stations["1145"] = { name: "祖冲之公园", displayName: "祖冲之公园", pinyin: "zuchongzhigongyuan", tx: 6095, ty: 3854.5, dx: 0 };
szmtr.stations["1146"] = { name: "昆山文化艺术中心", displayName: "昆山文化艺术中心", pinyin: "kunshanyishuzhongxin", tx: 6095, ty: 4009.5, dx: 0 };
szmtr.stations["1147"] = { name: "共青", displayName: "共青", pinyin: "gongqing", tx: 6095, ty: 4163.5, dx: 0 };
szmtr.stations["1148"] = { name: "江浦", displayName: "江浦", pinyin: "jiangpu", tx: 6095, ty: 4317.5, dx: 0 };
szmtr.stations["1149"] = { name: "白马泾", displayName: "白马泾", pinyin: "baimajing", tx: 6095, ty: 4472.5, dx: 0 };
szmtr.stations["1150"] = { name: "玉山广场", displayName: "玉山广场", pinyin: "yushanguangchang", tx: 6095, ty: 4626.5, dx: 0 };
szmtr.stations["1151"] = { name: "绣衣", displayName: "绣衣", pinyin: "xiuyi", tx: 6095, ty: 4780.5, dx: 0 };
szmtr.stations["1152"] = { name: "昆山城市广场", displayName: "昆山城市广场", pinyin: "kunshanchengshiguangchang", tx: 6095, ty: 4935.5, dx: 0 };
szmtr.stations["1153"] = { name: "金浦大桥东", displayName: "金浦大桥东", pinyin: "jinpudaqiaodong", tx: 6095, ty: 5089.5, dx: 0 };
szmtr.stations["1154"] = { name: "顺帆北路", displayName: "顺帆北路", pinyin: "shunfanbeilu", tx: 6095, ty: 5244.5, dx: 0 };
szmtr.stations["1155"] = { name: "鱼池泾", displayName: "鱼池泾", pinyin: "yuchijing", tx: 6095, ty: 5398.5, dx: 0 };
szmtr.stations["1156"] = { name: "白河潭", displayName: "白河潭", pinyin: "baihetan", tx: 6095, ty: 5552.5, dx: 0 };
szmtr.stations["1157"] = { name: "兵希", displayName: "兵希", pinyin: "bingxi", tx: 6095, ty: 5707.5, dx: 0 };
szmtr.stations["1158"] = { name: "夏驾河公园", displayName: "夏驾河公园", pinyin: "xiajahegongyuan", tx: 6095, ty: 5861.5, dx: 0 };
szmtr.stations["1159"] = { name: "盛庄", displayName: "盛庄", pinyin: "shengzhuang", tx: 6115, ty: 6015.5, dx: 0 };
szmtr.stations["1160"] = { name: "章基路南", displayName: "章基路南", pinyin: "zhangjilunan", tx: 6095, ty: 6170.5, dx: 0 };
szmtr.stations["1161"] = { name: "夏桥", displayName: "夏桥", pinyin: "xiaqiao", tx: 6095, ty: 6324.5, dx: 0 };
szmtr.stations["1162"] = { name: "神童泾", displayName: "神童泾", pinyin: "shentongjing", tx: 6095, ty: 6479.5, dx: 0 };
szmtr.stations["1163"] = { name: "菉葭", displayName: "菉葭", pinyin: "lujiya", tx: 6095, ty: 6633.5, dx: 0 };
szmtr.stations["1164"] = { name: "花桥博览中心", displayName: "花桥博览中心", pinyin: "huaqiaobolanzhongxin", tx: 6095, ty: 6787.5, dx: 0 };
szmtr.stations["1165"] = { name: "集善", displayName: "集善", pinyin: "jishan", tx: 6095, ty: 6942.5, dx: 0 };
szmtr.stations["1166"] = { name: "花溪公园", displayName: "花溪公园", pinyin: "huaxigongyuan", tx: 6095, ty: 7096.5, dx: 0 };
szmtr.stations["s90_1167"] = { name: "花桥", displayName: "花桥", pinyin: "huaqiao", tx: 6095, ty: 7250.5, dx: 0 };
szmtr.stations["0651"] = { name: "华云", displayName: "华云", pinyin: "huayun", tx: 5745, ty: 5047, dx: 0 };
