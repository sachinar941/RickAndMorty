import {Profile} from '../../utils/interface';
import {PROFILE} from './../type';

const initialState: {profiles: Profile[]} = {profiles: []};

export const profileReducer = (
  state = initialState,
  action: {type: string; profiles: Profile[]},
) => {
  const {type, profiles} = action;

  switch (type) {
    case PROFILE:
      return {...state, profiles};

    default:
      return state;
  }
};
