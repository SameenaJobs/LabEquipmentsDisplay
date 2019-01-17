import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import EquipmentInfo from '../equipment/EquipmentInfo';
import EquipmentList from '../equipment/EquipmentList';

class BaseContent extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item xs={8}>
              <EquipmentInfo />
            </Grid>
            <Grid item xs={3}>
              <EquipmentList />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default BaseContent;
