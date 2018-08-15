import { simpleRestClient, Admin, Resource } from './core';
import { fetchJson } from './core/util/fetch'
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchJson(url, options);
};

export const restDomain = 'http://localhost:9090';
const restClient = simpleRestClient(restDomain, httpClient);
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 1000));
