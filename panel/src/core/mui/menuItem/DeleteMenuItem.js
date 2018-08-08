import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { pinkA400 } from 'material-ui/styles/colors';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const DeleteMenuItem = ({ basePath = '', label = 'hcore.action.delete', record = {}, translate }) => (
    <MenuItem
        leftIcon={<DeleteIcon color={pinkA400} />}
        primaryText={translate(label)}
        containerElement={<Link to={`${linkToRecord(basePath, record.id)}/delete`} />}
    />
);

DeleteMenuItem.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
};

export default translate(DeleteMenuItem);
