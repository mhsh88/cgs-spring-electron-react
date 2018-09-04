import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from  '../../core';
import {TemperatureField} from "../../components/cgsbase/TemperatureField";
import {PressureField} from "../../components/cgsbase/PressureField";
import {DebiField} from "../../components/cgsbase/DebiField";


export const ConditionList = props => (
    <List {...props}>
        <Datagrid>
            <TemperatureField source="envTempreture"/>
            <TextField source="windSpeed" />
            <DebiField source="stationDebi" />
            <TemperatureField source="stationInputTemprature" />
            <PressureField source="stationInputPressure" />
            <TemperatureField source="stationOutputTemprature" />
            <PressureField source="stationOutputPressure"/>
            <ColumnActions/>
        </Datagrid>
    </List>
);

export default ConditionList;