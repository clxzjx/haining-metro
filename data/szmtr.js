var szmtr = {};
szmtr.lineNumber = 9;
szmtr.width = 5850;
szmtr.height = 5709;
szmtr.line = new Array();
szmtr.line[0] = { id: 10, name: "10号线", lineName: "10", eName: "Line 10", order: 11, svgOrder: 10, color: "#FFFFFF", maskColor: "#FFFFFF", x1: 0, y1: 0, x2: 1031, y2: 368, w: 90 };
szmtr.line[1] = { id: 8, name: "8号线", lineName: "8", eName: "Line 8", order: 8, svgOrder: 9, color: "#A09200", maskColor: "#f3f2e0", x1: 1950, y1: 3243, x2: 4651, y2: 5551, w: 90 };
szmtr.line[2] = { id: 1, name: "1号线", lineName: "1", eName: "Line 1", order: 1, svgOrder: 8, color: "#78BE20", maskColor: "#e5fae5", x1: 876, y1: 3894, x2: 5615, y2: 3553, w: 90 };
szmtr.line[3] = { id: 2, name: "2号线", lineName: "2", eName: "Line 2", order: 2, svgOrder: 7, color: "#EF3340", maskColor: "#f8e3e3", x1: 2937, y1: 1087, x2: 5629, y2: 5154, w: 90 };
szmtr.line[4] = { id: 3, name: "3号线", lineName: "3", eName: "Line 3", order: 3, svgOrder: 6, color: "#ff8200", maskColor: "#ffe7d0", x1: 1305, y1: 1871, x2: 5620, y2: 3128, w: 90 };
szmtr.line[5] = { id: 4, name: "4号线", lineName: "4", eName: "Line 4", order: 4, svgOrder: 5, color: "#0072CE", maskColor: "#e1edf6", x1: 2800, y1: 1695, x2: 4227, y2: 6983, w: 90 };
szmtr.line[6] = { id: 5, name: "5号线", lineName: "5", eName: "Line 5", order: 6, svgOrder: 4, color: "#E93CAC", maskColor: "#fce0f2", x1: 219, y1: 5501, x2: 5318, y2: 2883, w: 90 };
szmtr.line[7] = { id: 6, name: "6号线", lineName: "6", eName: "Line 6", order: 7, svgOrder: 3, color: "#41B6E6", maskColor: "#d9f0fa", x1: 1457, y1: 1781, x2: 5762, y2: 5154, w: 90 };
szmtr.line[8] = { id: 7, name: "7号线", lineName: "7", eName: "Line 7", order:5, svgOrder: 2, color: "#a77bca", maskColor: "#eee6f5", x1: 3355, y1: 1620, x2: 1480, y2: 6025, w: 90  };
szmtr.line[9] = { id: 11, name: "11号线", lineName: "11", eName: "Line 11", order: 10, svgOrder: 1, color: "#F1C6A7", maskColor: "#FBF0E9", x1: 5730, y1: 3128, x2: 6220, y2: 7197, w: 100 };
szmtr.line[10] = { id: 9, name: "6延线", lineName: "6", eName: "Line 6", order: 9, svgOrder: 0, color: "#EAEAEA", maskColor: "#F1F1F1", x1: 0, y1: 0, x2: 0, y2: 0, w: 90 };
szmtr.line[11] = { id: 12, name: "7延线", lineName: "7", eName: "Line 7", order: 12, svgOrder: 11, color: "#EAEAEA", maskColor: "#F1F1F1", x1: 0, y1: 0, x2: 0, y2: 0, w: 90 };

szmtr.line[0].station = new Array(
    { id: "t0711", x: 3090, y: 642, type: "offline" },
    { id: "t0712", x: 3090, y: 800, type: "offline" },
    { id: "1001", x: 3090, y: 1524, type: "hide" },
    { id: "1002", x: 3290, y: 1324, type: "offline" },
    { id: "1003", x: 3459, y: 1155, type: "offline" },
    { id: "t1001", x: 3524, y: 1090, r: 45, sweep: 1, type: "arc" },
    { id: "1004", x: 3686, y: 1090, type: "offline" },
    { id: "1005", x: 3890, y: 1090, type: "offline" },
    { id: "t1002", x: 4087, y: 1090, r: 45, sweep: 0, type: "arc" },
    { id: "1006", x: 4087, y: 945, type: "offline" },
    { id: "1007", x: 4087, y: 758, type: "offline" },
    { id: "1008", x: 4087, y: 543, type: "offline" },
    { id: "t1003", x: 4087, y: 414, r: 45, sweep: 0, type: "arc" },
    { id: "1009", x: 3917, y: 414, type: "offline" },
    { id: "1010", x: 3692, y: 414, type: "offline" },
    { id: "1011", x: 3468, y: 414, type: "offline" },
    { id: "1012", x: 3243, y: 414, type: "offline" },
    { id: "1013", x: 3018, y: 414, type: "offline" },
    { id: "1014", x: 2794, y: 414, type: "offline" },
    { id: "1015", x: 2569, y: 414, type: "offline" },
    { id: "1016", x: 2343, y: 414, type: "offline" },
    { id: "1017", x: 2119, y: 414, type: "offline" },
    { id: "1018", x: 1895, y: 414, type: "offline" },
    { id: "1019", x: 1669, y: 414, type: "offline" },
    { id: "1020", x: 1444, y: 414, type: "offline" },
    { id: "1021", x: 1220, y: 414, type: "offline" }
);


