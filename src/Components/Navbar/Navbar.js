import React from 'react';
import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';
import "./Navbar.css";
// import { AppBar, Button,Toolbar, Box} from '@mui/material';


const Navbar = () => {
    return (
        <div className ="Navbarc">          
    {/* <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> */}    
            <div className="logo" >
        <Icon icon="emojione-v1:cocktail-glass" style={{fontSize:"800%",marginRight:"50px"}} />
        <Link to ="/"> {" "}<a> <i>Cocktails</i></a></Link>
            </div>
            <div className="liste" >       
              <a><Link to="/">{" "} Home</Link> </a>
              <Link to="/Drinks">Drinks</Link>
              <Link to="/about">About us </Link>
           </div>
        
             
         </div>
    )
}
       
       
          {/* <IconButton */}
            {/* size="large" */}
            {/* edge="start" */}
            {/* color="inherit" */}
            {/* aria-label="menu" */}
            {/* sx={{ mr: 2 }} */}
          {/* > */}
             {/* <MenuIcon /> */}
          {/* </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
            {/* News */}
          {/* </Typography> */}
          {/* <Button color="inherit">Login</Button> */}

        {/* </Toolbar>
      </AppBar>
    </Box> */}
  


     
           {/* <Link to="/">Home</Link>  */}
           {/* <Link to="/Cocktails">Cocktails</Link>  */}
           {/* <Link to="/Cocktails">About us </Link>  */}

  

export default Navbar;
