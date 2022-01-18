import { configureStore } from '@reduxjs/toolkit';
import { reducer as gameReducer } from './containers/GamePlay/reducer';
import { reducer as bidReducer } from './containers/Bidding/reducer';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    bidding: bidReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
