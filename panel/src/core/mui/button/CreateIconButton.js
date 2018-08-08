import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import translate from '../../i18n/translate';

const CreateIconButton = ({ basePath = '', translate, label = 'hcore.action.create' }) => (
    <FlatButton
        primary
        label={label && translate(label)}
        icon={<ContentAdd />}
        containerElement={<Link to={`${basePath}/create`} />}
        style={{ overflow: 'inherit' }}
    />
);

CreateIconButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
};

export default translate(CreateIconButton);
