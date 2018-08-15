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
} from  '../../core';


export const ConditionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <NumberInput source="envTempreture" validate={[ maxValue(70),minValue(-40)]}/>
            <NumberInput source="windSpeed" validate={[maxValue(50),minValue(0)]} />
            <NumberInput source="stationDebi" validate={[maxValue(1000000),minValue(0)]}/>
            <NumberInput source="stationInputTemprature" validate={[required, maxValue(70),minValue(-40)]} />
            <NumberInput source="stationInputPressure" validate={required} />
            <NumberInput source="stationOutputTemprature" validate={[required, maxValue(70),minValue(-40)]}/>
            <NumberInput source="stationOutputPressure"  validate={required}/>
        </SimpleForm>
    </Create>
);

export default ConditionCreate;
