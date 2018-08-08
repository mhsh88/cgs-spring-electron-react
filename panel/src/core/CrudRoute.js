import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Restricted from './auth/Restricted';

const CrudRoute = ({ resource, list, create, edit, show, remove, retrieve, options }) => {
    const commonProps = {
        resource,
        options,
        hasList: !!list,
        hasCreate: !!create,
        hasEdit: !!edit,
        hasShow: !!show,
        hasDelete: !!remove,
        hasRetrieve: !!retrieve,
    };
    const RestrictedPage = (component, route) => routeProps => (
        <Restricted authParams={{ resource, route }} {...routeProps}>
            {createElement(component, { ...commonProps, ...routeProps })}
        </Restricted>
    );
    return (
        <Switch>
            {list && <Route exact path={`/${resource.toLowerCase()}`} render={RestrictedPage(list, 'list')} />}
            {create && <Route exact path={`/${resource.toLowerCase()}/create`} render={RestrictedPage(create, 'create')} />}
            {edit && <Route exact path={`/${resource.toLowerCase()}/:id`} render={RestrictedPage(edit, 'edit')} />}
            {show && <Route exact path={`/${resource.toLowerCase()}/:id/show`} render={RestrictedPage(show, 'show')} />}
            {remove && <Route exact path={`/${resource.toLowerCase()}/:id/delete`} render={RestrictedPage(remove, 'delete')} />}
            {retrieve && <Route exact path={`/${resource.toLowerCase()}/:id/retrieve`} render={RestrictedPage(retrieve, 'retrieve')} />}
        </Switch>
    );
};

const componentPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);

CrudRoute.propTypes = {
    resource: PropTypes.string,
    list: componentPropType,
    create: componentPropType,
    edit: componentPropType,
    show: componentPropType,
    remove: componentPropType,
    retrieve: componentPropType,
    options: PropTypes.object,
};

export default CrudRoute;
