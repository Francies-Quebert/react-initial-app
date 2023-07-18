import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
import { reducerTest } from '../slice/reducer'
import usersSlice  from '../slice/entityAdapterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        reducerTest : reducerTest,
        users:usersSlice
    },
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch