/**
* Redux Reducer for Equipments.
*/

import {
    RECEIVE_GET_EQUIPMENT_INFO,
} from '../ReduxConstants';

/***************************************************************************** 
 * @param {*} state     - No modifications
 * @param {*} action    - No Modifications
 *****************************************************************************/

const getEquipmentDetails = (state, action) => {
    let EquipmentDetails = [];
    //Check if Trending Now Data is present in the action variable.  
    if (action && action.response && action.response) {
        EquipmentDetails = action.response.data;
    }
    // console.log(EquipmentDetails, "RECEIVE_GET_EQUIPMENT_INFO:EquipmentDetails");
    return EquipmentDetails;
}

const GetEquipmentInfoReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_GET_EQUIPMENT_INFO:
            let retValue = getEquipmentDetails(state, action);
            // console.log(retValue, "retValue from GET reducer for Equipments");
            return retValue;
        default:
            return state;
    }
};
export default GetEquipmentInfoReducer;