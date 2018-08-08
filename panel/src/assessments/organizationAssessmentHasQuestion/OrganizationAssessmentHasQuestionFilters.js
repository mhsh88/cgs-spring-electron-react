import React from 'react';
import {
    BooleanInput,
    Filter,
    NumberInput,
    TextInput,
} from '../../core';

const OrganizationAssessmentHasQuestionFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="organizationAssessment.assessmentName" />
        <NumberInput source="priority" />
        <NumberInput source="weight" />
        <BooleanInput source="markAsView" />
    </Filter>
);

export default OrganizationAssessmentHasQuestionFilters;
