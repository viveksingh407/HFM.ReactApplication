import { createStore, combineReducers } from 'redux';

const initialItemState = {
    items: []
}

const itemReducer = function(state, action) {
    if(state === undefined)
    {
        state = {items:[]};
    }

    switch(action.type) {
        case 'get_items':
            return Object.assign({}, state, { items: action.items });
    }
    return state;
}

//The Widget Reducer
//const widgetReducer = function(state = {}, action) {
//    return state;
//}

// Combine Reducers
const reducers = combineReducers({
    itemState: itemReducer
    //widgetState: widgetReducer
});

const store = createStore(reducers);

export default store;