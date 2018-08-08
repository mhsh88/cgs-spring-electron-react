import React from 'react';
import {
    Filter,
    NumberInput,
    TextInput,
} from '../../core';

const AssessmentSalFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="sal.value" />
        <TextInput source="accessibility" />
        <NumberInput source="capitalAsset_ge" />
        <NumberInput source="capitalAsset_le" />
        <TextInput source="confidentiality" />
        <NumberInput source="death_ge" />
        <NumberInput source="death_le" />
        <NumberInput source="economyImpact_ge" />
        <NumberInput source="economyImpact_le" />
        <NumberInput source="environmentalCleanUp_ge" />
        <NumberInput source="environmentalCleanUp_le" />
        <NumberInput source="hospital_ge" />
        <NumberInput source="hospital_le" />
        <NumberInput source="injury_ge" />
        <NumberInput source="injury_le" />
        <TextInput source="integrity" />
    </Filter>
);

export default AssessmentSalFilters;
