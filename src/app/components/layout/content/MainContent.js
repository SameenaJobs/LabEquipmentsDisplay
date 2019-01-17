import React, { Component } from 'react';
import BaseContentLayout from './BaseContentLayout';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';

class MainContent extends Component {
    render() {
        return (
            <Grid container direction="row" justify="flex-start" wrap='nowrap' alignItems="stretch">
                <SideBar />
                <BaseContentLayout />
            </Grid>
        );
    }
}

export default MainContent;
