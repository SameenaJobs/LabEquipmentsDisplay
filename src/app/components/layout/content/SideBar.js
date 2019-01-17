import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Subtitles from '@material-ui/icons/Subtitles';
import Home from '@material-ui/icons/Home';
import Warning from '@material-ui/icons/Warning';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';


const styles = {

};

class SideBar extends Component {
    render() {

        return (
            <Card>
                <CardContent>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                        <Grid item xs>
                            <IconButton color="inherit">
                                <Home />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <IconButton color="inherit">
                                <Subtitles />
                            </IconButton>
                        </Grid>
                        <Grid item xs>
                            <IconButton color="inherit">
                                <Warning />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(SideBar);