szmtr.line[2].station = new Array(
    { id: "0140", x: 1036, y: 3942, type: "normal" },
    { id: "0141", x: 1250, y: 3942, type: "normal" },
    { id: "0142", x: 1463, y: 3942, type: "normal" },
    { id: "0143", x: 1677, y: 3942, type: "normal" },
    { id: "t0101", x: 1773, y: 3942, r: 45, sweep: 0, type: "arc" },
    { id: "s6_0144", x: 1894, y: 3821, type: "transfer" },
    { id: "t0002", x: 1986, y: 3729, r: 45, sweep: 1, type: "arc" },
    { id: "0145", x: 2047, y: 3729, type: "normal" },
    { id: "0146", x: 2210, y: 3729, type: "normal" },
    { id: "0147", x: 2373, y: 3729, type: "normal" },
    { id: "0148", x: 2536, y: 3729, type: "normal" },
    { id: "s1_0149", x: 2744, y: 3729, type: "transfer" },
    { id: "0150", x: 2917, y: 3729, type: "normal" },
    { id: "s3_0151", x: 3090, y: 3729, type: "transfer" },
    { id: "s19_0152", x: 3307, y: 3729, type: "transfer" },
    { id: "0153", x: 3444, y: 3729, type: "normal" },
    { id: "0154", x: 3564, y: 3729, type: "normal" },
    { id: "s27_0155", x: 3689, y: 3729, type: "transfer" },
    { id: "0156", x: 3896, y: 3729, type: "normal" },
    { id: "s9_0157", x: 4072, y: 3729, type: "transfer" },
    { id: "0158", x: 4481, y: 3729, type: "normal" },
    { id: "s39_0159", x: 4800, y: 3729, type: "transfer" },
    { id: "0160", x: 4988, y: 3729, type: "normal" },
    { id: "0161", x: 5177, y: 3729, type: "normal" },
    { id: "s14_0162", x: 5366, y: 3729, type: "transfer" },
    { id: "0163", x: 5561, y: 3729, type: "normal" }
);

szmtr.line[3].station = new Array(
    { id: "0238", x: 3090, y: 1120, type: "normal" },
    { id: "0239", x: 3090, y: 1319, type: "normal" },
    { id: "0240", x: 3090, y: 1524, type: "normal" },
    { id: "0241", x: 3090, y: 1743, type: "normal" },
    { id: "0242", x: 3090, y: 1941, type: "normal" },
    { id: "0243", x: 3090, y: 2146, type: "normal" },
    { id: "0244", x: 3090, y: 2347, type: "normal" },
    { id: "s36_0245", x: 3090, y: 2562, type: "transfer" },
    { id: "0246", x: 3090, y: 2676, type: "normal" },
    { id: "0247", x: 3090, y: 2789, type: "normal" },
    { id: "s18_0248", x: 3090, y: 2904, type: "transfer" },
    { id: "t0201", x: 3090, y: 2950, r: 45, sweep: 1, type: "arc" },
    { id: "s2_0249", x: 2917, y: 3123, type: "transfer" },
    { id: "t0202", x: 2744, y: 3296, r: 45, sweep: 0, type: "arc" },
    { id: "0250", x: 2744, y: 3342, type: "normal" },
    { id: "0251", x: 2744, y: 3526, type: "normal" },
    { id: "s1_0252", x: 2744, y: 3729, type: "transfer" },
    { id: "0253", x: 2744, y: 3959, type: "normal" },
    { id: "s11_0254", x: 2744, y: 4205, type: "transfer" },
    { id: "0255", x: 2744, y: 4363, type: "normal" },
    { id: "0256", x: 2744, y: 4507, type: "normal" },
    { id: "0257", x: 2744, y: 4652, type: "normal" },
    { id: "s7_0258", x: 2744, y: 4813, type: "transfer" },
    { id: "0259", x: 2744, y: 5056, type: "normal" },
    { id: "t0203", x: 2744, y: 5127, r: 45, sweep: 0, type: "arc" },
    { id: "s4_0260", x: 3090, y: 5127, type: "transfer" },
    { id: "0261", x: 3314, y: 5127, type: "normal" },
    { id: "0262", x: 3518, y: 5127, type: "normal" },
    { id: "s30_0263", x: 3689, y: 5127, type: "transfer" },
    { id: "0264", x: 3873, y: 5127, type: "normal" },
    { id: "0265", x: 4058, y: 5127, type: "normal" },
    { id: "0266", x: 4243, y: 5127, type: "normal" },
    { id: "0267", x: 4429, y: 5127, type: "normal" },
    { id: "0268", x: 4614, y: 5127, type: "normal" },
    { id: "s41_0269", x: 4800, y: 5127, type: "transfer" },
    { id: "0270", x: 5115, y: 5127, type: "normal" },
    { id: "s22_0271", x: 5432, y: 5127, type: "transfer" },
    { id: "s23_0272", x: 5608, y: 5127, type: "transfer" }
);

