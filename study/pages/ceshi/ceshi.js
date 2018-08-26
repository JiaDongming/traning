var extraLine=[];
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    lenght:'3',
    device:{
      name: 'mac air 13',
      price: '5800',
      buydate: '2018/08',
    },
    inputValue:'',
    items:[
      { name:'usa', value:'美国'},
      { name: 'chn', value: '中国', checked:true },
      { name: 'bra', value: '巴西' },
      { name: 'uk', value: '英国' },
      { name: 'ger', value: '德国' },
      { name: 'aj', value: '阿尔及利亚' },
    ],
    navData: ['爱情', '恐怖', '战争', '喜剧', '三级', '香港', '台湾'],
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    text:[],
    time: '12:01'
  },
  bindKeyInput:function(e){
    console.log(e.detail.value);
    this.setData({
      inputValue:e.detail.value
    })
  },
  bindReplaceInput:function(e){
    var pos=e.detail.cursor
    var value=e.detail.value
    if(pos!=-1){
      var left=e.detail.value.slice(0,pos)
      pos=left.replace(/11/g,'2').length
    }
    return {
      value: value.replace(/11/g,'2'),
      cursor:pos
    }
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  add:function(e){
    extraLine.push("a line")
    this.setData({
      text:extraLine.join('\n')
    })
  },
  checkboxChange:function(e){
  
    console.log('heckbox发生change事件，携带value值为：'+e.detail.value)
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  removeline:function(e){
    if(extraLine.length>0){
      extraLine.pop()
      this.setData(
        {
          text:extraLine.join('\n')
        }
      )
    }
  },
  clickMe:function(){
    console.log("you click me");
  },
 
 handleTap1:function(){
   console.log("我是outter")
 },
  handleTap2: function () {
    console.log("我是middle")
  },
  handleTap3: function () {
    console.log("我是inner")
  },
  bindTimeChange:function(e){
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }
})

