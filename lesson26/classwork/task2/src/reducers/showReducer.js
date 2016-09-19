
const showReducer = (state = false, action) => {

    switch (action.type) {
        case 'TOGGLE_SHOW': {
            return (state == false);
            break;
        }
        default: {
            return state;
        }
    }
};

export default showReducer;