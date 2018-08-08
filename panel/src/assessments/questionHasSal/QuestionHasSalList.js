import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    NumberField,
} from '../../core';
import QuestionHasSalFilters from './QuestionHasSalFilters';

const QuestionHasSalList = props => (
    <List {...props} filters={<QuestionHasSalFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="sal.value" />
            <TextField source="standard.text" />
            <TextField source="metric.text" />
            <TextField source="subMetric.text" />
            <TextField source="preQuestion.text" />
            <TextField source="question.text" />
            <NumberField source="priority" />
            <NumberField source="weight" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default QuestionHasSalList;
