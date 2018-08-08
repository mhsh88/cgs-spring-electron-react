import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
} from '../../core';
import SubMetricFilters from './SubMetricFilters';

const SubMetricList = props => (
    <List {...props} filters={<SubMetricFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="text" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default SubMetricList;
