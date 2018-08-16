import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,
} from  '../../core';
export const CityGateStationList = props => (
    <List {...props} >

        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} >

            <TextField source="id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default CityGateStationList;