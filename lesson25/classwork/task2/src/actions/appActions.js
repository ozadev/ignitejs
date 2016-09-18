import dispatcher from '../dispatcher';


let timerId;

function startCount() {
    if (timerId === undefined) {
        timerId = setInterval(incCount, 1000);
    }
}

function stopCount() {
    clearInterval(timerId);
    timerId = undefined;
}

function incCount() {
    dispatcher.dispatch({type: 'INC_COUNT'})
}

function clearCount() {
    dispatcher.dispatch({type: 'CLEAR_COUNT'})
}

export {incCount, clearCount, startCount, stopCount};