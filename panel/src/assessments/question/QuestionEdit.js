import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceArrayInput,
    required,
    SelectArrayInput,
    TextInput,
} from '../../core';
import QuestionTitle from './QuestionTitle';

const QuestionEdit = props => (
    <Edit title={<QuestionTitle />} {...props}>
        <SimpleForm>
            <TextInput source="text" validate={required} options={{ fullWidth: true }} />
            <ReferenceArrayInput source="questionScopes" reference="questionscopes">
                <SelectArrayInput optionText="value" options={{ fullWidth: true }} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export default QuestionEdit;
