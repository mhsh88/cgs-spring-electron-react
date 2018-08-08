import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const QuestionFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="text" />
    </Filter>
);

export default QuestionFilters;
