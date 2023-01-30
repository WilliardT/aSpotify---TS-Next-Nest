import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import { reducer, RootState } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
