import { handleAction } from 'redux-actions';
import * as actions from '../actions/actions';

const defaultState = {

};

export const ajaxTestReducer = handleAction(actions.AJAX_TEST, 
    (state, action) => { console.log('reducer trigger')}, defaultState);




