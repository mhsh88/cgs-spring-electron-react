import React from 'react';
import {
    NumberInput,
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
    BooleanInput
} from  '../../core';

export const ConditionEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput source="name"/>
            <NumberInput source="nitrogen"/>
            <NumberInput source="carbonDioxide"/>
            <NumberInput source="methan"/>
            <NumberInput source="ethane"/>
            <NumberInput source="propane"/>
            <NumberInput source="nButane"/>
            <NumberInput source="isoButane"/>
            <NumberInput source="nPentane"/>
            <NumberInput source="isoPentane"/>
            <NumberInput source="hexane"/>
            <NumberInput source="heptane"/>
            <NumberInput source="octane"/>
            <NumberInput source="nonane"/>
            <NumberInput source="decane"/>
            <NumberInput source="hydrogen"/>
            <NumberInput source="oxygen"/>
            <NumberInput source="carbonMonoxide"/>
            <NumberInput source="water"/>
            <NumberInput source="hydrogenSulfide"/>
            <NumberInput source="helium"/>
            <NumberInput source="argon"/>
            <BooleanInput source="moleWightPersent" />
        </SimpleForm>
    </Edit>
);

export default ConditionEdit;
