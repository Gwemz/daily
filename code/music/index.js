new Vue({
    el: '#page',
    data: {
        infos: {}
    },
    created() {

    },
    mounted() {
        this.fetchData()
    },
    computed: {
        turnTime() {
            return function (val, formater) {
                /*
                    时间戳（秒）转日期格式    L  LL
                    YYYY-MM-DD HH:mm:ss     2018-09-18 12:06:09
                    L    2018-07-04
                    LL   2018年7月4日
                    LLL  2018年7月4日晚上5点55分
                    LLLL 2018年7月4日星期三晚上5点55分
                    x    转换当前时间的Unix时间戳
                    d    今天是周几
                */
                let date = moment.unix(val).format(formater);
                return date;
            }
        },
        // 秒转小时
        turnHour() {
            return function (val) {
                return Math.round(val / 3600);
            }
        },
        // 秒转分钟
        turnMinutes() {
            return function (val) {
                return Math.round(val / 60);
            }
        },
        // 距离当前天数
        getSubDay(){
            return function(val){
                let time = moment.unix(val)._i;
                let day = this.getDayDiff(time);
                return day;
            }
        }
    },
    methods: {
        fetchData() {
            axios.get('./info.json').then((data) => {
                let res = data.data.data;
                this.infos = res;
                // console.log(res);
            })
        },
        getDayDiff(timesData) {
            var dateBegin = new Date(timesData);
            var dateEnd = new Date();//获取当前时间
            var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
            var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
            return dayDiff;
        }

    }
})