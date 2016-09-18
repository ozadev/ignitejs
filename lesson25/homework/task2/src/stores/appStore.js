import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.items = [
            {name: 'Task #1', id: 1},
            {name: 'Task #2', id: 2},
            {name: 'Task #3', id: 3},
            {name: 'Task #4', id: 4}
        ];
        this.searchStr = '';
    }

    getFilteredItems() {
        let filteredItems = this.items.filter((item) => {
            return (item.name.indexOf(this.searchStr) !== -1);
        });

        return filteredItems;
    }

    createItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter((item) => {
            return item.id != id;
        });
    }

    searchStrChange(newVal) {
        this.searchStr = newVal;
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_ITEM': {
                this.createItem(action.item);
                this.emit('itemsChange');
                break;
            }
            case 'DELETE_ITEM': {
                this.removeItem(action.id);
                this.emit('itemsChange');
                break;
            }
            case 'FILTER_ITEMS': {
                this.searchStrChange(action.search);
                this.emit('itemsChange');
                break;
            }
        }
    }
}

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore;