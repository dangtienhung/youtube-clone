import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import {
   Navbar,
   ChannelDetail,
   VideoDetail,
   SearchFeed,
   Feed,
} from './components';

function App() {
   return (
      <Box sx={{ backgroundColor: '#000' }}>
         <Navbar />
         <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
         </Routes>
         {/* <Outlet /> */}
      </Box>
   );
}

export default App;
