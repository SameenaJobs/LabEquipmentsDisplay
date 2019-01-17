import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BaseContentHeader from './BaseContentHeader';
import BaseContent from './BaseContent';


class BaseContentLayout extends Component {
  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <BaseContentHeader />
        </Grid>
        <Grid item xs={12}>
          <BaseContent />
        </Grid>
      </Grid>
    );
  }
}

export default BaseContentLayout;
