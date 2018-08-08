import React from 'react';
import {
    Edit,
    SimpleForm,
    required,
    TextInput,
} from '../../core';
import OrganizationTitle from './OrganizationTitle';

const OrganizationEdit = props => (
    <Edit title={<OrganizationTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default OrganizationEdit;
