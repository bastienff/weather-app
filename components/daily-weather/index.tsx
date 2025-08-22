import React from 'react'
import { mapProps } from '@/components/daily-weather/mapper';
import { Box, Typography } from '@mui/material'
import { DailyWeatherItem } from '@/components/daily-weather/daily-weather-item';

export const DailyWeather = ({ data }: { data: any[] }) => {
  const mappedProps = mapProps(data);

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
      {mappedProps.map((dailyWeatherData, index) => {
        return (
          <DailyWeatherItem key={index} dailyWeatherData={dailyWeatherData} />
        )
      })}
    </Box>
  )
}
