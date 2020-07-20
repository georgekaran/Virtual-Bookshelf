import { User } from "../protocols";

let contextReducerDefaultState: User = {
  id: '1',
  name: 'Admin',
};

const contextReducer = (state = contextReducerDefaultState, action: any) => {
  return state
};

export default contextReducer