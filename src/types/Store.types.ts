import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {IAppState} from "../store";

export type TThunkDispatch = ThunkDispatch<IAppState, unknown, AnyAction>;