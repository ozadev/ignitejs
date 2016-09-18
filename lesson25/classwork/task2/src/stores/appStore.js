import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.currCount = 0;
    } 

    getCount() {
        return this.currCount;
    }

    incCount() {
        this.currCount += 1;
    }

    clearCount() {
        this.currCount = 0;
    } 

    handleActions(action) {
		
        switch (action.type) {
            case "INC_COUNT": {
                this.incCount();
                this.emit('countChange');
                console.log(`Counter: ${this.currCount}`);
				break; 
            }
            case "CLEAR_COUNT": {
                this.clearCount();
                this.emit('countChange');
                console.log(`Counter: ${this.currCount}`);
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore;