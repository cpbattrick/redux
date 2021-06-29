import reducer from "./store/reducer";

function createStore(reducer) {
    let state;
    let listeners = [];
    function dispatch (action) {
        state = reducer(state, action);
        
        listeners.forEach(l => l());
    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}

export default createStore(reducer);