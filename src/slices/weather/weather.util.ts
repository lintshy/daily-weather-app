import _ from "lodash";

import {
  DataSeries,
  WeatherResponse,
} from "../../services/weather/weather.type";

export const getTotalMintes = (timePoint: number) => timePoint * 20;

export function mapWeatherResponse(data: WeatherResponse): DataSeries[] {
  return _.map(data?.dataseries, (item: DataSeries) => {
    const totalMinutes = getTotalMintes(item.timepoint);
    const hours = totalMinutes / 60;
    const minutes = totalMinutes % 60;
    const timeOfDay = new Date();
    timeOfDay.setHours(hours, minutes);
    return {
      ...item,
      timeOfDay,
      date: timeOfDay.toTimeString(),
      value: item.temp2m,
    };
  });
}

export function getCurrentWeather(data: WeatherResponse): DataSeries {
  const currentHour = new Date().getHours();
  return _.find(data?.dataseries, (item) => {
    const totalMinutes = getTotalMintes(item.timepoint);
    const hour = totalMinutes / 60;
    if (hour === currentHour) {
      return item;
    }
  });
}
