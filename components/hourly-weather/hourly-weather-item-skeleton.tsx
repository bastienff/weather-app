import React from 'react'
import { Box, Skeleton } from '@mui/material'

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
