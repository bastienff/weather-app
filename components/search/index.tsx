import React, { useMemo, useState } from 'react'
import { Box, Dialog, DialogContent, Button, Autocomplete, TextField, DialogTitle } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useCities } from '@/lib/hooks/use-cities';
import { CityType } from '@/app/api/weather/cities/cities.types';
import { useStore } from '@/lib/store';
import { Listbox } from '@/components/search/listbox';

export const Search = () => {
  const { setSelectedCity } = useStore();
  const { cities } = useCities();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const options = useMemo(() => cities.map((city) => city), [cities]);
  const getOptionLabel = (city: string | CityType) => {
    if (typeof city === 'string') return city;
    return `${city.city_name} - ${city.country_code}`;
  };
  const renderInput = (params: any) => <TextField {...params} label="Search city" variant="outlined" fullWidth />;
  const renderOption = (props: any, option: CityType) => (
    <li
      {...props}
      style={{ listStyleType: "none", padding: "20px" }}
      key={option.city_id}
    >
      {getOptionLabel(option)}
    </li>
  )
  const slotProps = {
    listbox: {
      component: Listbox,
    },
  };

  const handleChange = (_event: React.SyntheticEvent, city: string | CityType | null) => {
    if (city && typeof city !== 'string') {
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
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullScreen disableScrollLock>
        <DialogTitle display="flex" justifyContent="flex-end">
          <Button onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            id="SearchCity"
            disablePortal
            options={options}
            getOptionLabel={getOptionLabel}
            renderInput={renderInput}
            renderOption={renderOption}
            onChange={handleChange}
            slotProps={slotProps}
          />
        </DialogContent>
      </Dialog>
    </Box>
  )
}
