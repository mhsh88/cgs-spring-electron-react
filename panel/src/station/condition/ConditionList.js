import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from  '../../core';


export const ConditionList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="envTempreture" />
            <TextField source="windSpeed" />
            <TextField source="stationDebi" />
            <TextField source="stationInputTemprature" />
            <TextField source="stationInputPressure" />
            <TextField source="stationOutputTemprature" />
            <TextField source="stationOutputPressure"/>
        </Datagrid>
    </List>
);

export default ConditionList;