import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { categories } from '../utils/constans';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction={'row'}
         sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
         }}
      >
         {categories.map((category) => (
            <button
               onClick={() => setSelectedCategory(category.name)}
               key={category.name}
               className="category-btn"
               style={{
                  background: category.name === selectedCategory && '#fc1503',
                  color: 'white',
               }}
            >
               <span
                  style={{
                     color:
                        category.name === selectedCategory ? 'white' : 'red',
                     marginRight: '15px',
                  }}
               >
                  {category.icon}
               </span>
               <span
                  style={{
                     opacity: category.name === selectedCategory ? 1 : 0.5,
                  }}
               >
                  {category.name}
               </span>
            </button>
         ))}
      </Stack>
   );
};

export default SideBar;
