import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import AppBarMobile from './AppBarMobile';

const ViewTitle = ({ title, actionsMenu, width }) => (
    width === 1 ?
        <AppBarMobile title={title} actionsMenu={actionsMenu} /> :
        <CardTitle title={title} className="title" />
);

ViewTitle.propTypes = {
    title: PropTypes.object,
    actionsMenu: PropTypes.node,
    width: PropTypes.number,
};

export default ViewTitle;
