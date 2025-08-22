import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import { DailyWeatherDataType } from '@/components/hourly-weather/types';

export const HourlyWeatherItem = ({ hourlyWeatherData }: { hourlyWeatherData: DailyWeatherDataType }) => {
  const { temperature, pop, time, iconId } = hourlyWeatherData;
  const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      padding={1}
      width={150}
    >
      <Typography>{temperature}°</Typography>
      <Typography color='#3fa5cdff'>{pop}%</Typography>
      <Image src={icon} width={50} height={50} alt="weather icon" style={{ display: "block" }} />
      <Typography color='#878686ff'>{time}</Typography>
    </Box>
  )
}
