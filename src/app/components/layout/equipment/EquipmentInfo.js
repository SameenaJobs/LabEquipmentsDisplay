import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import EquipmentImage1 from '../../../../assets/images/laboratoryequipment.jpg';
import EquipmentImage2 from '../../../../assets/images/chemistrylabequipments.jpg';
import EquipmentImage3 from '../../../../assets/images/labImage.jpeg';
import EquipmentImage4 from '../../../../assets/images/labImage2.jpeg';
//Redux related imports
import { connect } from 'react-redux';
const styles = theme => ({
    image: {
        width: 100,
        height: 100,
    },
    headerStyle: {
        backgroundColor: '#e0e0e0',
        boxShadow: 'none',
    }
});
class EquipmentInfo extends Component {

    render() {
        const { classes } = this.props;
        const { get_equipment_info, get_equipment_index } = this.props;
        var selectedEquipment;
        if (get_equipment_info && get_equipment_info.length > 0) {
            selectedEquipment = get_equipment_info.find(function (element, index) {
                return index === get_equipment_index.selectedIndex;
            });
        }
        return (
            <Card>
                <CardContent>
                    <Grid container direction="row" justify="flex-start" alignItems="stretch">
                        <Grid item xs={12}>
                            <Card className={classes.headerStyle}>
                                <CardContent>
                                    <Typography>Equipment Details</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" justify="flex-start" alignItems="center">
                                <Grid item xs={6}>

                                    {/* Actual code should be this, adding static images
                                    <img alt="Equipment here" className={classes.image}
                                        src={selectedEquipment ? selectedEquipment.image : ''} /> */}

                                    <img alt="Equipment here" className={classes.image}
                                        src={EquipmentImage1} />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="equipment-name">Equipment Name</InputLabel>
                                        <Input id="equipment-name" type='text' value={selectedEquipment ? selectedEquipment.equipment_name : ''} />
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="vendor-name">Vendor Name</InputLabel>
                                        <Input id="vendor-name" type='text' value={selectedEquipment ? selectedEquipment.vendor_name : ''} />
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="location">Location</InputLabel>
                                        <Input id="location" type='text' value={selectedEquipment ? selectedEquipment.location : ''} />
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="model">Model</InputLabel>
                                        <Input id="model" type='text' value={selectedEquipment ? selectedEquipment.model : ''} />
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="serial">Serial #</InputLabel>
                                        <Input id="serial" type='text' value={selectedEquipment ? selectedEquipment.serial_num : ''} />
                                    </FormControl>
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="description">Description</InputLabel>
                                        <Input id="description" type='text' value={selectedEquipment ? selectedEquipment.description : ''} />
                                    </FormControl>
                                </Grid>
                            </Grid>
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

const EquipmentInfoWithStyles = withStyles(styles)(EquipmentInfo);
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentInfoWithStyles);