
let initialState = {users: [], status: '', loaded: false};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_USERS_START': {
            return {...state, status: 'Data loading start'};
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, status: 'Data load error'};
            break;
        }
        case 'RECEIVE_USERS': {
            console.log(action.payload);
            return {
                ...state,
                status: 'Data received successfully',
                loaded: true,
                users: action.payload
            };
            break;
        }
        default: {
            return state;
        }
    }
};

export default usersReducer;