szmtr.line[4].station = new Array(
    { id: "s16_0340", x: 1476, y: 1961, type: "transfer" },
    { id: "t0301", x: 1608, y: 2093, r: 45, sweep: 1, type: "arc" },
    { id: "0341", x: 1608, y: 2255, type: "normal" },
    { id: "0342", x: 1608, y: 2445, type: "normal" },
    { id: "0343", x: 1608, y: 2643, type: "normal" },
    { id: "0344", x: 1608, y: 2832, type: "normal" },
    { id: "t0302", x: 1608, y: 3006, r: 45, sweep: 0, type: "arc" },
    { id: "0345", x: 1706, y: 3104, type: "normal" },
    { id: "s34_0346", x: 1894, y: 3292, type: "transfer" },
    { id: "0347", x: 1894, y: 3527, type: "normal" },
    { id: "s6_0348", x: 1894, y: 3821, type: "transfer" },
    { id: "0349", x: 1894, y: 4023, type: "normal" },
    { id: "0350", x: 1894, y: 4213, type: "normal" },
    { id: "s10_0351", x: 1894, y: 4419, type: "transfer" },
    { id: "t0303", x: 1894, y: 4465, r: 45, sweep: 0, type: "arc" },
    { id: "0352", x: 2013, y: 4584, type: "normal" },
    { id: "0353", x: 2113, y: 4684, type: "normal" },
    { id: "0354", x: 2213, y: 4784, type: "normal" },
    { id: "t0304", x: 2242, y: 4813, r: 45, sweep: 0, type: "arc" },
    { id: "0355", x: 2462, y: 4813, type: "normal" },
    { id: "s7_0356", x: 2744, y: 4813, type: "transfer" },
    { id: "s8_0357", x: 3089, y: 4813, type: "transfer" },
    { id: "0358", x: 3304, y: 4813, type: "normal" },
    { id: "0359", x: 3518, y: 4813, type: "normal" },
    { id: "s29_0360", x: 3689, y: 4813, type: "transfer" },
    { id: "t0305", x: 3724, y: 4813, r: 45, sweep: 0, type: "arc" },
    { id: "0361", x: 3936, y: 4601, type: "normal" },
    { id: "t0306", x: 4072, y: 4465, r: 45, sweep: 0, type: "arc" },
    { id: "0362", x: 4072, y: 4431, type: "normal" },
    { id: "s13_0363", x: 4072, y: 4205, type: "transfer" },
    { id: "s20_0364", x: 4072, y: 3975, type: "transfer" },
    { id: "s9_0365", x: 4072, y: 3729, type: "transfer" },
    { id: "0366", x: 4072, y: 3553, type: "normal" },
    { id: "0367", x: 4072, y: 3392, type: "normal" },
    { id: "t0307", x: 4072, y: 3268, r: 45, sweep: 1, type: "arc" },
    { id: "s37_0368", x: 4156, y: 3268, type: "transfer" },
    { id: "0369", x: 4370, y: 3268, type: "normal" },
    { id: "s38_0370", x: 4800, y: 3268, type: "transfer" },
    { id: "0371", x: 4938, y: 3268, type: "normal" },
    { id: "0372", x: 5080, y: 3268, type: "normal" },
    { id: "0373", x: 5222, y: 3268, type: "normal" },
    { id: "s15_0374", x: 5366, y: 3268, type: "transfer" },
    { id: "0375", x: 5528, y: 3268, type: "normal" },
    { id: "s24_0376", x: 5704, y: 3268, type: "transfer" }
);

