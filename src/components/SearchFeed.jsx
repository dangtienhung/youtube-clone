import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Videos } from './';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
   const [videos, setVideos] = React.useState([]);
   const { searchTerm } = useParams();
   useEffect(() => {
      fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
         return setVideos(data.items);
      });
   }, [searchTerm]);
   return (
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
            Search result video for:
            <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
         </Typography>
         <Videos videos={videos} />
      </Box>
   );
};

export default SearchFeed;
