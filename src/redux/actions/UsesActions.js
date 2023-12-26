import {USER_DELETE, FETCH_USERS, IS_LOADING} from "../constants/UserString";


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

export const isLoadingAction = (isLoad) => {
    return {
        type: IS_LOADING,
        payload: isLoad
    }
};



