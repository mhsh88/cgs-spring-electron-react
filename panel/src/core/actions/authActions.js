export const USER_LOGIN = 'HCORE/USER_LOGIN';
export const USER_LOGIN_LOADING = 'HCORE/USER_LOGIN_LOADING';
export const USER_LOGIN_FAILURE = 'HCORE/USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'HCORE/USER_LOGIN_SUCCESS';

export const userLogin = (payload, pathName) => ({
    type: USER_LOGIN,
    payload,
    meta: { auth: true, pathName },
});

export const USER_CHECK = 'HCORE/USER_CHECK';

export const userCheck = (payload, pathName) => ({
    type: USER_CHECK,
    payload,
    meta: { auth: true, pathName },
});

export const USER_LOGOUT = 'HCORE/USER_LOGOUT';

export const userLogout = () => ({
    type: USER_LOGOUT,
    meta: { auth: true },
});
