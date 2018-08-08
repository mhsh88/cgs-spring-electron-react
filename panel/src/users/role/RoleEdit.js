import React from 'react';
import PropTypes from 'prop-types';
import {
    Edit,
    SimpleForm,
    maxLength,
    ReferenceArrayInput,
    required,
    SelectArrayInput,
    TextInput,
    translate,
} from '../../core';
import RoleTitle from './RoleTitle';
import { PermissionTitleFunction } from '../permission/PermissionTitle';

const RoleEdit = props => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required, maxLength(64)]} options={{ fullWidth: true }} />
            <TextInput source="title" validate={required} options={{ fullWidth: true }} />
            <ReferenceArrayInput source="permissions" reference="permissions" validate={required}>
                <SelectArrayInput optionText={choice => PermissionTitleFunction(choice, props.translate)} options={{ fullWidth: true }} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

RoleEdit.propTypes = {
    translate: PropTypes.func,
};

export default translate(RoleEdit);
