import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Nav() {
    const {auth} = useSelector(state => state)
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  
    // const pages = ['Home', 'Stocks', 'Graphs', 'Portfolio'];
    // I commented the above out so that the Stocks and Graphs page wouldn't show...these are a relic of the past post search bar creation
    const pages = [ 'fightersMay20', 'fightersJune3' , 'fightersJune10' , 'fightersJune24' , 'fightersJuly1', 'fightersJuly8'];
    
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const navigateTo = (page) => {
      navigate(`/${page.toLowerCase()}`)
      handleCloseUserMenu()
      handleCloseNavMenu()
    }

  return (
    <Box>
      <AppBar sx={{ top: 0, left: 0, right: 0 }}>
        <Toolbar >
        <Box sx={{ flexGrow: 1 }}>

<IconButton
  size="large"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleOpenNavMenu}
  color="inherit"
>
  <MenuIcon />
</IconButton>
<Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: 'block', md: 'block' },
  }}
>
  {pages.map((page) => (
    <MenuItem key={page} onClick={() => navigateTo(page)}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box>
          <Typography href='/#/present' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} >
            Birthday Present Generator
          </Typography>
          <Typography href='/#/trip' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} >
            AI Trip Planner
          </Typography>
         

          <Typography href='/#/fightersJuly15' variant="h6" component="a" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            Fights Of This Week
          </Typography>
          {auth.id ? <Button href='/#/logout' color="inherit">Logout</Button> : <Button href='/#/login' color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}