szmtr.line[5].station = new Array(
    { id: "0440", x: 2744, y: 1740, type: "normal" },
    { id: "0441", x: 2744, y: 1942, type: "normal" },
    { id: "0442", x: 2744, y: 2144, type: "normal" },
    { id: "0443", x: 2744, y: 2346, type: "normal" },
    { id: "s35_0444", x: 2744, y: 2562, type: "transfer" },
    { id: "0445", x: 2744, y: 2723, type: "normal" },
    { id: "s17_0446", x: 2744, y: 2904, type: "transfer" },
    { id: "t0401", x: 2744, y: 2950, r: 45, sweep: 0, type: "arc" },
    { id: "s2_0447", x: 2917, y: 3123, type: "transfer" },
    { id: "t0402", x: 3090, y: 3296, r: 45, sweep: 1, type: "arc" },
    { id: "0448", x: 3090, y: 3342, type: "normal" },
    { id: "0449", x: 3090, y: 3526, type: "normal" },
    { id: "s3_0450", x: 3090, y: 3729, type: "transfer" },
    { id: "0451", x: 3090, y: 3959, type: "normal" },
    { id: "s12_0452", x: 3090, y: 4205, type: "transfer" },
    { id: "0453", x: 3090, y: 4411, type: "normal" },
    { id: "0454", x: 3090, y: 4606, type: "normal" },
    { id: "s8_0455", x: 3090, y: 4813, type: "transfer" },
    { id: "s4_0456", x: 3090, y: 5127, type: "transfer" },
    { id: "s5_0457", x: 3090, y: 5357, type: "transfer" },
    { id: "0458", x: 3090, y: 5543, type: "normal" },
    { id: "0459", x: 3090, y: 5732, type: "normal" },
    { id: "0460", x: 3090, y: 6041, type: "normal" },
    { id: "0461", x: 3090, y: 6228, type: "normal" },
    { id: "0462", x: 3090, y: 6418, type: "normal" },
    { id: "0463", x: 3090, y: 6609, type: "normal" },
    { id: "0464", x: 3090, y: 6795, type: "normal" },
    { id: "0465", x: 3090, y: 6982, type: "normal" },
    { id: "t0403", x: 3090, y: 7137, r: 45, sweep: 0, type: "arc" },
    { id: "0466", x: 3250, y: 7137, type: "normal" },
    { id: "0467", x: 3552, y: 7137, type: "normal" },
    { id: "0468", x: 3842, y: 7137, type: "normal" },
    { id: "0469", x: 4119, y: 7137, type: "normal" },
    { id: "0470", x: 4344, y: 7137, type: "normal" }
);

szmtr.line[6].station = new Array(
    { id: "0531", x: 267, y: 5449, type: "normal" },
    { id: "0532", x: 397, y: 5449, type: "normal" },
    { id: "0533", x: 527, y: 5449, type: "normal" },
    { id: "t0501", x: 565, y: 5449, r: 45, sweep: 0, type: "arc" },
    { id: "0534", x: 674, y: 5340, type: "normal" },
    { id: "0535", x: 809, y: 5205, type: "normal" },
    { id: "0536", x: 945, y: 5069, type: "normal" },
    { id: "0537", x: 1081, y: 4933, type: "normal" },
    { id: "0538", x: 1216, y: 4798, type: "normal" },
    { id: "0539", x: 1351, y: 4663, type: "normal" },
    { id: "0540", x: 1487, y: 4527, type: "normal" },
    { id: "t0502", x: 1595, y: 4419, r: 45, sweep: 1, type: "arc" },
    { id: "0541", x: 1634, y: 4419, type: "normal" },
    { id: "0542", x: 1764, y: 4419, type: "normal" },
    { id: "s10_0543", x: 1894, y: 4419, type: "transfer" },
    { id: "t0503", x: 2010, y: 4419, r: 45, sweep: 0, type: "arc" },
    { id: "t0504", x: 2117, y: 4312, type: "hide" },
    { id: "t0505", x: 2224, y: 4205, r: 45, sweep: 1, type: "arc" },
    { id: "0544", x: 2397, y: 4205, type: "normal" },
    { id: "s11_0545", x: 2744, y: 4205, type: "transfer" },
    { id: "0546", x: 2917, y: 4205, type: "normal" },
    { id: "s12_0547", x: 3090, y: 4205, type: "transfer" },
    { id: "0548", x: 3251, y: 4205, type: "normal" },
    { id: "0549", x: 3411, y: 4205, type: "normal" },
    { id: "0550", x: 3571, y: 4205, type: "normal" },
    { id: "s28_0551", x: 3689, y: 4205, type: "transfer" },
    { id: "s13_0552", x: 4072, y: 4205, type: "transfer" },
    { id: "0553", x: 4200, y: 4205, type: "normal" },
    { id: "0554", x: 4340, y: 4205, type: "normal" },
    { id: "0555", x: 4492, y: 4205, type: "normal" },
    { id: "0556", x: 4647, y: 4205, type: "normal" },
    { id: "s40_0557", x: 4800, y: 4205, type: "transfer" },
    { id: "t0506", x: 5079, y: 4205, r: 45, sweep: 0, type: "arc" },
    { id: "s21_0558", x: 5194, y: 4090, type: "transfer" },
    { id: "t0507", x: 5366, y: 3918, r: 45, sweep: 0, type: "arc" },
    { id: "0559", x: 5366, y: 3888, type: "normal" },
    { id: "s14_0560", x: 5366, y: 3729, type: "transfer" },
    { id: "0561", x: 5366, y: 3575, type: "normal" },
    { id: "0562", x: 5366, y: 3420, type: "normal" },
    { id: "s15_0563", x: 5366, y: 3268, type: "transfer" },
    { id: "0564", x: 5366, y: 3025, type: "normal" }
);

