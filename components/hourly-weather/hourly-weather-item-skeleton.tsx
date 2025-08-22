import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import Image from 'next/image';
import { DailyWeatherDataType } from '@/components/hourly-weather/types';

export const HourlyWeatherItemSkeleton = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      padding={1}
      width={150}
    >
      <Skeleton
        animation="wave"
        height={10}
        width="40px"
      />
      <Skeleton
        animation="wave"
        height={10}
        width="40px"
      />
      <Skeleton variant="rectangular" width={50} height={50} />
      <Skeleton
        animation="wave"
        height={10}
        width="40px"
      />
    </Box>
  )
}
