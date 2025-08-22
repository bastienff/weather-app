import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'

export const DailyWeatherItemSkeleton = () => {
  return (
    <Box
      display="flex"
      justifyItems="center"
      alignItems="center"
      padding={2}
      borderBottom="1px solid #e0e0e0"
    >
      <Box display="flex" alignItems="center" alignContent="center" width="100%">
        <Skeleton variant="rectangular" width={50} height={50} />
        <Box
          width="100%"
          marginLeft={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Skeleton
            animation="wave"
            height={10}
            width="100px"
          />
          <Skeleton
            animation="wave"
            height={10}
            width="80px"
          />
        </Box>
      </Box>
      <Skeleton
        animation="wave"
        height={30}
        width="15px"
      />&nbsp;
      <Skeleton
        animation="wave"
        height={30}
        width="15px"
      />
    </Box>
  )
}
