import React from 'react';
import {
    BooleanInput,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
} from '../../core';
import OrganizationAssessmentHasQuestionTitle from './OrganizationAssessmentHasQuestionTitle';

const OrganizationAssessmentHasQuestionEdit = props => (
    <Edit title={<OrganizationAssessmentHasQuestionTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="questionAnswer.id" reference="questionanswers">
                <SelectInput options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="preQuestionAnswer.id" reference="prequestionanswers">
                <SelectInput options={{ fullWidth: true }} />
            </ReferenceInput>
            <ReferenceInput source="organizationAssessment.id" reference="organizationassessments">
                <SelectInput options={{ fullWidth: true }} />
            </ReferenceInput>
            <NumberInput source="priority" options={{ fullWidth: true }} />
            <NumberInput source="weight" options={{ fullWidth: true }} />
            <BooleanInput source="markAsView" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default OrganizationAssessmentHasQuestionEdit;
