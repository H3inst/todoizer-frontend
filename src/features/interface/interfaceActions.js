import { finishLoading, startLoading } from "./interfaceSlice";

export function startLoadingAction() {
  return function (dispatch) {
    dispatch(startLoading());
  }
}

export function finishLoadingAction() {
  return function (dispatch) {
    dispatch(finishLoading());
  }
}