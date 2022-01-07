import { counter } from "../type";
export const counterAction = {
  increment: () => ({ type: counter.INCREMENT }),
  decrement: () => ({ type: counter.DECREMENT }),
  delete: () => ({ type: counter.DELETE }),
};
