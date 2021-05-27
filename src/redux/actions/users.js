import * as type from '../reducers/types';

export function getUsers(users) {
  return { 
    type: type.GET_USERS,
    payload: users,
  }
}