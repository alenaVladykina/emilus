import {USER_DELETE, FETCH_USERS} from "../constants/UserString";


export const userDeleteSagaAction = (userId) => {
    return {
        type: USER_DELETE,
        payload: userId
    }
};


export const fetchUserAction = () => {
    return {
        type: FETCH_USERS,
    }
};


