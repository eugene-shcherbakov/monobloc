import * as React from 'react';

import {useState, useEffect} from 'react';

// TODO: refactor all imports
import { 
  AppBar, 
  Toolbar, 
  Link
} from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavButton = ({link, ...rest}) => {

  return (
    <Link 
      variant="contained" 
      color="primary" 
      href={link}
      //TODO: think how to reset styles for this button
      {...rest}
      sx={{
        boxShadow: 'none',
        background: 'transparent',
        color: '#000000',
        fontFamily: 'EloquiaDisplay-ExtraLight',
        padding: '0px',
        fontSize: '14px',
        fontWeight: 800,
        textTransform: 'none',
        textDecoration: 'none',
        '&:hover': {
          background: 'transparent',
          boxShadow: 'none',
        },
        ...rest.sx
      }}
    />
  );

}

// Yellow nav button
const YellowButtonYellow = ({link, ...rest}) => {

  return (
    <Link 
      variant="contained" 
      color="primary"
      href={link}
      {...rest}
      sx={{
        display: 'inline-block',
        textTransform: 'none',
        textDecoration: 'none',
        boxShadow: 'none',
        background: 'transparent',
        color: '#000',
        fontFamily: 'EloquiaDisplay-ExtraLight',
        borderRadius: '5px',
        transition: '0s',
        backgroundColor: 'rgb(0, 236, 151)',
        fontSize: '14px',
        fontWeight: 800,
        paddingInline: '16px',
        paddingBlock: '8px',
        '&:hover': {
          background: 'rgb(0, 236, 151)',
          color: '#000',
        },
      }}
    />
  );

}

const Logo = () => {

  return (  
    <Link href="/" style={{
      textDecoration: 'none',
    }}>
      <img src="/images/logo_text_only_black_light.png" alt="logo" height="18" style={{
        marginBottom: '3px',
      }}/>
    </Link>
  );

}

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: '#efefee75',
        backdropFilter: 'blur(10px)',
        position: 'fixed',
        top: 0,
        zIndex: 99,
        boxShadow: 'none',
      }}
    >

      <Toolbar
        sx={{
          width: '100%',
          height: '60px',
          maxWidth: '1400px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          margin: '0px auto',
        }}
      >
      
        <Logo/>

        <NavButton
          sx={{
            marginLeft: 'auto',
          }}
          link={'/about'}
        >
          {"About"}
        </NavButton>
        <NavButton
          // link={'/course/blockchain-for-business'}

          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            cursor: 'pointer',
          }}
        >
          {"Courses"}
        </NavButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '& .MuiPaper-root': {
              marginTop: '15px',
              backgroundColor: '#fff',
              borderRadius: '5px',
            },
            '& .MuiMenuItem-root': {
              fontFamily: 'EloquiaDisplay-ExtraLight',
              fontSize: '14px',
              fontWeight: 800,
            }
          }}
        >
          <MenuItem onClick={handleClose} component="a" href="/course/blockchain-for-business">
            {"Blockchain for Business"}
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="/course/fintech-innovation">
            {"Fintech Innovation"}
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="/course/defi">
            {"DeFi"}
          </MenuItem>
          <MenuItem onClick={handleClose} component="a" href="/course/daos">
            {"DAOs"}
          </MenuItem>
        </Menu>
        <NavButton
          link={'/coming-soon'}
        >
          {"Career Hub"}
        </NavButton>
        <NavButton
          link={'/coming-soon'}
        >
          {"Summit Series"}
        </NavButton>
        <YellowButtonYellow
          link={'/contact'}
        >
          {"Empower change"}
        </YellowButtonYellow>

      </Toolbar>

    </AppBar>
  );
}