
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


