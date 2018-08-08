import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import translate from '../../i18n/translate';

const RefreshMenuItem = ({ label = 'hcore.action.refresh', translate, refresh }) => (
    <MenuItem
        leftIcon={<RefreshIcon />}
        primaryText={translate(label)}
        onClick={refresh}
    />
);

RefreshMenuItem.propTypes = {
    label: PropTypes.string,
    refresh: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
};

export default translate(RefreshMenuItem);
