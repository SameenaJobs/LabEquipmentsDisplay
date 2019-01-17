import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Subtitles from '@material-ui/icons/Subtitles';
import ChevronRight from '@material-ui/icons/ChevronRight';
//Redux related imports
import { connect } from 'react-redux';

class BaseContentHeader extends Component {
  render() {
    const { get_equipment_info, get_equipment_index } = this.props;
    var selectedEquipment;
    if (get_equipment_info && get_equipment_info.length > 0) {
        selectedEquipment = get_equipment_info.find(function (element, index) {
            // if (index === get_equipment_index.selectedIndex) {
              return index === get_equipment_index.selectedIndex;
            // }
        });
    }
    return (
      <Card>
        <CardContent>
          <Grid container direction="row" justify="flex-start" alignItems="stretch">
            <Grid item>
                <Subtitles />
            </Grid>
            <Grid item>
                <ChevronRight />
            </Grid>
            <Grid item>
              <Typography variant="subheading">Device Name</Typography>
            </Grid>
            <Grid item>
                <ChevronRight />
            </Grid>
            <Grid item>
              <Typography variant="subheading">{selectedEquipment? selectedEquipment.equipment_name : ''}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}   

const mapStateToProps = state => ({
  get_equipment_info: state.get_equipment_info,
  get_equipment_index: state.set_equipment_index,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseContentHeader);