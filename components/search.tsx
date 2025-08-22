import React, { useState } from 'react'
import { Box, Dialog, DialogContent, DialogActions, Button, Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useCities } from '@/lib/hooks/use-cities';
import { CityType } from '@/app/api/weather/cities/types';
import { useStore } from '@/lib/store';

export const Search = () => {
  const { setSelectedCity } = useStore();
  const { cities } = useCities();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const options = cities.map((city) => city)
  const getOptionLabel = (city: string | CityType) => {
    if (typeof city === 'string') return city;
    return `${city.city_name} - ${city.country_code}`;
  };
  const renderInput = (params: any) => <TextField {...params} label="Search city" variant="outlined" fullWidth />;
  const renderOption = (props: any, option: CityType) => (
    <li {...props} key={option.city_id}>
      {getOptionLabel(option)}
    </li>
  )

  const handleOnChange = (_event: React.SyntheticEvent, city: string | CityType | null) => {
    if (city && typeof city !== 'string') {
      console.log('Selected city:', city);
      setSelectedCity(city);
      handleCloseDialog();
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setIsDialogOpen(true)}>
        <SearchIcon style={{ color: 'white' }} />
      </Button>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogContent>
          <Autocomplete
            id="SearchCity"
            freeSolo
            options={options}
            getOptionLabel={getOptionLabel}
            renderInput={renderInput}
            renderOption={renderOption}
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
