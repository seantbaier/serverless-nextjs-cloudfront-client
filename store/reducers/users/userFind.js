import typeToReducer from 'type-to-reducer';
import { USER_FIND } from '../../actions/types';
import { DEFAULT_ASYNC_STATE } from '../../constants';

const DEFAULT_STATE = {
  ...DEFAULT_ASYNC_STATE,
  data: {}
};

export default typeToReducer(
  {
    [USER_FIND]: {
      PENDING: () => ({
        ...DEFAULT_STATE,
        isPending: true
      }),
      REJECTED: (state, action) => ({
        ...DEFAULT_STATE,
        isRejected: true,
        error: action.payload
      }),
      FULFILLED: (state, action) => ({
        ...DEFAULT_STATE,
        isFulfilled: true,
        data: action.payload
      }),
      RESET: () => DEFAULT_STATE
    }
  },
  DEFAULT_STATE
);
