
export const createItem = (item) => {
    return {
        type: 'CREATE_ITEM',
        payload: item
    }
};

export const removeItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
};

export const changeViewType = (type) => {
    return {
        type: 'CHANGE_VIEW_TYPE',
        payload: type
    }
};

export const startEditItem = (id) => {
    return {
        type: 'EDIT_START',
        payload: id
    }
};

export const modifyEditItem = (value) => {
    return {
        type: 'EDIT_MODIFY_TEXT',
        payload: value
    }
};

export const saveEditItem = (value) => {
    return {
        type: 'EDIT_SAVE',
        payload: value
    }
};

export const saveGrade = (value) => {
    return {
        type: 'SAVE_GRADE',
        payload: value
    }
};

