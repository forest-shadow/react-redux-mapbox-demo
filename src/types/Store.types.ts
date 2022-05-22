import {ActionCreator, AnyAction, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {IAppState} from "../store";

export type TThunkActionCreator = ActionCreator<ThunkAction<void, IAppState, unknown, AnyAction>>;
export type TThunkDispatch = ThunkDispatch<IAppState, unknown, AnyAction>;