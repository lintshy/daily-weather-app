import React, { useState } from "react";

import { AreaChart } from "../../components/atoms/area-chart/area-chart";
import { useWeather } from "../../contexts/weather/weather.context";

export const ChartScreen = ({}) => {
  const { isWeatherLoadError, isWeatherLoading, dailyForecast } = useWeather();
  return (
    <div className="App">
      <AreaChart data={dailyForecast} />
    </div>
  );
};
