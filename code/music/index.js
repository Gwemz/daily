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
            return function (val, format) {
                // let time = this.forTime(val, format);
                // let time = this.getLocalTime(val);
                // return time;
                let time = moment(val).format(format);
                console.log(time);
                return time;
            }
        }
    },
    methods: {
        fetchData() {
            axios.get('./info.json').then((data) => {
                let res = data.data.data;
                this.infos = res;
                console.log(res);
            })
        },
        forTime(formater, t) {
            let date = t ? new Date(t) : '';
            if (date) {
                let Y = date.getFullYear() + '',
                    M = date.getMonth() + 1,
                    D = date.getDate(),
                    H = date.getHours(),
                    m = date.getMinutes(),
                    s = date.getSeconds();
                return formater.replace(/YYYY|yyyy/g, Y)
                    .replace(/YY|yy/g, Y.substr(2, 2))
                    .replace(/MM/g, (M < 10 ? '0' : '') + M)
                    .replace(/DD/g, (D < 10 ? '0' : '') + D)
                    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
                    .replace(/mm/g, (m < 10 ? '0' : '') + m)
                    .replace(/ss/g, (s < 10 ? '0' : '') + s)
            } else {
                return '';
            }
        },
        getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
        }

    }
})