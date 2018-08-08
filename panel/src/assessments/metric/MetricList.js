import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    NumberField,
} from '../../core';
import MetricFilters from './MetricFilters';

const MetricList = props => (
    <List {...props} filter={{ deleted_eq: 0 }} filters={<MetricFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="text" />
            <NumberField source="priority" />
            <NumberField source="weight" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default MetricList;
