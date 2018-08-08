import React from 'react';
import PropTypes from 'prop-types';
import {
    Create,
    maxLength,
    ReferenceArrayInput,
    required,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    translate,
} from '../../core';
import { PermissionTitleFunction } from '../permission/PermissionTitle';

const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required, maxLength(64)]} options={{ fullWidth: true }} />
            <TextInput source="title" validate={required} options={{ fullWidth: true }} />
            <ReferenceArrayInput source="permissions" reference="permissions" validate={required}>
                <SelectArrayInput optionText={choice => PermissionTitleFunction(choice, props.translate)} options={{ fullWidth: true }} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

RoleCreate.propTypes = {
    translate: PropTypes.func,
};

export default translate(RoleCreate);
