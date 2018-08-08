import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
// import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';

const DashboardListItem = ({ onTouchTap, translate }) => (
    <ListItem
        /* containerElement={<Link to="/" />} */
        value="/"
        containerElement={<Link to="/" />}
        primaryText={translate('hcore.page.dashboard')}
        leftIcon={<DashboardIcon />}
        onTouchTap={onTouchTap}
    />
);

DashboardListItem.propTypes = {
    onTouchTap: PropTypes.func,
    translate: PropTypes.func.isRequired,
};

export default translate(DashboardListItem);
