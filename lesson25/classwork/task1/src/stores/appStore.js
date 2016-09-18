import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.currClass = 'block-box';
    } 

    getClass() {
        return this.currClass;
    }

    changeCurrClass() {
        this.currClass = (this.currClass == 'block-box') ? 'block-circle' : 'block-box';
    } 

	// обработчик actions 
    handleActions(action) {
		
        switch (action.type) {
            case "SWITCH_CLASS": {
                this.changeCurrClass();
                this.emit('classChange');
                console.log(`Class switched to ${this.currClass}`);
				break; 
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore;