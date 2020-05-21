import { INC_COUNTER } from './CounterType';
export const incrementCounter = (inputCount) => {
    return {
        type: INC_COUNTER,
        payload: inputCount
    }
}