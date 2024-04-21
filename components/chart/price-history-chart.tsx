"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";
import { CryptoCurrencyHistory, getChartData } from "@/actions/get-chart-data";

interface PriceHistoryChartProps {
  coinId: string;
}

const PriceHistoryChart = ({ coinId }: PriceHistoryChartProps) => {
  const [chartData, setChartData] = useState<CryptoCurrencyHistory[]>([]);

  useEffect(() => {
    getChartData(coinId).then((data) => {
      setChartData(data);
    });
  }, [coinId]);

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      borderColor: "#333",
    },
    xAxis: {
      type: "time",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}$",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          width: 0.3,
          color: "#999",
        },
      },
    },
    series: [
      {
        name: "Price",
        data: chartData.map((item) => [item.timestamp, item.value]),
        type: "line",
        itemStyle: {
          color: "#FAC955",
        },
      },
    ],
    legend: {
      data: ["Price"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 10,
        handleSize: "80%",
        handleStyle: {
          color: "#fff",
          shadowBlur: 3,
          shadowColor: "rgba(0, 0, 0, 0.6)",
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
      },
    ],
  };

  return (
    <div className="my-24 pb-20">
      <h3 className="max-w-5xl mx-auto">
        {coinId.charAt(0).toUpperCase() + coinId.slice(1)} Price History
      </h3>
      {chartData.length > 0 ? (
        <ReactECharts option={option} style={{ height: 500, width: "100%" }} />
      ) : (
        <div className="text-center">
          No data available for now. Please try again later.
        </div>
      )}
    </div>
  );
};

export default PriceHistoryChart;
