// @ts-nocheck
import React, { FC, useEffect } from "react";
import {
  area,
  select,
  scaleTime,
  extent,
  axisBottom,
  max,
  axisLeft,
  scaleLinear,
} from "d3";

export const AreaChart = ({
  data,
}: {
  data: { date?: string; value?: number }[];
}) => {
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    const margin = { top: 10, right: 30, bottom: 30, left: 50 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const svg = select("#d3area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = scaleTime()
      .domain(extent(data, (d) => d.date))
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(axisBottom(x));

    // Add Y axis
    const y = scaleLinear()
      .domain([0, max(data, (d) => +d.value)])
      .range([height, 0]);
    svg.append("g").call(axisLeft(y));

    // Add the area
    svg
      .append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        area()
          .x((d) => x(d.date))
          .y0(y(0))
          .y1((d) => y(d.value))
      );
  }, [data]);

  return <div id="d3area"></div>;
};
