import { Box, Container, Typography } from "@mui/material";
import { WEATHER_DATETIME_UPDATE_KEY } from "@/lib/contants";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const savedDate = window.localStorage.getItem(WEATHER_DATETIME_UPDATE_KEY);
    setDate(savedDate);
  }, []);

  return (
    <Box mt={5} textAlign="right" bgcolor="#3063ba" padding="10px 0">
      <Container>
        <Typography fontSize={14} color="white">
          {!!date
            ? `Last updated on ${date}`
            : "No saved date found."
          }
        </Typography>
      </Container>
    </Box>
  );
};
