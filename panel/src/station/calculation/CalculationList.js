import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,
} from  '../../core';

export const CalculationList = props => (
    <List {...props}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} >

            <TextField source="id"/>
            <ReferenceField source="cityGateStation.id" reference="citygatestations">
                <TextField source="city" />
            </ReferenceField>
            <ReferenceField source="condition.id" reference="conditions">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="gas.id" reference="gass">
                <TextField source="name" />
            </ReferenceField>
            <ColumnActions />
        </Datagrid>
    </List>
);

export default CalculationList;