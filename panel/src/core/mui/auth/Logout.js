import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { ListItem } from 'material-ui/List';
import ExitIcon from 'material-ui/svg-icons/action/power-settings-new';

import translate from '../../i18n/translate';
import { userLogout as userLogoutAction } from '../../actions/authActions';

class Logout extends PureComponent {
    render() {
        const { translate, userLogout } = this.props;
        return (
            <ListItem
                className="logout"
                leftIcon={<ExitIcon />}
                primaryText={translate('hcore.auth.logout')}
                onClick={userLogout}
            />
        );
    }
}

Logout.propTypes = {
    translate: PropTypes.func,
    userLogout: PropTypes.func,
};

const mapStateToProps = state => ({
    theme: state.theme,
});

const enhance = compose(
    translate,
    connect(mapStateToProps, { userLogout: userLogoutAction }),
);

export default enhance(Logout);
