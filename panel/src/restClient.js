import { simpleRestClient } from './core';

export const restDomain = 'http://localhost:9000';
const restClient = simpleRestClient(restDomain);
export default (type, resource, params) => new Promise(resolve => setTimeout(() => resolve(restClient(type, resource, params)), 1000));
