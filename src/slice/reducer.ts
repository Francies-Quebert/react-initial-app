import {
    createAction,
    createReducer,
    AnyAction,
    PayloadAction,
    current,
  } from '@reduxjs/toolkit'
  
  export const increment = createAction<number>('increment')
  export const decrement = createAction<number>('decrement')
  
  export function isActionWithNumberPayload(
    action: AnyAction
  ): action is PayloadAction<number> {
    return typeof action.payload === 'number'
  }
  
  export const reducerTest = createReducer(
    {
      counter: 0,
      sumOfNumberPayloads: 0,
      unhandledActions: 0,
    },
    (builder) => {
      builder
        .addCase(increment, (state, action) => {
          // action is inferred correctly here
          state.counter += action.payload
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(decrement, (state, action) => {
          state.counter -= action.payload
        })
        // You can apply a "matcher function" to incoming actions
        .addMatcher(isActionWithNumberPayload, (state, action) => {
            console.log(current(state),action)
        })
        // and provide a default case if no other handlers matched
        .addDefaultCase((state, action) => {})
    }
  )