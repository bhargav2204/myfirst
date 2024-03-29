import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./top.css";
import Card from "./card";
import {Carddata} from "./cards/Carddata";
import Tabel from "./tabel/tabel";

import { Songdata } from './cards/Songdata';

import  Songcomp from './cards/Song';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
console.log("data",Carddata);
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar  style={{display:'flex',justifyContent:"space-between"}}>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Vertex
          </Typography>
          <div >
          <Link to={{ pathname: "/" }} style={{ textDecoration: 'unset'}} >
          <Button tag={Link} color="Primary">
                <span style={{ color: 'white' }} > Home</span>
              </Button>
          </Link>
          <Link to={{ pathname: "/login" }} style={{ textDecoration: 'unset'}} >
          <Button tag={Link} color="Primary">
                <span style={{ color: 'white' }} > Login </span>
              </Button>
            </Link>
            <Link to={{ pathname: "/signup" }} style={{ textDecoration: 'unset'}} >
            <Button tag={Link} color="Primary">
                <span style={{ color: 'white' }} > Signup </span>
              </Button>
            </Link>
            <Link to={{ pathname: "/aboutus" }} style={{ textDecoration: 'unset'}} >
            <Button tag={Link} color="Primary">
                <span style={{ color: 'white' }} > AboutUs </span>
              </Button>
            </Link>
            <Link to={{ pathname: "/contact" }} style={{ textDecoration: 'unset'}} >
            <Button tag={Link} color="Primary">
                <span style={{ color: 'white' }} > Contact </span>
              </Button>
            </Link>
            </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
     <div style={{display:"flex",flexDirection:"column"}}>

     <div style={{marginTop:"80px",marginLeft:"50px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"
    }}>
         
      {Carddata.map(card => {
      return (

<Card style={{marginTop:"20px"}} card={card}/>

      )}
      )}      
         
   
      </div>
      <div style={{marginTop:"80px",marginLeft:"50px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"
    }}>
      {Songdata.map(Song=>{
        return (
          <Songcomp style={{marginTop:"20px"}} Song={Song}/>
        )
      })}
     
      </div>
      <div style={{marginTop:"80px",marginLeft:"50px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"
    }}>
      <Tabel />
    </div>
     </div>
 
   
    </div>
    
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;