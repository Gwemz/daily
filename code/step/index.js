// // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// // 指定图表的配置项和数据
// var option = {
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     legend: {
//         data:['销量']
//     },
//     xAxis: {
//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// };

// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);

function getVirtulData(year) {
    year = year || '2019';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

var data = getVirtulData(2019);
option = {
    // backgroundColor: '#404a59',
    // backgroundColor: '#333333',
    backgroundColor: '#ffffff',

    title: {
        top: 30,
        text: '2019年大锅每天的步数',
        subtext: '数据从微信步数获取',
        left: 'center',
        textStyle: {
            color: '#333'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        top: '30',
        left: '100',
        data:['步数', 'Top 12'],
        textStyle: {
            color: '#333'
        }
    },
    calendar: [{
        top: 100,
        left: 'center',
        range: ['2019-01-01', '2019-06-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  1st',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                // color: '#323c48',
                color: '#ffffff',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }, {
        top: 340,
        left: 'center',
        range: ['2019-07-01', '2019-12-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  2nd',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                // color: '#323c48',
                color: '#ffffff',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series : [
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    // color: '#ddb926'
                    color: '#e54d42'
                }
            }
        },
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    // color: '#ddb926'
                    color: '#be2b20'
                }
            }
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    // color: '#f4e925',
                    color: '#be2b20',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    // color: '#f4e925',
                    color: "#be2b20",
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);
