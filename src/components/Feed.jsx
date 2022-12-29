import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
   const [selectedCategory, setSelectedCategory] = useState('News');
   const [videos, setVideos] = useState([]);
   useEffect(() => {
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
         return setVideos(data.items);
      });
   }, [selectedCategory]);

   return (
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
         <Box
            sx={{
               height: { sx: 'auto', md: '92vh' },
               borderRight: '1px solid #3d3d3d',
               px: { sx: 0, md: 2 },
            }}
         >
            <SideBar
               selectedCategory={selectedCategory}
               setSelectedCategory={setSelectedCategory}
            />
            <Typography
               className="copyright"
               variant="body2"
               sx={{ mt: 1.5, color: '#fff' }}
            >
               Copyright@dangtienhung
            </Typography>
         </Box>
         <Box
            p={2}
            sx={{
               overflow: 'auto',
               height: { sx: 'auto', md: '90vh' },
               flex: 2,
            }}
         >
            <Typography
               variant="h4"
               fontWeight={'bold'}
               mb={2}
               sx={{ color: 'white' }}
            >
               {selectedCategory}
               <span style={{ color: '#f31503' }}>videos</span>
            </Typography>
            <Videos videos={videos} />
         </Box>
      </Stack>
   );
};

export default Feed;
