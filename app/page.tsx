"use client";
import { DailyWeather } from '@/components/daily-weather';
import { HourlyWeather } from '@/components/hourly-weather';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { Box, Container, Grid } from '@mui/material';
import { MOCK_DATA } from '@/lib/contants';

export default function Home() {
  return (
    <Box>
      <Header />
      <Menu />
      <Container>
        <Grid container spacing={4}>
          <HourlyWeather data={MOCK_DATA.body.hourly} />
          <DailyWeather data={MOCK_DATA.body.daily} />
        </Grid>
      </Container>
    </Box>
  );
}
