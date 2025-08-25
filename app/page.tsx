"use client";
import { DailyWeather } from '@/components/daily-weather';
import { HourlyWeather } from '@/components/hourly-weather';
import { Header } from '@/components/header';
import { Menu } from '@/components/menu';
import { Box, Container, Grid } from '@mui/material';
import { useWeather } from '@/lib/hooks/use-weather';
import { RefetchButton } from '@/components/refetch-button';
import { Footer } from '@/components/footer';

export default function Home() {
  const { weatherData } = useWeather();
  const dailyData = weatherData?.daily ?? [];
  const hourlyData = weatherData?.hourly ?? [];

  return (
    <Box>
      <Header />
      <Menu />
      <Container>
        <RefetchButton />
        <Grid container spacing={4}>
          <HourlyWeather data={hourlyData} />
          <DailyWeather data={dailyData} />
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