szmtr.line[7].station = new Array(
    { id: "s16_0621", x: 1498, y: 1939, type: "transfer" },
    { id: "0622", x: 1671, y: 2112, type: "normal" },
    { id: "0623", x: 1827, y: 2268, type: "normal" },
    { id: "0624", x: 1998, y: 2439, type: "normal" },
    { id: "s31_0625", x: 2181.5, y: 2622.5, type: "transfer" },
    { id: "0626", x: 2260, y: 2701, type: "normal" },
    { id: "0627", x: 2345, y: 2786, type: "normal" },
    { id: "0628", x: 2430, y: 2871, type: "normal" },
    { id: "t0601", x: 2463, y: 2904, r: 45, sweep: 0, type: "arc" },
    { id: "0629", x: 2591, y: 2904, type: "normal" },
    { id: "s17_0630", x: 2744, y: 2904, type: "transfer" },
    { id: "s18_0631", x: 3090, y: 2904, type: "transfer" },
    { id: "t0602", x: 3307, y: 2904, r: 45, sweep: 1, type: "arc" },
    { id: "0632", x: 3307, y: 3057, type: "normal" },
    { id: "0633", x: 3307, y: 3280, type: "normal" },
    { id: "0634", x: 3307, y: 3504, type: "normal" },
    { id: "s19_0635", x: 3307, y: 3729, type: "transfer" },
    { id: "t0603", x: 3307, y: 3975, r: 45, sweep: 0, type: "arc" },
    { id: "0636", x: 3375, y: 3975, type: "normal" },
    { id: "0637", x: 3533, y: 3975, type: "normal" },
    { id: "s25_0638", x: 3689, y: 3975, type: "transfer" },
    { id: "0639", x: 3896, y: 3975, type: "normal" },
    { id: "s20_0640", x: 4072, y: 3975, type: "transfer" },
    { id: "s32_0641", x: 4800, y: 3975, type: "transfer" },
    { id: "0642", x: 5058, y: 3975, type: "normal" },
    { id: "t0604", x: 5079, y: 3975, r: 45, sweep: 1, type: "arc" },
    { id: "s21_0643", x: 5194, y: 4090, type: "transfer" },
    { id: "t0605", x: 5366, y: 4262, r: 45, sweep: 1, type: "arc" },
    { id: "0644", x: 5366, y: 4270, type: "normal" },
    { id: "0645", x: 5366, y: 4430, type: "normal" },
    { id: "0646", x: 5366, y: 4596, type: "normal" },
    { id: "0647", x: 5366, y: 4761, type: "normal" },
    { id: "0648", x: 5366, y: 4926, type: "normal" },
    { id: "t0606", x: 5366, y: 5096, r: 45, sweep: 0, type: "arc" },
    { id: "s22_0649", x: 5432, y: 5096, type: "transfer" },
    { id: "s23_0650", x: 5608, y: 5096, type: "transfer" }
);

