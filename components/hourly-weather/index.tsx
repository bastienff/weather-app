import React from 'react'
import { HourlyWeatherItem } from '@/components/hourly-weather/hourly-weather-item';
import { mapProps } from '@/components/hourly-weather/mapper';
import { Typography, Stack, Divider, Box } from '@mui/material';

export const HourlyWeather = ({ data }: { data: any[] }) => {
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
        Next hours
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
      >
        {mappedProps.map((hourlyWeatherData, index) => (
          <HourlyWeatherItem key={index} hourlyWeatherData={hourlyWeatherData} />
        ))}
      </Stack>
    </Box>
  )
}
