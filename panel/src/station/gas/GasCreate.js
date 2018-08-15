import React from 'react';
import {SelectInput, minValue, maxValue, maxLength,required, Create, Edit, SimpleForm,ReferenceInput, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, DateField, EditButton, NumberInput, BooleanInput } from  '../../core';


export const GasCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput source="name" validate={required}/>
            <NumberInput source="nitrogen" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="carbonDioxide" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="methan" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="ethane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="propane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="nButane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="isoButane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="nPentane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="isoPentane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="hexane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="heptane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="octane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="nonane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="decane" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="hydrogen" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="oxygen" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="carbonMonoxide" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="water" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="hydrogenSulfide" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="helium" validate={[required, maxValue(100), minValue(0)]}/>
            <NumberInput source="argon" validate={[required, maxValue(100), minValue(0)]}/>
            <BooleanInput source="moleWightPersent" />
        </SimpleForm>
    </Create>
);

export default GasCreate;
