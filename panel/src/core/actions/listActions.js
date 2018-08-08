export const CRUD_CHANGE_LIST_PARAMS = 'HCORE/CRUD_CHANGE_LIST_PARAMS';

export const changeListParams = (resource, params) => ({
    type: CRUD_CHANGE_LIST_PARAMS,
    payload: params,
    meta: { resource },
});
