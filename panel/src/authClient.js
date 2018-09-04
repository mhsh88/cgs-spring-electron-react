import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';
import { restDomain } from './restClient';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const body = { username: username, password: password, grant_type: 'password' };
        const request = new Request(`${restDomain}/oauth/token`, {
            method: 'POST',
            // body: JSON.stringify(body),
            body: 'grant_type=password&password='+password+'&username=' + username,
            withCredentials : true,
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==',
            })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
                const token = response.access_token;
                localStorage.setItem('token', token);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const status  = params.message.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    }
    return Promise.reject('Unknown method');
};
