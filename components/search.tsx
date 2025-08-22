import React, { useState } from 'react'
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setIsDialogOpen(true)}>
        <SearchIcon style={{ color: 'white' }} />
      </Button>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth>
        <DialogTitle>Search</DialogTitle>
        <DialogContent style={{
          paddingTop: '10px',
        }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={[].map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: 'search',
                  },
                }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
