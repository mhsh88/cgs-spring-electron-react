import React from 'react';
import {
    NumberInput,
    required,
    Create,
    Edit,
    SimpleForm,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    ReferenceInput, SelectInput
} from  '../../core';

export const CalculationEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput label="Station" source="cityGateStation.id" reference="citygatestations" allowEmpty >
                <SelectInput optionText="city" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Condition" source="condition.id" reference="conditions" allowEmpty >
                <SelectInput optionText="id" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Natural Gas" source="gas.id" reference="gass" allowEmpty>
                <SelectInput optionText="name" validate={required}/>
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);

export default CalculationEdit;
