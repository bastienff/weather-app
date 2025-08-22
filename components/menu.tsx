import { MENU_CITIES } from '@/lib/contants';
import { useStore } from '@/lib/store';
import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

export const Menu = () => {
  const selectedCity = useStore((state) => state.selectedCity)
  const setSelectedCity = useStore((state) => state.setSelectedCity)

  const onChange = (_event: React.SyntheticEvent, city: string) => {
    const cityData = MENU_CITIES.find((c) => c.city_name === city);
    setSelectedCity(cityData!);
  };

  return (
    <Box
      borderBottom={1}
      borderColor="divider"
      mb={4}
    >
      <Tabs
        value={selectedCity.city_name}
        onChange={onChange}
        aria-label="Menu"
        style={{ backgroundColor: 'white' }}
      >
        {MENU_CITIES.map((city, index) => (
          <Tab key={index} label={city.city_name} value={city.city_name} />
        ))}
      </Tabs>
    </Box>
  )
}
