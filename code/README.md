## daily code

### 2019.2.18小程序IOS端无法进行虚拟商品价格展示及支付问题

公司小程序被警告，IOS端小程序不能展示虚拟商品（会员、付费查询）等价格展示、支付按钮及实际的支付逻辑。故而针对IOS，对涉及支付问题重新做了处理。现已提交申述，以期尽快通过审核。

### 2019.2.20已按要求完成修改，微信也解禁了搜索小程序的功能

第一次申述失败了，由于有“购买”词汇出现，后完成修改，已审核成功。微信也解禁相关封禁能力

官方建议词汇：“由于相关规范，iOS功能暂不可用”

### 2019.2.21node-qrcode

[使用node命令生成二维码](https://github.com/soldair/node-qrcode)

![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN1SURBVO3BQW7dWBAEwcwG73/lGi286NUDCPLLkqcizBeq/hiqlqFqGaqWoWoZqpahahmqlqFqGaqWoWoZqpahahmqlqFqGaqWi4dUvlMSNpUtCZvKm5Jwh8p3SsITQ9UyVC1D1XLxsiS8SeUOlZMk3KHypiS8SeVNQ9UyVC1D1XLxYSp3JOGJJJyo/CQqdyThk4aqZahahqrl4pdLwhNJ2FS2JGwqJ0n4zYaqZahahqrl4pdT+SSVLQn/sqFqGaqWoWq5+LAkfFISTlROVJ5Q2ZJwRxJ+kqFqGaqWoWq5eJnKd1LZknCShE1lS8Km8iaVn2yoWoaqZahazBf+ISonSThRuSMJ/5KhahmqlqFquXhIZUvCiconJWFT2VTuSMKmcqKyJeFEZUvCpnJHEp4YqpahahmqFvOFF6lsSThROUnCprIl4URlS8KJyh1JuEPlTUl401C1DFXLULWYLzygckcSNpUtCZvK35SETeUkCZvKSRI2lS0JJypbEp4YqpahahmqlouHkrCpPKGyJeFEZUvCHSp3JOFE5U0q32moWoaqZahaLh5S2ZKwqWwqWxJOVO5Q2ZLwJpWTJGwqWxJOknCHypuGqmWoWoaqxXzhAZUnkvAmlZMknKg8kYQ7VLYknKhsSXjTULUMVctQtVz8MCp3JOEOlTuSsKncobIl4UTlDpUtCU8MVctQtQxVy8XLkrCpnKhsSbhDZUvCpnKShCeSsKlsSdhUtiRsKidJ2FTeNFQtQ9UyVC0XP5zKSRLuSMIdKlsSNpUTlROVLQmbyqayJeFNQ9UyVC1D1XLxUBJOkvBEEk5UTpKwqXxSEu5Q+UmGqmWoWoaq5eIhle+UhDcl4ZNUtiTckYQTlS0JTwxVy1C1DFXLxcuS8CaVO5KwqWxJ2FS2JGwqTyThTSpbEt40VC1D1TJULRcfpnJHEt6UhDtUnlD5pCRsKlsSnhiqlqFqGaqWi/+5JJyobEk4UTlJwhMqnzRULUPVMlQtF79cEjaVkyRsKlsSTlS2JJwk4UTlJxmqlqFqGaqWiw9Lwt+UhJMkvCkJJyonSdhUvtNQtQxVy1C1XLxM5TupbEl4QuUkCZvKloSTJJyobEk4UXnTULUMVctQtZgvVP0xVC1D1TJULUPVMlQtQ9UyVC1D1TJULUPVMlQtQ9UyVC1D1TJULf8BrvhsLWDUHNUAAAAASUVORK5CYII=)

### 2019.2.22

小程序中图表拖拽过后，(使用wxcharts插件)整个页面无法滚动，也不能触发onPageScroll事件

解决方式：将canvas组件的disable-scroll属性删掉,而非设置为true

### 2019.2.25

vconsole : 腾讯开源的移动端H5控制台调试工具，支持查看console日志、网络请求、自定义插件等.

towering-sink.surge.sh

neat-pencil.surge.sh

### 2019.03.04 字蛛

[文字体压缩器](http://font-spider.org/)

### 2019.03.05  VSCode 网易云音乐扩展

https://github.com/nondanee/vsc-netease-music

一边敲代码，一边看歌词听音乐的感觉确实不错~  这工具挺有新意

> 插件启动

![01.png](./netease/music_01.png)

> 歌单搜索

![02.png](./netease/music_02.png)

> 搜索列表/播放

![03.png](./netease/music_03.png)

### 博文书写时需注意

在写博客文章时最好截图，录制一个动图，这样效果更为直观。我们写博客的目的不是只为了让我们自己看，更多的是让别人看。

### 2019.03.06 微信每日说，每日自动给别人发送微信消息

挺有趣的项目 -》 https://github.com/gengchen528/wechatBot

### 2019.03.18 [parcel：极速零配置web打包工具](https://parceljs.org/)

安装parcel： `yarn global add parcel-bundler`

创建一个 package.json 文件，`yarn init -y`

### 2019.03.26 关于定时发送短信

关于定时发送短信的相关问题：

寻找发送短信的相关服务商，比如阿里云、腾讯云，新用户会有一个月9.9元这样的套餐，短信有效期为一个月

申请短信签名，短信签名申请方式包括公司申请和个人申请，个人申请可以选择个人网站相关信息(这样短信才可以发送短信通知和验证码，如果单纯只是个人，短信只能发送验证码) 

而且申请有个大坑，阿里云后台会查看你提交的网站信息，看看是否有备案，以及网站是否能够正常访问，如果正常访问不了，会驳回申请（之前由于服务器配置问题，导致网站在某一些情况下不能够正常访问，结果阿里云给出的驳回理由是让上传身份证正反面信息，联系了两次客服才知道是网站不能访问这个原因... ）

短信签名就是 【阿里云公司】这种东西

然后要申请短信模板，之前一直以为短信是可以随便发送的，后边才知道有这么多条条框框限制，比如申请模板单个变量不能超过20个字，超过75个字是另一个收费逻辑，变量必须声明清楚是时间日期 还是 电话号码 等类型

在申请短信签名和短信模板，至少被驳回了10多次，前提是对着文档，按照规范来申请的，结果还是各种各样的驳回理由，搞到没脾气

发送短信可以选择在后台管理系统发送和调用API发送，选择后者的Node.jsAPI，安装依赖包@alicloud/pop-core

接口请求参数包括发送内容、变量名、模板id、签名code等等一些列内容，只要按照规则填好就好，另外，如果短信发送不成功，看看返回的参数，对照文档找到问题所在

定时发送服务，node-schedule这个库便可实现，注意，获取当前日期这些逻辑放到定时函数里边执行，不然时间就是代码执行那一天的日期

OK，主要内容便是这样，感兴趣可以去看看，挺有趣