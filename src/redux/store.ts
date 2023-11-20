import {
  Action,
  combineReducers,
  configureStore,
  createAction
} from '@reduxjs/toolkit';

import createSlice from './create/create.slice';
import idoSlice from './ido/ido.slice';

export const rootReducer = (state: any, action: Action<string>) => {
  if (action.type === 'RESET_STATE') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const appReducer = combineReducers({
  create: createSlice,
  ido: idoSlice
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export const restoreReduxState = createAction('RESET_STATE');

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
