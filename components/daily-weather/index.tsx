import React from 'react'
import { Box, Typography } from '@mui/material'
import { DailyWeatherItem } from '@/components/daily-weather/daily-weather-item';
import { useWeather } from '@/lib/hooks/use-weather';
import { DailyWeatherItemSkeleton } from '@/components/daily-weather/daily-weather-item-skeleton';
import { GetWeatherForecast } from '@/app/api/weather/weather.types';

type DailyWeatherProps = {
  data: GetWeatherForecast[];
};

export const DailyWeather = ({ data }: DailyWeatherProps) => {
  const { isLoading } = useWeather();

  return (
    <Box
      width="100%"
      bgcolor="white"
    >
      <Typography
        variant="h6"
        padding={2}
        borderBottom="1px solid #e0e0e0"
      >
        Next 5 days
      </Typography>
      {isLoading && Array(5).fill(null)?.map((_, index) => (<DailyWeatherItemSkeleton key={index} />))}
      {!isLoading && data?.map((dailyWeatherData, index) => {
        return (
          <DailyWeatherItem key={index} dailyWeatherData={dailyWeatherData} />
        )
      })}
    </Box>
  )
}
