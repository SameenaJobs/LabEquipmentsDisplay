/**
* Redux Reducer. 
* Lists the reducer functions and corresponding 
* sub-state in the Store.
*/
import { combineReducers } from 'redux';
import GetEquipmentInfoReducer from './GetEquipmentInfoReducer';
import SetEquipmentIndexReducer from './SetEquipmentIndexReducer';

const rootReducer = combineReducers({
    //Get Equipment Info.
    get_equipment_info: GetEquipmentInfoReducer,
    //Set Equipment Index.
    set_equipment_index: SetEquipmentIndexReducer,
});
export default rootReducer;