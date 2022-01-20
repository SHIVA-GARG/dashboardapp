import "./rightPart.css";
import ReactECharts from "echarts-for-react";

const PerformanceGraph = () => {
  const option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 15,
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
          "Dec",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: function (value, index) {
            return `${value / 1000}K`;
          },
          margin: 15,
        },
      },
    ],
    series: [
      {
        name: "Performance",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        data: [
          10000, 5000, 11000, 20000, 14000, 27000, 18000, 4000, 13000, 12000,
          13000, 5000,
        ],

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
                color: "rgba(88,160,253,0.3)",
              },
              {
                offset: 1,
                color: "rgba(88,160,253,0)",
              },
            ],
          },
        },
      },
    ],
  };
  return <ReactECharts option={option} style={{ height: 400 }} />;
};

const UserGraph = () => {
  const option = {
    xAxis: {
      show: false,
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      show: false,
      boundaryGap: false,
    },
    series: [
      {
        data: [10, 52, 20, 33, 39, 33, 22, 10, 52, 20, 33, 39, 33, 22, 10, 52],
        type: "bar",
        roundCap: true,
        itemStyle: {
          borderRadius: [100, 100, 0, 0],
        },
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: 300, margin: 0, padding: 0 }}
    />
  );
};

const User = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div
          className="d-flex flex-row justify-content-between"
          style={{ marginBottom: "-60px" }}
        >
          <div>
            <h5 className="card-title" style={{ fontSize: "16px", margin: 0 }}>
              Active Users
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {" "}
              Page views per second
            </p>
          </div>
          <div>
            <h3>109</h3>
          </div>
        </div>
        <UserGraph />
      </div>
      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between">
          <div>/app/projects</div> <div>24</div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div>/app/chat</div> <div>21</div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div>/cart</div> <div>15</div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div>/cart/checkout</div> <div>8</div>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <div>See All</div>
        </div>
      </div>
    </div>
  );
};

const Performance = () => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          {" "}
          <strong>Performance Over Time</strong>
        </div>
      </div>
      <div className="card">
        <PerformanceGraph />
      </div>
    </>
  );
};

const Rightpart = () => {
  return (
    <div className="rightpart">
      <div className="row">
        <div className="col-md-3" style={{ height: "80vh" }}>
          <User />
        </div>
        <div className="col-md-9" style={{ height: "80vh" }}>
          <Performance />
        </div>
      </div>
    </div>
  );
};

export default Rightpart;
