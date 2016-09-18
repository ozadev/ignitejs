import dispatcher from '../dispatcher';

function switchClass() {
    dispatcher.dispatch({type: 'SWITCH_CLASS'})
}

export {switchClass};