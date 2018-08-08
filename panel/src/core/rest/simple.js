import { queryParameters, fetchJson } from '../util/fetch';
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
} from './types';

/**
 * Maps admin-on-rest queries to a simple REST API
 *
 * The REST dialect is similar to the one of FakeRest
 * @see https://github.com/marmelab/FakeRest
 * @example
 * GET_LIST     => GET http://my.api.url/posts?sort={field:'title',order:'ASC'}&pagination={pageNumber: 1, pageSize: 20}
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts?filter={ids:[123,456,789]}
 * CREATE       => PUT http://my.api.url/posts
 * UPDATE       => POST http://my.api.url/posts
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchJson) => {
    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertRESTRequestToHTTP = (type, resource, params) => {
        let url = '';
        const options = {};
        switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                // sort: JSON.stringify([field, order]),
                sort: { field, order },
                // range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
                filters: Object.keys(params.filter).map(key => ({
                    field: key.split('_')[0].replace('>', '.'),
                    operator: (key.split('_').length > 1 ? key.split('_')[1] : 'like'),
                    value: params.filter[key],
                })),
                // filter: JSON.stringify(params.filter),
            };
            if (page !== undefined) {
                query.pagination = { pageNumber: page, pageSize: perPage };
            }
            // url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
            url = `${apiUrl}/u/${resource}?${encodeURIComponent(JSON.stringify(query))}`;
            // url = `${apiUrl}/${resource}?${queryParameters(query)}`;
            options.method = 'GET';
            break;
        }
        case GET_ONE:
            url = `${apiUrl}/u/${resource}/${params.id}`;
            options.method = 'GET';
            break;
        case GET_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            url = `${apiUrl}/u/${resource}?${queryParameters(query)}`;
            options.method = 'GET';
            break;
        }
        case GET_MANY_REFERENCE: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const filters = { ...params.filter, [params.target]: params.id };
            const query = {
                // sort: JSON.stringify([field, order]),
                sort: { field, order },
                // range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
                filters: Object.keys(filters).map(key => ({
                    field: key.split('_')[0],
                    operator: (key.split('_').length > 1 ? key.split('_')[1] : 'like'),
                    value: filters[key],
                })),
                // filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
            };
            if (page !== undefined) {
                query.pagination = { pageNumber: page, pageSize: perPage };
            }
            url = `${apiUrl}/u/${resource}?${encodeURIComponent(JSON.stringify(query))}`;
            // url = `${apiUrl}/${resource}?${queryParameters(query)}`;
            options.method = 'GET';
            break;
        }
        case CREATE:
            url = `${apiUrl}/u/${resource}`;
            options.method = 'PUT';
            options.body = JSON.stringify(params.data);
            break;
        case UPDATE:
            // url = `${apiUrl}/u/${resource}/${params.id}`;
            url = `${apiUrl}/u/${resource}`;
            options.method = 'POST';
            options.body = JSON.stringify(params.data);
            break;
        case DELETE:
            url = `${apiUrl}/u/${resource}/${params.id}`;
            options.method = 'DELETE';
            break;
        default:
            throw new Error(`Unsupported fetch action type ${type}`);
        }
        return { url, options };
    };

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} REST response
     */
    const convertHTTPResponseToREST = (response, type, resource, params) => {
        const { json } = response;
        switch (type) {
        case GET_LIST:
        case GET_MANY_REFERENCE:
            /* if (!headers.has('content-range')) {
                throw new Error('The Content-Range header is missing in the HTTP Response. The simple REST client expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?');
            }*/
            return {
                data: json.data,
                total: parseInt(json.total, 10),
            };
        case CREATE:
            return { data: { ...params.data, id: (json.data && json.data.length && json.data.length > 0) ? json.data[0].id : 0 } };
        default:
            return { data: json };
        }
    };

    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a REST response
     */
    return (type, resource, params) => {
        const { url, options } = convertRESTRequestToHTTP(type, resource, params);
        return httpClient(url, options)
            .then(response => convertHTTPResponseToREST(response, type, resource, params));
    };
};
