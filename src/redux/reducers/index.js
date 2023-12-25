import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import {usersReduser} from "./UsersReduser";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users:usersReduser
});

export default reducers;