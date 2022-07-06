import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/Styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    title: {
        marginRight: ' auto',
    },
}));

export default () => {
    const classes = useStyles();
    const { oktaAuth, authState } = useOktaAuth();

    const login =  () =>  { oktaAuth.signInWithRedirect(); };
    const logout =  () => {oktaAuth.signOut(); };

    let body = null;
    if (authState?.isAuthenticated) {
      body = (
        <Button color="inherit" onClick={logout}>
      <Typography variant="h6">logout</Typography>
    </Button>
      );
    } else {
      body = (
        <Button color="inherit" onClick={login}>
        <Typography variant="h6">login</Typography>
      </Button>
      );
    }

    return (

        <div className={classes.root}>
            <AppBar position="static" className="root">
                <Toolbar>
                   <Typography variant="h6" className={classes.title}>Course Scheduler </Typography>
                    {body}ad
                </Toolbar>
            </AppBar>
        </div>
    );
};