import React, {useState, useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Header from './components/common/Header/Header';

const App: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const parseLocation = location.pathname.replace("/", "");
    setTitle(parseLocation);
  }, [location])

  return (
    <Grid container>
      <Navbar />
      <Header 
        title={title} />
      <Outlet />  { /*The outlet element is a placeholder for the child route's content.*/}
    </Grid>
  );
}

export default App;
