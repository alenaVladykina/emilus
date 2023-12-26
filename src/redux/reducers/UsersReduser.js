import {IS_LOADING, USERS_FETCH, USERS_USER_DELETE} from "../constants/UserString";

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
const initState = {
    users: [user],
    isLoad: false
}

export const usersReduser = (state = initState, action) => {
    switch (action.type) {
        case USERS_FETCH: {
            return {
                ...state,
                users: action.users,
            };
        }
        case USERS_USER_DELETE: {
            return {
                ...state,
                users: state.users.filter(el => el.id !== action.userId)
            };
        }
        case IS_LOADING: {
            if (action.isLoad) {
                return {
                    ...state,
                    isLoad: true,
                };
            }
            if (!action.isLoad) {
                return {
                    ...state,
                    isLoad: false
                };
            }
        }

        default:
            return state;
    }
}

