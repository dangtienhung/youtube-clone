import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constans';
import SearchBar from './SearchBar';

const Navbar = () => {
   return (
      <Stack
         direction={'row'}
         alignItems="center"
         p={2}
         sx={{
            position: 'sticky',
            justifyContent: 'space-between',
            background: '#000',
            top: '0',
            color: '#fff',
         }}
      >
         <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: '50px' }} />
         </Link>
         <SearchBar />
      </Stack>
   );
};

export default Navbar;
