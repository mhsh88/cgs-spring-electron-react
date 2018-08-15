import React from 'react';
import { ReferenceField, TextField } from  '../../core';

const UserReferenceField = (props) => (
    <ReferenceField label="user" source="id" reference="users" {...props}>
        <TextField source="username" />
    </ReferenceField>
)
UserReferenceField.defaultProps = {
    source: 'user_id',
    addLabel: true,
};

export default UserReferenceField;
