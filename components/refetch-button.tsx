import { useWeather } from '@/lib/hooks/use-weather'
import { Button } from '@mui/material'
import React from 'react'

export const RefetchButton = () => {
  const { refetch } = useWeather();

  const refetchWeatherData = () => {
    refetch();
  }

  return (
    <Button
      variant="contained"
      style={{
        marginBottom: '30px',
      }}
      onClick={() => refetchWeatherData()}>Refetch Weather Data</Button>
  )
}
