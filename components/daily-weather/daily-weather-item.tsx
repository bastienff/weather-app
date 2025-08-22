import React from 'react'
import { DailyWeatherDataType } from '@/components/daily-weather/types'
import { Box, Typography } from '@mui/material'

export const DailyWeatherItem = ({ dailyWeatherData }: { dailyWeatherData: DailyWeatherDataType }) => {
  const { date, description, highTemp, lowTemp, iconId } = dailyWeatherData;
  const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <Box
      display="flex"
      justifyItems="center"
      alignItems="center"
      padding={2}
      borderBottom="1px solid #e0e0e0"
    >
      <Box display="flex" alignItems="center" alignContent="center" width="100%">
        <img src={icon} width={50} height={50} alt="weather icon" />
        <Box
          width="100%"
          textAlign="center"
          marginLeft={2}
        >
          <Typography>{date}</Typography>
          <Typography color='#878686ff'>{description}</Typography>
        </Box>
      </Box>
      <Typography>
        {highTemp.toFixed(0)}°&nbsp;
        {lowTemp.toFixed(0)}°
      </Typography>
    </Box>
  )
}
