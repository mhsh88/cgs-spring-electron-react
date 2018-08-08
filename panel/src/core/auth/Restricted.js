import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userCheck as userCheckAction } from '../actions/authActions';

/**
 * Restrict access to children
 *
 * Expects an authClient prop, which will be called with AUTH_CHECK upon mount and update
 *
 * Useful for Route components - used in CrudRoute
 *
 * @example
 * <Route path="/foo" render={routeParams =>
 *   <Restricted authClient={authClient} location={routeParams.location}>
 *     <Foo />
 *   </Restricted>
 * } />
 */
export class Restricted extends Component {
    static checkAuthentication(params) {
        const { userCheck, authParams, location } = params;
        userCheck(authParams, location && location.pathname);
    }
    static propTypes = {
        authParams: PropTypes.object,
        location: PropTypes.object,
        userCheck: PropTypes.func,
        children: PropTypes.node,
    };

    componentWillMount() {
        Restricted.checkAuthentication(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            Restricted.checkAuthentication(nextProps);
        }
    }

    // render the child even though the AUTH_CHECK isn't finished (optimistic rendering)
    render() {
        const { children, ...rest } = this.props;
        return React.cloneElement(children, rest);
    }
}

export default connect(null, {
    userCheck: userCheckAction,
})(Restricted);
