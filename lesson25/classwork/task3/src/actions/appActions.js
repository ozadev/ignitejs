import dispatcher from '../dispatcher';

function makeCalc(data) {
    dispatcher.dispatch({type: 'MAKE_CALC', data});
}

function changeValA(data) {
    dispatcher.dispatch({type: 'VAL_A_CHANGE', data});
}

function changeValB(data) {
    dispatcher.dispatch({type: 'VAL_B_CHANGE', data});
}

export {makeCalc, changeValA, changeValB};