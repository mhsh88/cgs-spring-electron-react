import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import StandardTitle from './StandardTitle';

const StandardDetails = props => (
    <Show title={<StandardTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="text" />
        </SimpleShowLayout>
    </Show>
);

export default StandardDetails;
