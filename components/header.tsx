import { Search } from '@/components/search';
import { AppBar, Toolbar, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useState } from 'react'

export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1} noWrap >
          Simple Weather
        </Typography>
        <Search />
      </Toolbar>
    </AppBar>
  )
}
