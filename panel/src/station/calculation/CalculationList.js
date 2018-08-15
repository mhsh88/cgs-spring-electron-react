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
            <ReferenceField label="Station" source="cityGateStation.id" reference="citygatestations">
                <TextField source="city" />
            </ReferenceField>
            <ReferenceField label="Condition" source="condition.id" reference="conditions">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="Natural Gas" source="gas.id" reference="gass">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export default CalculationList;