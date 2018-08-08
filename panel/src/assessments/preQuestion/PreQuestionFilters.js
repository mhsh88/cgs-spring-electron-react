import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const PreQuestionFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="text" />
    </Filter>
);

export default PreQuestionFilters;
