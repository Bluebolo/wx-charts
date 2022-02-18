// pages/lines/lines.js

import * as echarts from '../../packages/ec-canvas/echarts';
const app = getApp();

let chartOrigin;

var lineOption = {
    color: ['#37A2DA','#67E0e3','#9FE6B8'],
    legend:{
        data:['A','B','C'],
        top: 20,
        left: 'center',
        z: 100
    },
    xAxis: {
        type: 'category',
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    yAxis:{
        type:'value'
    },
    series:[{
        name: 'A',
        type: 'line',
        smooth:true,
        data:[18,36,65,30,78,40,33]
    },{
        name:'B',
        type: 'line',
        smooth:true,
        data:[12,50,51,35,70,30,20]
    },{
        name:'C',
        type:'line',
        smooth:true,
        data:[10,30,20]
    }]
  };
  var barOption = {
    color: ['#37A2DA','#67E0e3','#9FE6B8'],
    legend:{
        data:['A','B','C'],
        top: 20,
        left: 'center',
        z: 100
    },
    xAxis: {
        type: 'category',
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    yAxis:{
        type:'value'
    },
    series:[{
        name: 'A',
        type: 'bar',
        smooth:true,
        data:[18,36,65,30,78,40,33]
    },{
        name:'B',
        type: 'bar',
        smooth:true,
        data:[12,50,51,35,70,30,20]
    },{
        name:'C',
        type:'bar',
        smooth:true,
        data:[10,30,20]
    }]
  };
  var pieOption = {
    tooltip: {
        trigger: 'item'
      },
    legend:{
        // orient: 'vertical',
        left:'left'
    },
    series:[
        {
             type:'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
        }]
  };
function initChart(canvas, width, height, dpr) {
    chartOrigin = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // 像素
    });
    canvas.setChart(chartOrigin);
    chartOrigin.setOption(lineOption);
    return chartOrigin;
  }

Page({

    /**
     * 页面的初始数据
     */
    data: {
        ec:{
            onInit: initChart,
        },
        selectArray: [{
                  "id": "20",
                  "value": "折线图"
               }, {
                  "id": "21",
                  "text": "柱状图"
                },
                    {
                        "id": "22",
                        "text": "饼状图"
                      }
                ],
        selectArrayDate:[{
            "id":"30",
            "value":"最近一周"
        },{
            "id":"31",
            "value":"最近两周"
        }]
    },

    select:function(e){
        console.log(e.detail.id);
        if(e.detail.id === '20'){
            chartOrigin.setOption(lineOption,true)
        }else if(e.detail.id === '21'){
            chartOrigin.setOption(barOption,true)
        }else if(e.detail.id == '22'){
            chartOrigin.setOption(pieOption,true)
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})