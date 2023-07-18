// usersSlice.ts
import { createAsyncThunk, createEntityAdapter, EntityState, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
}

export interface UsersState extends EntityState<User> {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}


const usersAdapter = createEntityAdapter<User>({
  selectId: (user) =>  user.id.toString(),
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});


// const initialState: UsersState = {
//   ...usersAdapter.getInitialState(),
//   status: 'idle',
//   error: null,
// };

const initialState: UsersState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
})


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        usersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors(
  (state: { users: UsersState }) => state.users
);
// export const { selectAll: selectAllUsers } = usersAdapter.getSelectors((state: any) => state)

export const { addUser, updateUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
