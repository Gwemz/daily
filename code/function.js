// 删除数组中的某一项
function remove(arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

function cached(fn) {
    var cache = Object.create(null);
    return (function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
    })
}

// 大写字符串(首字母大写)  wang -> Wang
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
});

// 驼峰连接  winterGuo -> winter-guo
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
});

// 将类似数组的对象转为真正的数组
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret
}

// 将属性混合到目标对象中  let obj1 = {size: 23,color:'blue'},obj2 = {weight:'56',height:'200'};  => {size: 23, color: "blue", weight: "56", height: "200"}
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to
}

// 将对象数组合并为单个对象
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res
}

// 浏览器环境判断 
/*
    console.log({
        inBrowser: inBrowser,
        inWeex: inWeex,
        weexPlatform: weexPlatform,
        isIE: isIE,
        isIE9: isIE9,
        isEdge: isEdge,
        isAndroid: isAndroid,
        isIOS: isIOS,
        isChrome: isChrome
    })
*/
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;


var Dep = function Dep() {
    this.id = '';
    this.subs = [];
}
Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
    // console.log('bcdegf');
};

Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
};