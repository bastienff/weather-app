import { Search } from '@/components/search';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
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
