var vm = new Vue({
    el: '#root',
    data:{
        gualist: []
    },
    methods:{

    },
    created:function(){
        let temp = this;
        axios.get('./data.json', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {}
        }).then(function (res) {
            let data = res.data;
            if(data){
                temp.gualist = data.gua;
                console.log(temp.gualist);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
})

