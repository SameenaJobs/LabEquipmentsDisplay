import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Redux related imports
import { connect } from 'react-redux';
import GetEquipmentInfoActionCreator from '../../../redux-actions/GetEquipmentInfoActionCreator';

class EquipmentList extends Component {

    componentDidMount() {
        this.props.getEquipmentDetails();
        this.props.setEquipmentIndex(0);
    }
    render() {
        const { get_equipment_info} = this.props;
        return (
            <Grid container direction="column" spacing={16} justify="flex-start" alignItems="stretch">
                <Grid item>
                    <Button variant="contained" color="secondary" fullWidth>System</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" fullWidth>Device Name</Button>
                </Grid>
                {
                    get_equipment_info && get_equipment_info.length > 0 && get_equipment_info.map((equip, index) =>
                        <Grid item key={index}>
                            <Button variant="contained" color="default" fullWidth
                            onClick={()=>this.props.setEquipmentIndex(index)}>{equip.equipment_name}</Button>
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}
const mapStateToProps = state => ({
    get_equipment_info: state.get_equipment_info,
    get_equipment_index: state.set_equipment_index,
});

const mapDispatchToProps = dispatch => ({
    getEquipmentDetails: () => dispatch(GetEquipmentInfoActionCreator.getEquipmentDetails()),
    setEquipmentIndex: (i) => dispatch(GetEquipmentInfoActionCreator.setEquipmentIndex(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList);