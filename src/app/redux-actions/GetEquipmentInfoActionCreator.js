/**
* Action Creator for getting Equipment Details.
*/

import {
    REQUEST_GET_EQUIPMENT_INFO,
    RECEIVE_GET_EQUIPMENT_INFO,
    REQUEST_SET_EQUIPMENT_INDEX,
    RECEIVE_SET_EQUIPMENT_INDEX
} from '../ReduxConstants';

import LabEquipmentAPIHandler from '../redux-api/LabEquipmentAPIHandler';


/******************************************************************* 
 * Actions for getting Equipment Details.
 * Calls REST API 
 *******************************************************************/
let GetEquipmentInfoActionCreator = {
    // Thunk Action creator
    getEquipmentDetails() {
        return (dispatch) => {
            dispatch({ type: REQUEST_GET_EQUIPMENT_INFO });

            let requestURL = '/equipments';
            let requestType = 'GET';
            let requestBody = {};

            LabEquipmentAPIHandler(requestURL, requestType, requestBody).then(
                (response) => {
                    dispatch({ type: RECEIVE_GET_EQUIPMENT_INFO, success: true, response });
                },
                (error) => {
                    dispatch({ type: RECEIVE_GET_EQUIPMENT_INFO, success: false, error });
                }
            );
        };
    },
    setEquipmentIndex(i) {
        return (dispatch) => {
            dispatch({ type: REQUEST_SET_EQUIPMENT_INDEX, i });

            dispatch({ type: RECEIVE_SET_EQUIPMENT_INDEX });
        };
    }
};
export default GetEquipmentInfoActionCreator;