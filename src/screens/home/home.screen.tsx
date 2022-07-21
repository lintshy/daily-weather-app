import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

import { HomeScreenProps } from "./home.type";
import "../../App.css";
import { LaunchCard } from "../../components/atoms/launch-card/launch-card";
import { CoordinatePicker } from "../../components/molecules/coordinate-picker/coordinate-picker";
import { useWeather } from "../../contexts/weather/weather.context";

export const HomeScreen = ({ blah }: HomeScreenProps) => {
  const navigate = useNavigate();
  const {
    isWeatherLoadError,
    isWeatherLoading,
    coordinates,
    setCoordinates,
    currentWeather,
    dailyForecast,
  } = useWeather();
  console.log(dailyForecast);
  if (isWeatherLoading) {
    return <LoadingButton loading={true} />;
  }
  if (isWeatherLoadError) {
    return <h1>error</h1>;
  }

  const onCheck = (latitude: string, longitude: string) => {
    setCoordinates({
      latitude,
      longitude,
    });
  };

  const onShowHistory = () => {
    navigate("./history");
  };
  return (
    <div className="App">
      <LaunchCard
        title="Current Weather"
        heading1="forecast"
        heading2="temperature"
        value2={currentWeather?.prec_type}
        value1={currentWeather?.temp2m}
        onClick={onShowHistory}
      />
      <CoordinatePicker
        defaultLatitude={coordinates.latitude}
        defaultLongitude={coordinates.longitude}
        onCheck={onCheck}
      />
    </div>
  );
};
