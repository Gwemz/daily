var vm = new Vue({
    el: '#root',
    data:{
        datalist: [],
        erDataList: [],
        currpage:1,
        selIdx: '0',
        provinces: ['山西省','北京市','上海市','浙江省']
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
            let temp = this,
                idx = temp.selIdx,
                dataArr = ['sx','bj','sh','zj'];
            axios.get('./data/2019/'+ dataArr[idx] +'.json', {
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
        },
        // 切换选项
        selectItem:function(idx,name){
            this.selIdx = idx;
            this.currpage = 1;
            this.datalist = [];
            this.erDataList = [];
            this.fetchData()
            console.log(idx,name);
        }
    }
})

