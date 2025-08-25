import { Box, Container, Typography } from "@mui/material";
import { WEATHER_DATETIME_UPDATE_KEY } from "@/lib/contants";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

export const Footer = () => {
  const weatherLatestUpdate = useStore(state => state.weatherLatestUpdate);
  const setWeatherLatestUpdate = useStore(state => state.setWeatherLatestUpdate);

  useEffect(() => {
    const savedDate = window.localStorage.getItem(WEATHER_DATETIME_UPDATE_KEY);
    if (savedDate) {
      setWeatherLatestUpdate(savedDate);
    }
  }, [setWeatherLatestUpdate]);


  return (
    <Box mt={5} textAlign="right" bgcolor="#3063ba" padding="10px 0">
      <Container>
        <Typography fontSize={14} color="white">
          {!!weatherLatestUpdate
            ? `Last updated on ${weatherLatestUpdate}`
            : "No saved date found."
          }
        </Typography>
      </Container>
    </Box>
  );
};
