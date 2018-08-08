import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import { withRouter } from 'react-router';

export class MenuListItemLinkComponent extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        onTouchTap: PropTypes.func.isRequired,
        to: PropTypes.string.isRequired,
    };

    handleMenuTap = () => {
        this.props.history.push(this.props.to);
        this.props.onTouchTap();
    };
    render() {
        const { history, match, location, staticContext, ...props } = this.props; // eslint-disable-line

        return (
            <ListItem
                {...props}
                onTouchTap={this.handleMenuTap}
            />
        );
    }
}

export default withRouter(MenuListItemLinkComponent);
