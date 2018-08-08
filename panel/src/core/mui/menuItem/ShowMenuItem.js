import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import ImageEye from 'material-ui/svg-icons/image/remove-red-eye';
import linkToRecord from '../../util/linkToRecord';
import translate from '../../i18n/translate';

const ShowMenuItem = ({ basePath = '', label = 'hcore.action.show', record = {}, translate }) => (
    <MenuItem
        leftIcon={<ImageEye />}
        primaryText={translate(label)}
        containerElement={<Link to={`${linkToRecord(basePath, record.id)}/show`} />}
    />
);

ShowMenuItem.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    translate: PropTypes.func.isRequired,
};

const enhance = compose(
    shouldUpdate((props, nextProps) => (
        ((props.record && props.record.id !== nextProps.record.id) || props.basePath !== nextProps.basePath) ||
        (props.record === null && nextProps.record !== null)
    )),
    translate,
);

export default enhance(ShowMenuItem);
