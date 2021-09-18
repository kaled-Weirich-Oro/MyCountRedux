import { createStore } from 'redux';

const INITIAL_STATE = {
    count: 0
}
// Reducer
function setCount(state = INITIAL_STATE, action) {
    console.log('count', state);
    switch (action.type) {
        case ('SUM'): 
            return {...state, count: state.count + action.value}
        case ('SUB'):
            return {count: state.count - action.value}
        default:
            return state;
    }
}
export default createStore(setCount);