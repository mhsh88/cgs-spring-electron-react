/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import translate from '../../i18n/translate';

const SingleCreateMenu = ({ basePath, label }) => (
    <MenuItem
        label={label}
        icon={<ContentAdd />}
        containerElement={<Link to={`${basePath}/create`} />}
    />
);

const MultipleCreateMenu = ({ translate, label, creationMenuOfChildren }) => (
    <Menu>
        <Divider />
        {label && <Subheader>{label}</Subheader>}
        {React.cloneElement(creationMenuOfChildren)}
    </Menu>
);

const CreateMenuItem = ({ basePath = '', translate, label = 'hcore.action.create', creationMenuOfChildren }) => {
    if (creationMenuOfChildren) {
        return <MultipleCreateMenu label={label && translate(label)} creationMenuOfChildren={creationMenuOfChildren} />;
    }
    return <SingleCreateMenu basePath={basePath} label={label && translate(label)} />;
};

CreateMenuItem.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
    creationMenuOfChildren: PropTypes.element,
};

export default translate(CreateMenuItem);
