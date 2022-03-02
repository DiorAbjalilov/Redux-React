import { counter } from '../types';
export const counterAction={
    increment:()=>({type:counter.INCREMENT}),
    decrement:()=>({type:counter.DECREMENT}),
    clear:()=>({type:counter.CLEAR})
}