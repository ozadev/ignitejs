import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();

        this.calcResult = 0;
        this.valA = '';
        this.valB = '';
    } 

    getResult() {
        return this.calcResult;
    }

    getValA() {
        return this.valA;
    }

    getValB() {
        return this.valB;
    }

    culcResult(calcType) {

        if (this.valA === '' || this.valB === '') {
            this.calcResult = 'Error: not valid input value';
            return;
        }

        switch(calcType) {
            case 'sum':
                this.calcResult = +this.valA + +this.valB;
                break;
            case 'sub':
                this.calcResult = this.valA - this.valB;
                break;
            case 'mul':
                this.calcResult = this.valA * this.valB;
                break;
            case 'div':
                if (+this.valB === 0) {
                    this.calcResult = 'Error: division by zero';
                }
                else {
                    this.calcResult = this.valA / this.valB;
                }
                break;
            default:
                this.calcResult = "Error: invalid calc type";
        }
    }

    saveValA(newVal) {
        var number = newVal.match(/[+-]?(\d*[.])?(\d+)?/);
        this.valA = number[0] ? number[0] : '';
    }

    saveValB(newVal) {
        var number = newVal.match(/[+-]?(\d*[.])?(\d+)?/);
        this.valB = number[0] ? number[0] : '';
    }

    handleActions(action) {
		
        switch (action.type) {
            case "MAKE_CALC": {
                this.culcResult(action.data);
                this.emit('resultChanged');
                // console.log(`Counter: ${this.currCount}`);
				break; 
            }
            case "VAL_A_CHANGE": {
                this.saveValA(action.data);
                this.emit('valAChanged');
                // console.log(`Counter: ${this.currCount}`);
                break;
            }
            case "VAL_B_CHANGE": {
                this.saveValB(action.data);
                this.emit('valBChanged');
                // console.log(`Counter: ${this.currCount}`);
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore;