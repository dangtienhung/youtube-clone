import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
   const { id } = useParams();
   const [channel, setChannel] = useState(null);
   const [videos, setVideos] = useState([]);
   useEffect(() => {
      fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
         setChannel(data.items[0])
      );
      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
         (data) => {
            return setVideos(data.items);
         }
      );
   }, [id]);
   return (
      <Box minHeight={'95vh'}>
         <Box>
            <div
               style={{
                  background:
                     'radial-gradient(circle, rgba(238,174,202,1) 12%, rgba(148,187,233,1) 100%)',
                  zIndex: 10,
                  height: '300px',
               }}
            />
            <ChannelCard channelDetail={channel} marginTop="-90px" />
         </Box>
         <Box display={'flex'} p="2">
            <Box sx={{ mr: { sm: '100px' } }} />
            <Videos videos={videos} />
         </Box>
      </Box>
   );
};

export default ChannelDetail;
