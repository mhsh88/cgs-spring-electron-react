import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import RestoreIcon from 'material-ui/svg-icons/action/settings-backup-restore';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const RetrieveMenuItem = ({ basePath = '', label = 'hcore.action.retrieve', record = {}, translate }) => (
    <MenuItem
        leftIcon={<RestoreIcon />}
        primaryText={translate(label)}
        containerElement={<Link to={`${linkToRecord(basePath, record.id)}/retrieve`} />}
    />
);

RetrieveMenuItem.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
};

export default translate(RetrieveMenuItem);
