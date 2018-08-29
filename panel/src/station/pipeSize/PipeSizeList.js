import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField, BooleanField, DeleteButton, NumberField
} from '../../core';


export const PipeSizeList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <NumberField source="outerDiameter"/>
            <NumberField source="wallThickness"/>
            <ColumnActions/>
        </Datagrid>
    </List>
);

export default PipeSizeList;