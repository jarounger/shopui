import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';
import logo from './logo.svg';
import Badge from '@material-ui/core/Badge';
import useCounter from './useCounter'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    background: '#48484A',
  },
  size: {
    height: '30px',
    width: '30px',
  },
}));

export default function Header() {
  const classes = useStyles();
  const icon = <img alt='logo' className={classes.size} src={logo} />;

  const { counter } = useCounter();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Drawer />
           <Typography variant="h6" className={classes.title}>
            E-Commerce App
           </Typography>
           <Badge color="secondary" badgeContent={counter}>
            {icon}
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
