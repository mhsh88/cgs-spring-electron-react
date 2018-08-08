import React from 'react';
import {
    AutocompleteInput,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
} from '../../core';

const QuestionHasSalCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="sal.id" reference="sals">
                <SelectInput optionText="value" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="standard.id" reference="standards">
                <SelectInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="metric.id" reference="metrics">
                <AutocompleteInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="subMetric.id" reference="submetrics">
                <AutocompleteInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="preQuestion.id" reference="prequestions">
                <AutocompleteInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="question.id" reference="questions">
                <AutocompleteInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceInput>
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
        </SimpleForm>
    </Create>
);

export default QuestionHasSalCreate;