szmtr.line[8].station = new Array(
    { id: "0742", x: 3498, y: 1629, type: "normal" },
    { id: "0743", x: 3609, y: 1740, type: "normal" },
    { id: "t0716", x: 3689, y: 1820, r: 45, sweep: 1, type: "arc" },
    { id: "0744", x: 3689, y: 1915, type: "normal" },
    { id: "0745", x: 3689, y: 2127, type: "normal" },
    { id: "0746", x: 3689, y: 2338, type: "normal" },
    { id: "s33_0747", x: 3689, y: 2562, type: "transfer" },
    { id: "0748", x: 3689, y: 2809, type: "hide" },
    { id: "0749", x: 3689, y: 3039, type: "normal" },
    { id: "0750", x: 3689, y: 3269, type: "normal" },
    { id: "0751", x: 3689, y: 3499, type: "normal" },
    { id: "s27_0752", x: 3689, y: 3729, type: "transfer" },
    { id: "s25_0753", x: 3689, y: 3975, type: "transfer" },
    { id: "s28_0754", x: 3689, y: 4205, type: "transfer" },
    { id: "0755", x: 3689, y: 4407, type: "normal" },
    { id: "0756", x: 3689, y: 4610, type: "normal" },
    { id: "s29_0757", x: 3689, y: 4813, type: "transfer" },
    { id: "0758", x: 3689, y: 4959, type: "normal" },
    { id: "s30_0759", x: 3689, y: 5127, type: "transfer" },
    { id: "t0717", x: 3689, y: 5357, r: 45, sweep: 1, type: "arc" },
    { id: "0760", x: 3585, y: 5357, type: "normal" },
    { id: "0761", x: 3413, y: 5357, type: "normal" },
    { id: "0762", x: 3256, y: 5357, type: "normal" },
    { id: "t0718", x: 3090, y: 5357, type: "hide" },
    { id: "s5_0763", x: 3090, y: 5357, type: "transfer" },
    { id: "0764", x: 2897, y: 5357, type: "normal" },
    { id: "t0721", x: 2839, y: 5357, r: 45, sweep: 0, type: "arc" },
    { id: "0765", x: 2685, y: 5511, type: "normal" },
    { id: "0766", x: 2516, y: 5680, type: "normal" },
    { id: "0767", x: 2354, y: 5842, type: "normal" },
    { id: "0768", x: 2185, y: 6011, type: "normal" },
    { id: "t0722", x: 2127, y: 6069, r: 45, sweep: 1, type: "arc" },
    { id: "0769", x: 1933, y: 6069, type: "normal" },
    { id: "0770", x: 1646, y: 6069, type: "normal" }
);

szmtr.line[1].station = new Array(
    { id: "s34_0840", x: 1894, y: 3292, type: "transfer" },
    { id: "0841", x: 1894, y: 2980, type: "normal" },
    { id: "t0801", x: 1894, y: 2910, r: 45, sweep: 1, type: "arc" },
    { id: "0842", x: 2050, y: 2754, type: "normal" },
    { id: "s31_0843", x: 2181.5, y: 2622.5, type: "transfer" },
    { id: "t0802", x: 2242, y: 2562, r: 45, sweep: 1, type: "arc" },
    { id: "0844", x: 2334, y: 2562, type: "normal" },
    { id: "0845", x: 2538, y: 2562, type: "normal" },
    { id: "s35_0846", x: 2744, y: 2562, type: "transfer" },
    { id: "0847", x: 2860, y: 2562, type: "normal" },
    { id: "0848", x: 2975, y: 2562, type: "normal" },
    { id: "s36_0849", x: 3090, y: 2562, type: "transfer" },
    { id: "0850", x: 3373, y: 2562, type: "normal" },
    { id: "s33_0851", x: 3689, y: 2562, type: "transfer" },
    { id: "t0803", x: 3724, y: 2562, r: 45, sweep: 1, type: "arc" },
    { id: "0852", x: 3857, y: 2695, type: "normal" },
    { id: "0853", x: 4000, y: 2838, type: "normal" },
    { id: "t0804", x: 4072, y: 2910, r: 45, sweep: 1, type: "arc" },
    { id: "0854", x: 4072, y: 3019, type: "normal" },
    { id: "t0805", x: 4072, y: 3237, r: 45, sweep: 0, type: "arc" },
    { id: "s37_0855", x: 4156, y: 3237, type: "transfer" },
    { id: "0856", x: 4583, y: 3237, type: "normal" },
    { id: "t0806", x: 4800, y: 3237, r: 45, sweep: 1, type: "arc" },
    { id: "s38_0857", x: 4800, y: 3268, type: "transfer" },
    { id: "0858", x: 4800, y: 3496, type: "normal" },
    { id: "s39_0859", x: 4800, y: 3729, type: "transfer" },
    { id: "0860", x: 4800, y: 3852, type: "normal" },
    { id: "s32_0861", x: 4800, y: 3975, type: "transfer" },
    { id: "s40_0862", x: 4800, y: 4205, type: "transfer" },
    { id: "0863", x: 4800, y: 4488, type: "normal" },
    { id: "0864", x: 4800, y: 4819, type: "normal" },
    { id: "s41_0865", x: 4800, y: 5127, type: "transfer" },
    { id: "0866", x: 4800, y: 5335, type: "normal" },
    { id: "0867", x: 4800, y: 5580, type: "normal" }
);

