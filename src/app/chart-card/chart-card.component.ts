import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss'
})
export class ChartCardComponent implements OnInit {
  
  ngOnInit(): void {
    const data = [120, 180, 100, 220, 160, 140, 200, 250, 190, 100, 170]
    let width, height;
    if(window.outerWidth < 770) {
      width = window.outerWidth * .7;
      height = window.outerHeight * .3;
    }
    else {width = window.outerWidth * 0.5; height = window.outerHeight * 0.25;}
    const chart = echarts.init(document.getElementById('chart-card') , null, {
      width: width,
      height: height
    });

    chart.setOption({
      title: {
        text: 'إحصائيات إستخدام القسيمة ',
        left: 'right',
        textAlign:'left',
        textStyle: {
          color: '#000', 
          fontSize: 14,
          fontFamily:'Neo Sans Arabic'
        },
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1D1D41', // Dark background for tooltip
        borderColor: '#FFFFFF',     // White border for tooltip
        borderWidth: 1,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily:'Neo Sans Arabic'
        },
        formatter: function (params : any) {
            var point = params[0];  // Displaying the first series
            var currentIndex = point.dataIndex; // Get the index of the clicked point
            var currentValue = point.value; // Value of the current point
            var previousValue = data[currentIndex - 1]; // Get the previous value
            
            var raise;
            if (previousValue !== undefined) {
                // Calculate percentage raise
                var diff = currentValue - previousValue;
                var percentageRaise = (diff / previousValue) * 100;

                // Format as + or - percentage and round to 2 decimal places
                raise = percentageRaise > 0 
                    ? `+${percentageRaise.toFixed(2)}%`
                    : `${percentageRaise.toFixed(2)}%`;
            } else {
                raise = 'N/A';  // For the first point, no previous value exists
            }
            return `
            
            إستخدام
            ${point.value}
            <br/> <h6 class="tooltip-text-raise">${raise}</h6>
            `;
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
        axisLabel: {
          color: '#9191A2',
          fontFamily:'Neo Sans Arabic',
          fontSize:10
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          name: 'استخدام',
          type: 'line',
          smooth: true, // Smooth line
          data: data, // Example data
          lineStyle: {
            color: '#6C5CE7', // Line color
            width: 2
          },
          itemStyle: {
            color: '#6C5CE7', // Point color on the line
            borderColor: '#FFFFFF',
            borderWidth: 2,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#8A74F9' // Gradient start (semi-transparent)
              },
              {
                offset: 1,
                color: 'rgba(247, 245, 255, 1)' // Gradient end (fully transparent)
              }
            ])
          },
          symbolSize: 10,
          emphasis: {
            focus: 'series',
            symbolSize: 30,
            lineStyle:{
              cap:'round',
            },
            itemStyle:{
              borderWidth: 2,
              color: '#6C5CE7',
              borderColor: '#FFFFFF',
            }
          },
          showSymbol: false
        }
      ]
    });
    window.addEventListener('resize', () => {
      // Update chart size on window resize
      let newWidth;
      let oldWidth = chart.getWidth();
      if(window.outerWidth > 770 ){ // Desktops
        newWidth = window.outerWidth * .5
        chart.resize({ width: newWidth});
      }
      else{ // Mobile
        newWidth = window.outerWidth * .7
        if(newWidth !== oldWidth) chart.resize({ width: newWidth});
      }
    });
  }
}
