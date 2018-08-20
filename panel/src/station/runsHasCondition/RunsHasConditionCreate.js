import React from 'react';
import {
    SelectInput,
    minValue,
    maxValue,
    maxLength,
    required,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    DateField,
    EditButton,
    NumberInput,
    BooleanInput,
    TextField
} from '../../core';


export const RunsHasConditionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <DisabledInput source="text"/>
            <NumberInput source="debi" validate={[required, minValue(0)]}/>
        </SimpleForm>
    </Create>
);

export default RunsHasConditionCreate;
