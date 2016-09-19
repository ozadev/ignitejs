
let stateInitial = {
    data: [],
    viewType: 'list',
    status: '',
    loaded: false
};

const todoListReducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'CREATE_ITEM': {
            return {...state, data: state.data.concat([action.payload])};
            break;
        }
        case 'DELETE_ITEM': {
            let data = state.data.filter((item) => {
                return item.id != action.payload;
            });
            return {...state, data: data};
            break;
        }
        case 'CHANGE_VIEW_TYPE': {
            return {...state, viewType: action.payload};
            break;
        }
        case 'FETCH_DATA_START': {
            return {...state, status: 'Data loading start'};
            break;
        }
        case 'FETCH_DATA_ERROR': {
            return {...state, status: 'Data load error'};
            break;
        }
        case 'RECEIVE_DATA': {
            console.log(action.payload);
            return {
                ...state,
                status: 'Data received successfully',
                loaded: true,
                data: state.data.concat(action.payload)
            };
            break;
        }
        default: {
            return state;
        }
    }
};

export default todoListReducer;