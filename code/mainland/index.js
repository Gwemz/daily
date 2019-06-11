var vm = new Vue({
    el: '#root',
    data:{
        datalist: [],
        erDataList: [],
        currpage:1
    },
    created:function(){
        // 初始获取数据
        this.fetchData()
    },
    methods:{
        // 加载更多
        loadmore:function(){
            this.processData(this.currpage);
        },
        fetchData:function(){
            let temp = this;
            axios.get('./sx2019.json', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {}
            }).then(function (res) {
                let data = res.data,
                    currpage = temp.currpage;
                temp.datalist = data.erDataList.slice((currpage-1)*10,currpage*10);
                temp.erDataList = data.erDataList;
                temp.currpage = currpage+1
            }).catch(function (error) {
                console.log(error);
            });
        },
        // 处理数据（分页）
        processData:function(page){
            let erDataList = this.erDataList,
                data = erDataList.slice((page-1)*10,page*10)
            this.datalist = this.datalist.concat(data);
            this.currpage = page+1
            console.log(this.datalist,this.currpage)
        }
    }
})

