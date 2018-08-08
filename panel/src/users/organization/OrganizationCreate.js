import React from 'react';
import {
    Create,
    SimpleForm,
    required,
    TextInput,
} from '../../core';

const OrganizationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default OrganizationCreate;
