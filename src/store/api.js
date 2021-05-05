import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction("CallBegan");
export const apiCallSuccess = createAction("CallSuccess");
export const apiCallFailed = createAction("CallFailed");