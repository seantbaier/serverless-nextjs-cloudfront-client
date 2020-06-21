import * as types from './index';
​
export function beginAxiosCall() {
  return { type: types.BEGIN_AXIOS_CALL };
}
​
export function endAxiosCall() {
  return { type: types.END_AXIOS_CALL };
