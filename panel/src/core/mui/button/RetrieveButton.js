import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import ActionRetrieve from 'material-ui/svg-icons/action/settings-backup-restore';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const RetrieveButton = ({ basePath = '', label = 'hcore.action.retrieve', record = {}, translate }) => (
    <FlatButton
        primary
        label={label && translate(label)}
        icon={<ActionRetrieve />}
        containerElement={<Link to={`${linkToRecord(basePath, record.id)}/retrieve`} />}
        style={{ overflow: 'inherit' }}
    />
);

RetrieveButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
};

export default translate(RetrieveButton);
