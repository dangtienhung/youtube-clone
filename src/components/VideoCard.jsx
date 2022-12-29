import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
   demoVideoTitle,
   demoVideoUrl,
   demoChannelUrl,
   demoChannelTitle,
} from '../utils/constans';

const VideoCard = ({
   video: {
      id: { videoId },
      snippet,
   },
}) => {
   return (
      <Card
         style={{ backgroundColor: '#fff' }}
         sx={{
            width: { md: '320px', sm: '358px', xs: '100%' },
            boxShadow: 'none',
            borderRadius: 'none',
         }}
      >
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
               image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title}
               sx={{
                  width: {
                     xs: '100%',
                     sm: '358px',
                     md: '320px',
                  },
                  height: 200,
               }}
            />
         </Link>
         <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography variant="subtitle1" fontWeight={'bold'} color="#fff">
                  {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
               </Typography>
            </Link>
            <Link
               to={
                  snippet?.channelId
                     ? `/channel/${snippet?.channelId}`
                     : demoChannelUrl
               }
            >
               <Typography variant="subtitle2" color="#fff">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle
                     sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
                  />
               </Typography>
            </Link>
         </CardContent>
      </Card>
   );
};

export default VideoCard;
