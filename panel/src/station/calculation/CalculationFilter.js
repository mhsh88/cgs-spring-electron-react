import React from 'react';
import {
    Filter, SimpleForm,
    TextInput, NumberInput, ReferenceInput, SelectInput
} from  '../../core';

const CalculationFilter = props => (
    <Filter {...props}>
        <ReferenceInput label="Station" source="id" reference="citygatestations">
            <SelectInput optionText="city" />
        </ReferenceInput>
    </Filter>
);

export default CalculationFilter;
