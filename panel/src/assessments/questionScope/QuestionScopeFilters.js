import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const QuestionScopeFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="value" />
    </Filter>
);

export default QuestionScopeFilters;
