import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import ListIcon from 'material-ui/svg-icons/action/list';
import translate from '../../i18n/translate';

const ListMenuItem = ({ basePath = '', label = 'hcore.action.list', translate }) => (
    <MenuItem
        leftIcon={<ListIcon />}
        primaryText={translate(label)}
        containerElement={<Link to={basePath} />}
    />
);

ListMenuItem.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
};

export default translate(ListMenuItem);
