import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Box, Typography, Stack } from '@mui/material';

import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Link, useParams } from 'react-router-dom';

const VideoDetail = () => {
   const [videoDetail, setVideoDetail] = useState(null);
   const [videos, setVideos] = useState(null);
   const { id } = useParams();
   useEffect(() => {
      fetchFromApi(
         `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => {
         return setVideos(data.items);
      });
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
         return setVideoDetail(data.items[0]);
      });
   }, [id]);
   return (
      <Box minHeight={'95vh'}>
         <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box flex={1}>
               <Box xs={{ width: '100%', position: 'sticky', top: '86px' }}>
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-player"
                     controls
                  />
                  <Typography
                     variant="h5"
                     color={'#fff'}
                     fontWeight="bold"
                     width="100%"
                  >
                     {videoDetail?.snippet?.title}
                  </Typography>
                  <Stack
                     direction={'row'}
                     justifyContent="space-between"
                     sx={{ color: '#fff' }}
                     py={1}
                     px={2}
                  >
                     <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                        <Typography
                           variant={{ sm: 'subtitle1', md: 'h6' }}
                           color="#fff"
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                           }}
                        >
                           {videoDetail?.snippet?.channelTitle}
                           <CheckCircle fontSize="small" />
                        </Typography>
                     </Link>
                     <Stack gap={'20px'} direction="row" alignItems={'center'}>
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(
                              videoDetail?.statistics?.viewCount
                           ).toLocaleString()}{' '}
                           views
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(
                              videoDetail?.statistics?.likeCount
                           ).toLocaleString()}{' '}
                           likes
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>
            <Box
               px={2}
               py={{ md: 1, xs: 5 }}
               justifyContent="center"
               alignItems={'center'}
            >
               <Videos videos={videos} direction="column" />
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoDetail;
