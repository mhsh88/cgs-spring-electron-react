import React from 'react';
import PropTypes from 'prop-types';
import inflection from 'inflection';
import { translate } from '../../core';

export const PermissionTitleFunction = (choice, translate) => {
    if (choice.name) {
        const keys = choice.name.split('.');
        const resource = translate(`resources.${keys[0]}.name`, {
            smart_count: 2,
            _: inflection.humanize(inflection.pluralize(keys[0])),
        });
        const action = keys[1];
        return translate(`hcore.permission.${action}`, {resource: resource.toLowerCase()});
    }
};

const PermissionTitle = ({ record, translate }) => (
    <span>
        {PermissionTitleFunction(record, translate)}
    </span>
);

PermissionTitle.propTypes = {
    record: PropTypes.object,
    translate: PropTypes.func,
};

export default translate(PermissionTitle);
