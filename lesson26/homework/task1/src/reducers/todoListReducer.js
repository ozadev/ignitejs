
let stateInitial = {
    data: [
        {text: 'Task #1', id: 1},
        {text: 'Task #2', id: 2},
        {text: 'Task #3', id: 3},
        {text: 'Task #4', id: 4}
    ],
    viewType: 'list'
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
        default: {
            return state;
        }
    }
};

export default todoListReducer;