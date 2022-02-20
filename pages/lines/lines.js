// pages/lines/lines.js

import * as echarts from '../../packages/ec-canvas/echarts';
const app = getApp();

let chartOrigin;

var lineOption = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    color: ['#37A2DA','#67E0e3','#9FE6B8'],
    legend:{
        // data:['收缩压(mmHg)','舒张压(mmHg)','血脂(mmol/L)'],
        // top: 20,
        // left: 'center',
        // z: 100
    },
    xAxis: {
        type: 'category',
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    yAxis:{
        type:'value'
    },
    series:[{
        name: '收缩压(mmHg)',
        type: 'line',
        smooth:true,
        data:[96,98,100,112,116,103,121],
        markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
    },{
        name:'舒张压(mmHg)',
        type: 'line',
        smooth:true,
        data:[71,78,86,75,72,79,69],
        markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
    },{
        name:'血脂(mmol/L)',
        type:'line',
        smooth:true,
        data:[3.6,4.1,5.1,6.2,3.9,4.1,5.5],
        markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
    }]
  };
  var barOption = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    color: ['#37A2DA','#67E0e3','#9FE6B8'],
    legend:{
        // data:['收缩压','舒张压','血脂','体重'],
        // top: 20,
        // left: 'center',
        // z: 100
    },
    xAxis: {
        type: 'category',
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    yAxis:{
        type:'value'
    },
    series:[{
        name: '收缩压(mmHg)',
        type: 'bar',
        smooth:true,
        data:[96,98,100,112,116,103,121]
    },{
        name:'舒张压(mmHg)',
        type: 'bar',
        smooth:true,
        data:[71,78,86,75,72,79,69]
    },{
        name:'血脂(mmol/L)',
        type:'bar',
        smooth:true,
        data:[3.6,4.1,5.1,6.2,3.9,4.1,5.5]
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

  var paper = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    //   },
      xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
  }
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
            "value":"日常记录"
        },{
            "id":"31",
            "value":"最近检测"
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
    selectDate:function(e){
        if(e.detail.id === '30'){
            // chartOrigin.setOption(lineOption,true)
            document.querySelector('#dom-line').style.display = 'block'
            document.querySelector('#table').style.display = 'none'
        }else if(e.detail.id === '31'){
            document.querySelector('#dom-line').style.display = 'none'
            document.querySelector('#table').style.display = 'block'
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