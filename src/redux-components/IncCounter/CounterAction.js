import { INC_COUNTER } from './CounterType';
export const incrementCounter = () => {
    return {
        type: INC_COUNTER
    }
}