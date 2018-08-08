import React from 'react';
import {
    Create,
    SimpleForm,
    LongTextInput,
    required,
} from '../../core';

const PreQuestionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <LongTextInput source="text" validate={required} options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default PreQuestionCreate;