szmtr.line[9].station = new Array(
    { id: "s24_1140", x: 5704, y: 3268, type: "transfer" },
    { id: "1141", x: 5888, y: 3268, type: "normal" },
    { id: "t1101", x: 6045, y: 3268, r: 45, sweep: 1, type: "arc" },
    { id: "1142", x: 6045, y: 3376, type: "normal" },
    { id: "1143", x: 6045, y: 3530, type: "normal" },
    { id: "1144", x: 6045, y: 3685, type: "normal" },
    { id: "1145", x: 6045, y: 3839, type: "normal" },
    { id: "1146", x: 6045, y: 3994, type: "normal" },
    { id: "1147", x: 6045, y: 4148, type: "normal" },
    { id: "1148", x: 6045, y: 4302, type: "normal" },
    { id: "1149", x: 6045, y: 4457, type: "normal" },
    { id: "1150", x: 6045, y: 4611, type: "normal" },
    { id: "1151", x: 6045, y: 4765, type: "normal" },
    { id: "1152", x: 6045, y: 4920, type: "normal" },
    { id: "1153", x: 6045, y: 5074, type: "normal" },
    { id: "1154", x: 6045, y: 5229, type: "normal" },
    { id: "1155", x: 6045, y: 5383, type: "normal" },
    { id: "1156", x: 6045, y: 5537, type: "normal" },
    { id: "1157", x: 6045, y: 5692, type: "normal" },
    { id: "1158", x: 6045, y: 5846, type: "normal" },
    { id: "1159", x: 6045, y: 6000, type: "normal" },
    { id: "1160", x: 6045, y: 6155, type: "normal" },
    { id: "1161", x: 6045, y: 6309, type: "normal" },
    { id: "1162", x: 6045, y: 6464, type: "normal" },
    { id: "1163", x: 6045, y: 6618, type: "normal" },
    { id: "1164", x: 6045, y: 6772, type: "normal" },
    { id: "1165", x: 6045, y: 6927, type: "normal" },
    { id: "1166", x: 6045, y: 7081, type: "normal" },
    { id: "s90_1167", x: 6045, y: 7235, type: "transfer" }
);

szmtr.line[10].station = new Array(
    { id: "t0607", x: 5608, y: 5096, type: "hide" },
    { id: "0651", x: 5790, y: 5096, type: "offline" }
);

szmtr.line[11].station = new Array(
    //{ id: "t0701", x: 1949, y: 1805, type: "offline" },
    //{ id: "t0702", x: 2113, y: 1641, type: "offline" },
    //{ id: "t0703", x: 2230, y: 1524, r: 45, sweep: 1, type: "arc" },
    //{ id: "t0704", x: 2287, y: 1524, type: "offline" },
    //{ id: "t0705", x: 2559, y: 1524, type: "offline" },
    //{ id: "t0706", x: 2744, y: 1524, type: "hide" },
    //{ id: "t0707", x: 2744, y: 1740, type: "hide" },
    //{ id: "t0708", x: 2744, y: 1319, type: "offline" },
    //{ id: "t0709", x: 2744, y: 1120, type: "offline" },
    { id: "0738", x: 2744, y: 1524, type: "offline" },
    { id: "0739", x: 2923, y: 1524, type: "offline" },
    //{ id: "t0710", x: 3090, y: 1524, type: "hide" },
    //{ id: "t0714", x: 3090, y: 1524, type: "hide" },
    { id: "0741", x: 3324, y: 1524, type: "offline" },
     { id: "t0715", x: 3393, y: 1524, r: 45, sweep: 1, type: "arc" },
     { id: "t0742", x: 3498, y: 1629, type: "hide" }
);




