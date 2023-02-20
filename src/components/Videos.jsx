import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
   console.log('🚀 ~ file: Videos.jsx:7 ~ Videos ~ videos', typeof videos);
   if (!videos?.length) {
      return 'Loading...';
   }
   return (
      <Stack
         direction={direction || 'row'}
         flexWrap="wrap"
         justifyContent={'start'}
         gap={2}
      >
         {videos.map((video, index) => (
            <Box key={index}>
               {video?.id?.videoId && <VideoCard video={video} />}
               {video?.id?.channelId && <ChannelCard channelDetail={video} />}
            </Box>
         ))}
      </Stack>
   );
};

export default Videos;
