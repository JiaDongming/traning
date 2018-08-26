// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: {
      iconUrl: '/img/plus.png',
      search_text: '请输入待办',

    },
    addInput: '',
    leftitem:0,
    startStatus:false,
    show:false,
    list: [
      // s{
    //     todo: '早上6:00起床',
    //     status: true,
    //     icon: 'success',
    //   },
    //   {
    //     todo: '早上6:30晨跑',
    //     status: false,
    //     icon: 'circle'
    //   },
    //   {
    //     todo: '早上8:00吃早饭',
    //     status: false,
    //     icon: 'circle',
    //   },
    //   {
    //     todo: '晚上8:00跑步',
    //     status: true,
    //     icon: 'circle',
    //   },
    ]
  },
  togglelist:function(e){
    var list=this.data.list
    if (this.data.startStatus==false)
    {
      list.forEach(function(item){
        item.status=false
      })
      this.setData({
        list:list,
        leftitem:list.length,
        startStatus:true
      })
    }else {
      list.forEach(function(item){
        item.status=true
      })
      this.setData({
        list:list,
        leftitem:0,
        startStatus:false
      })
    }
  },
  clearall:function(e){
    this.setData({
      list:[],
      leftitem:0,
      show:false
    })
  },
  // 删除条目，并且统计剩余项目
  delItem:function(e){
    console.log(e)
    var index=e.currentTarget.dataset.index
    var list=this.data.list
    var item=list[index]
    var status=item.status
    var leftitem=this.data.leftitem
    var shownum=0
   
    if (!status) {
      leftitem=leftitem-1
    }
    
    list.splice(index,1)
    shownum = list.length
    if(shownum==0){
      this.setData({
        show:false
      })
    }
    this.setData({
      list:list,
      leftitem:leftitem
    })

  },
  // 修改状态并且统计剩余项
  changeStatus:function(e){
    console.log(e)
    var index=e.currentTarget.id
    console.log(index)
    var item=this.data.list[index]
    var leftitem=this.data.leftitem
    item.status=!item.status
    if (item.status){
      leftitem=leftitem-1
    }
    else{
      leftitem = leftitem + 1
    }
    this.setData(
    {
      list:this.data.list,
      leftitem: leftitem
    }
    )

  },
  // 输入待办，赋值
  inputHandle: function(e) {
    this.setData({
      addInput: e.detail.value,

    })

    console.log(this.data.addInput)
  },
  // 插入待办并且判断是否为空，然后统计剩余项
  addHandle: function(e) {
    var addinput = this.data.addInput
    if (!addinput) {
      wx.showToast({
        title: '插入不能为空',
        image: '/img/none.png',
        duration: 2000
      })
      return
    }

    var todos = this.data.list
    var leftitem = this.data.leftitem
    todos.push({
      todo: this.data.addInput,
      status: false
    })
    this.setData({
      list: todos,
      addInput:'',
      leftitem:leftitem+1,
      show:true
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})