szmtr.transferStations = new Array();
szmtr.transferStations["s1"] = {stations:["0149", "0252"], dx:0, dy:0, r:0, c:23};
szmtr.transferStations["s2"] = {stations:["0249", "0447"], dx:0, dy:0, r:2.356, c:58};
szmtr.transferStations["s3"] = {stations:["0151", "0450"], dx:0, dy:0, r:0, c:75};
szmtr.transferStations["s4"] = {stations:["0260", "0456"], dx:0, dy:0, r:0, c:43};
szmtr.transferStations["s5"] = {stations:["0457", "0763"], dx:0, dy:0, r:1.571, c:74};
szmtr.transferStations["s6"] = {stations:["0144", "0348"], dx:0, dy:0, r:-0.785, c:77};
szmtr.transferStations["s7"] = {stations:["0258", "0356"], dx:0, dy:0, r:1.571, c:14};
szmtr.transferStations["s8"] = {stations:["0357", "0455"], dx:0, dy:0, r:-1.571, c:46};
szmtr.transferStations["s9"] = {stations:["0157", "0365"], dx:0, dy:0, r:0, c:85};
szmtr.transferStations["s10"] = {stations:["0351", "0543"], dx:0, dy:0, r:1.571, c:53};
szmtr.transferStations["s11"] = {stations:["0254", "0545"], dx:0, dy:0, r:1.571, c:86};
szmtr.transferStations["s12"] = {stations:["0452", "0547"], dx:0, dy:0, r:1.571, c:26};
szmtr.transferStations["s13"] = {stations:["0363", "0552"], dx:0, dy:0, r:-1.571, c:53};
szmtr.transferStations["s14"] = {stations:["0162", "0560"], dx:0, dy:0, r:0, c:85};
szmtr.transferStations["s15"] = {stations:["0374", "0563"], dx:0, dy:0, r:0, c:52};

szmtr.transferStations["s16"] = {stations:["0340", "0621"], dx:0, dy:0, r:-0.785, c:53};
szmtr.transferStations["s17"] = {stations:["0446", "0630"], dx:0, dy:0, r:1.571, c:106};
szmtr.transferStations["s18"] = {stations:["0248", "0631"], dx:0, dy:0, r:1.571, c:54};
szmtr.transferStations["s19"] = {stations:["0152", "0635"], dx:0, dy:0, r:0, c:41};
szmtr.transferStations["s20"] = {stations:["0364", "0640"], dx:0, dy:0, r:-1.571, c:44};
szmtr.transferStations["s21"] = {stations:["0558", "0643"], dx:0, dy:0, r:2.356, c:57};
szmtr.transferStations["s22"] = {stations:["0271", "0649"], dx:0, dy:0, r:-1.571, c:54};
szmtr.transferStations["s23"] = {stations:["0272", "0650"], dx:0, dy:0, r:-1.571, c:39};

szmtr.transferStations["s24"] = {stations:["0376", "1140"], dx:0, dy:0, r:0, c:1038};


szmtr.transferStations["s31"] = {stations:["0625", "0843"], dx:0, dy:0, r:0.785, c:172};
szmtr.transferStations["s32"] = {stations:["0641", "0861"], dx:0, dy:0, r:-1.571, c:177};
szmtr.transferStations["s34"] = {stations:["0346", "0840"], dx:0, dy:0, r:-1.571, c:141};
// szmtr.transferStations["s35"] = {stations:["0444", "0846"], dx:0, dy:0, r:1.571, c:154};
szmtr.transferStations["s35"] = {stations:["0444", "0846"], dx:0, dy:0, r:1.571, c:190};
szmtr.transferStations["s36"] = {stations:["0245", "0849"], dx:0, dy:0, r:1.571, c:135};
szmtr.transferStations["s37"] = {stations:["0368", "0855"], dx:0, dy:0, r:-1.571, c:142};
szmtr.transferStations["s38"] = {stations:["0370", "0857"], dx:0, dy:0, r:0, c:166};
szmtr.transferStations["s39"] = {stations:["0159", "0859"], dx:0, dy:0, r:0, c:149};
szmtr.transferStations["s40"] = {stations:["0557", "0862"], dx:0, dy:0, r:0, c:154};
szmtr.transferStations["s41"] = {stations:["0269", "0865"], dx:0, dy:0, r:0, c:147};

/*
szmtr.transferStations["s26"] = {stations:["0240", "0740"], dx:0, dy:0, r:1.571, c:102};
*/
szmtr.transferStations["s33"] = {stations:["0747", "0851"], dx:0, dy:0, r:0, c:228};
szmtr.transferStations["s25"] = {stations:["0638", "0753"], dx:0, dy:0, r:0, c:105};
szmtr.transferStations["s27"] = {stations:["0155", "0752"], dx:0, dy:0, r:0, c:83};
szmtr.transferStations["s28"] = {stations:["0551", "0754"], dx:0, dy:0, r:0, c:114};
szmtr.transferStations["s29"] = {stations:["0360", "0757"], dx:0, dy:0, r:0, c:85};
szmtr.transferStations["s30"] = {stations:["0263", "0759"], dx:0, dy:0, r:0, c:78};


szmtr.transferStations["s90"] = {stations:["1167"], dx:0, dy:0, r:1.571, c:1024};
