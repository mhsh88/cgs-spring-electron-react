import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    NumberField,
} from '../../core';
import DatabaseQuestionFilters from './DatabaseQuestionFilters';

const DatabaseQuestionList = props => (
    <List {...props} filters={<DatabaseQuestionFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="metric" />
            <NumberField source="metricPriority" />
            <NumberField source="metricWeight" />
            <TextField source="questionText" />
            <TextField source="standard" />
            <TextField source="subMetric" />
            <NumberField source="subMetricPriority" />
            <NumberField source="subMetricWeight" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default DatabaseQuestionList;
