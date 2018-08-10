import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import CityGateStationFilters from './CityGateStationFilters';

const CityGateStationList = props => (
    <List {...props} filters={<CityGateStationFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="user.id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="state" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />

            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default CityGateStationList;
