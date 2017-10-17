
import { ActionCreatorGeneric } from 'redux-typed';
// can inmport each feature's reducers
import { ajaxTestReducer } from '../reducers/homeReducer';


// top-level state object
export interface ApplicationState {

}
 
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    ajaxTest: ajaxTestReducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type ActionCreator = ActionCreatorGeneric<ApplicationState>;
