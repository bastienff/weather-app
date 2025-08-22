import React from 'react'
import { HourlyWeatherItem } from '@/components/hourly-weather/hourly-weather-item';
import { mapProps } from '@/components/hourly-weather/mapper';
import { Typography, Stack, Divider, Box } from '@mui/material';
import { useWeather } from '@/lib/hooks/use-weather';
import { HourlyWeatherItemSkeleton } from '@/components/hourly-weather/hourly-weather-item-skeleton';

export const HourlyWeather = ({ data }: { data: any[] }) => {
  const mappedProps = mapProps(data);
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
        Next hours
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
        style={{ overflowX: 'auto' }}
      >
        {isLoading && Array(5).fill(null)?.map((_, index) => (<HourlyWeatherItemSkeleton key={index} />))}
        {!isLoading && mappedProps?.map((hourlyWeatherData, index) => (
          <HourlyWeatherItem key={index} hourlyWeatherData={hourlyWeatherData} />
        ))}
      </Stack>
    </Box>
  )
}
