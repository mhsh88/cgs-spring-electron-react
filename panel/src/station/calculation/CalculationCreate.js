import React from 'react';
import {required, SelectInput,ReferenceField, maxLength, Create, Edit, SimpleForm, ReferenceInput, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, NumberInput } from  '../../core';
import Pipe from '../../svgfile/pipe/pipe(1).svg';
import FourWay from '../../svgfile/fourWay/pipe(2).svg';

const validateCalculationCreation = (values) => {
    if (!values.cityGateStation) {
        return 'The Station is required';
    }
    if (!values.gas) {
        return 'The age is required';
    }
    if (!values.age) {
        return 'Condition is required';
    }
    return [];
};
export const CityGateStationCreate = props => <Create {...props} >
    <SimpleForm>
        <DisabledInput source="id"/>
        <ReferenceInput  source="cityGateStation.id" reference="citygatestations" validate={required}
                        allowEmpty>
            <SelectInput optionText="city"/>
        </ReferenceInput>
        <ReferenceInput  source="condition.id" reference="conditions" validate={required} allowEmpty>
            <SelectInput optionText="id"/>
        </ReferenceInput>
        <ReferenceInput source="gas.id" reference="gass" validate={required} allowEmpty>
            <SelectInput source="name"/>
        </ReferenceInput>
    </SimpleForm>
</Create>;

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    display: 'flex',
    alignItems: 'center'
};

export default CityGateStationCreate;
