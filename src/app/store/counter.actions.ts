import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment', props<{ value: number }>());
export const decrement = createAction('[Counter Component] Decrement', props<{ value: number }>());
export const reset = createAction('[Counter Component] Reset');

export const init = createAction('[Counter Component] Init');
export const set = createAction('[Counter Component] Set', props<{ value: number }>());

// export const INCREMENT = '[Counter Component] Increment';
// export class IncrementAction implements Action {
//   readonly type: string = '[Counter Component] Increment';
  
//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;