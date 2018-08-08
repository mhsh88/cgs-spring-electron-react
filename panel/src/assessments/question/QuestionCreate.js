import React from 'react';
import {
    Create,
    SimpleForm,
    ReferenceArrayInput,
    SelectArrayInput,
    TextInput,
    required,
} from '../../core';

const QuestionCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="text" validate={required} options={{ fullWidth: true }} />
            <ReferenceArrayInput source="questionScopes" reference="questionscopes">
                <SelectArrayInput optionText="value" options={{ fullWidth: true }} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export default QuestionCreate;
