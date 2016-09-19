
let stateInitial = {
    data: [
        {text:'Initial task: start use todo list app', id: 0}
    ],
    viewType: 'list',
    status: '',
    loaded: false,
    editStatus: false,
    editVal: '',
    arrGrade: []
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
        case 'EDIT_START': {
            let editVal = state.data.filter((item) => {
                return item.id == action.payload;
            });
            return {...state,
                editStatus: true,
                editItemId: action.payload,
                editVal: editVal[0].text
            };
            break;
        }
        case 'EDIT_MODIFY_TEXT': {
            return {...state, editVal: action.payload};
            break;
        }
        case 'EDIT_SAVE': {
            return {...state,
                editStatus: false,
                data: state.data.map((item) => {
                    if (item.id == state.editItemId)
                        return {text: state.editVal, id: state.editItemId};
                    else
                        return item;
                })
            };
            break;
        }
        case 'SAVE_GRADE': {
            let totalGrade = 0;
            state.arrGrade.forEach((item) => {
                totalGrade += +item;
            });
            totalGrade += +action.payload;
            totalGrade = totalGrade / (state.arrGrade.length + 1);
            return {...state,
                currGrade: action.payload,
                arrGrade: state.arrGrade.concat([action.payload]),
                totalGrade: totalGrade
            };
        }
        default: {
            return state;
        }
    }
};

export default todoListReducer;