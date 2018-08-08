import { all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
    CRUD_CREATE_FAILURE,
    CRUD_CREATE_SUCCESS,
    CRUD_DELETE_FAILURE,
    CRUD_DELETE_SUCCESS,
    CRUD_GET_LIST_FAILURE,
    CRUD_GET_MANY_FAILURE,
    CRUD_GET_MANY_REFERENCE_FAILURE,
    CRUD_GET_ONE_FAILURE,
    CRUD_UPDATE_FAILURE,
    CRUD_UPDATE_SUCCESS,
    CRUD_RETRIEVE_SUCCESS,
    CRUD_RETRIEVE_FAILURE,
} from '../../actions/dataActions';
import { showNotification } from '../../actions/notificationActions';
import resolveRedirectTo from '../../util/resolveRedirectTo';

/**
 * Side effects for fetch responses
 *
 * Mostly redirects and notifications
 */
function* handleResponse({ type, requestPayload, error, payload }) {
    switch (type) {
    case CRUD_UPDATE_SUCCESS:
        return requestPayload.redirectTo ? yield all([
            put(showNotification('hcore.notification.updated')),
            put(push(resolveRedirectTo(requestPayload.redirectTo, requestPayload.basePath, requestPayload.id))),
        ]) : yield [put(showNotification('hcore.notification.updated'))];
    case CRUD_CREATE_SUCCESS:
        return requestPayload.redirectTo ? yield all([
            put(showNotification('hcore.notification.created')),
            put(push(resolveRedirectTo(requestPayload.redirectTo, requestPayload.basePath, payload.data.id))),
        ]) : yield [put(showNotification('hcore.notification.created'))];
    case CRUD_DELETE_SUCCESS:
        return requestPayload.redirectTo ? yield all([
            put(showNotification('hcore.notification.deleted')),
            put(push(resolveRedirectTo(requestPayload.redirectTo, requestPayload.basePath, requestPayload.id))),
        ]) : yield [put(showNotification('hcore.notification.deleted'))];
    case CRUD_RETRIEVE_SUCCESS:
        return yield all([
            put(showNotification('hcore.notification.retrieved')),
            put(push(requestPayload.basePath)),
        ]);
    case CRUD_GET_ONE_FAILURE:
        return requestPayload.basePath ? yield all([
            put(showNotification('hcore.notification.item_doesnt_exist', 'warning')),
            put(push(requestPayload.basePath)),
        ]) : yield all([]);
    case CRUD_GET_LIST_FAILURE:
    case CRUD_GET_MANY_FAILURE:
    case CRUD_GET_MANY_REFERENCE_FAILURE:
    case CRUD_CREATE_FAILURE:
    case CRUD_UPDATE_FAILURE:
    case CRUD_DELETE_FAILURE:
    case CRUD_RETRIEVE_FAILURE: {
        console.error(error);
        const errorMessage = typeof error === 'string'
            ? error
            : (error.message || 'hcore.notification.http_error');
        return yield put(showNotification(errorMessage, 'warning'));
    }
    default:
        return yield all([]);
    }
}

export default function* () {
    yield takeEvery(action => action.meta && action.meta.fetchResponse, handleResponse);
}
