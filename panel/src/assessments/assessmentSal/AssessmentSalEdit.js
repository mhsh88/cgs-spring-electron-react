import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    ReferenceArrayInput,
    SelectArrayInput,
    TextInput,
    maxLength,
    NumberInput,
} from '../../core';
import AssessmentSalTitle from './AssessmentSalTitle';

const AssessmentSalEdit = props => (
    <Edit title={<AssessmentSalTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="sal.id" reference="sals">
                <SelectInput optionText="value" options={{ fullWidth: true }} />
            </ReferenceInput>
            <TextInput source="accessibility" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <NumberInput source="capitalAsset" options={{ fullWidth: true }} />
            <TextInput source="confidentiality" validate={[maxLength(45)]} options={{ fullWidth: true }} />
            <NumberInput source="death" options={{ fullWidth: true }} />
            <NumberInput source="economyImpact" options={{ fullWidth: true }} />
            <NumberInput source="environmentalCleanUp" options={{ fullWidth: true }} />
            <NumberInput source="hospital" options={{ fullWidth: true }} />
            <NumberInput source="injury" options={{ fullWidth: true }} />
            <TextInput source="integrity" validate={[maxLength(45)]} options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default AssessmentSalEdit;
