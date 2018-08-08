import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from '../../actions';

const style = {
    bar: {
        height: '3em',
        position: 'absolute',
        top: 0,
    },
    title: {
        fontSize: '1.25em',
        lineHeight: '2.5em',
    },
    leftIcon: {
        marginTop: 0,
        marginRight: 0,
        marginLeft: '-24px',
    },
    rightIcon: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

class AppBarMobile extends Component {
    handleLeftIconButtonTouchTap = (event) => {
        event.preventDefault();
        this.props.toggleSidebar();
    };

    render() {
        const { title, actionsMenu } = this.props;
        return (
            <MuiAppBar
                style={style.bar}
                titleStyle={style.title}
                iconStyleLeft={style.leftIcon}
                iconStyleRight={style.rightIcon}
                title={title}
                iconElementRight={actionsMenu}
                onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
            />
        );
    }
}

AppBarMobile.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    actionsMenu: PropTypes.node,
    toggleSidebar: PropTypes.func.isRequired,
};

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    connect(null, {
        toggleSidebar: toggleSidebarAction,
    }),
);

export default enhance(AppBarMobile);
