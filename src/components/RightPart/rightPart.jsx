import './rightPart.css';
import ReactECharts from "echarts-for-react";


const PerformanceGraph = () => {
    const option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 15
            },
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: function (value, index) {
                return `${value / 1000}K`;
              },
              margin: 15
            }
          }
        ],
        series: [
          {
            name: "Performance",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 6,
            data: [
              10000,
              5000,
              11000,
              20000,
              14000,
              27000,
              18000,
              4000,
              13000,
              12000,
              13000,
              5000
            ],
            lineStyle: {
              type: [
                72,
                13,
                75,
                13,
                99,
                13,
                73,
                13,
                138,
                14,
                98,
                13,
                145,
                12,
                101,
                13,
                46,
                13,
                46
              ]
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(88,160,253,0.3)"
                  },
                  {
                    offset: 1,
                    color: "rgba(88,160,253,0)"
                  }
                ]
              }
            }
          }
        ]
      };
      return <ReactECharts option={option} style={{ height: 400 }} />;
}

const Performance = () => {
  return(
    <div class="card">
    <div class="card-body">
      Performance Over Time
    </div>
    <div className='card'>
      <PerformanceGraph />
    </div>
</div>
  )
}

const Rightpart = () => {
    
    return (
        <div className='rightpart'>
            <Performance />
                   
        </div>
    );
}

export default Rightpart;


