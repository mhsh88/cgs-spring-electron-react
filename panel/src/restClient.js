import { jsonServerRestClient, Admin, Resource } from './core';
import { fetchUtils } from 'admin-on-rest'
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const restDomain = 'http://localhost:9000';
const restClient = jsonServerRestClient(restDomain, httpClient);
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 1000));
