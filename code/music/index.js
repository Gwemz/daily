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
        turnHour(){
            return function(val){
                return Math.round(val/3600);
            }
        },
        turnMinutes(){
            return function(val){
                return Math.round(val/60);
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
        }

    }
})