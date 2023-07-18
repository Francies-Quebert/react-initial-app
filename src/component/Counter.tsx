import React, { useEffect } from 'react'
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slice/counterSlice'
import { decrement as D, increment as I } from '../slice/reducer'
import {
  addUser, fetchUsers, selectAllUsers,
  removeUser, updateUser
} from '../slice/entityAdapterSlice'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector((state: { users: { status: 'idle' | 'loading' | 'succeeded' | 'failed'; error: string | null } }) => state.users.status);

  useEffect(() => {
    // console.log(usersStatus, 'usersStatus')
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'New User',
    };
    dispatch(addUser(newUser));
  };

  const handleUpdateUser = (id: number, newName: string) => {
    dispatch(updateUser({ id, changes: { name: newName } }));
  };

  const handleRemoveUser = (id: number) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div style={{ width: '100%', border: '1px solid red' }} />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(I(1))}
        >
          Increment reducer
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(D(1))}
        >
          Decrement reducer
        </button>
        <div style={{ width: '100%', border: '1px solid red', padding: '30px 0px' }} />

        <div>
          <button onClick={handleAddUser}>Add User</button>
          {usersStatus === 'loading' && <div>Loading...</div>}
          {usersStatus === 'failed' && <div>Error: Failed to fetch users</div>}
          {usersStatus === 'succeeded' && (
            <ul>
              {users.map((user) => (
                <li key={user.id} role='user'>
                  {user.name}{' '}
                  <button onClick={() => handleUpdateUser(user.id, 'Updated User')}>
                    Update
                  </button>{' '}
                  <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>


      </div>
    </div >
  )
}