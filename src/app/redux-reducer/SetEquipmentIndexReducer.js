/**
* Redux Reducer to set Equipment index.
*/

import {
    REQUEST_SET_EQUIPMENT_INDEX
} from '../ReduxConstants';

/***************************************************************************** 
 * @param {*} state     - No modifications
 * @param {*} action    - No Modifications
 *****************************************************************************/

const setEquipmentIndex = (state, action) => {
    if(action && typeof action.i !== "undefined") {
        return {selectedIndex:action.i};
    }
    return {selectedIndex:0};
}

const SetEquipmentIndexReducer = (state = [], action) => {
    switch (action.type) {
        case REQUEST_SET_EQUIPMENT_INDEX:
            let retIndexValue = setEquipmentIndex(state, action);
            return retIndexValue;
        default:
            return state;
    }
};
export default SetEquipmentIndexReducer;