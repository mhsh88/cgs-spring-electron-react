import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreHorizontalIcon from 'material-ui/svg-icons/navigation/more-horiz';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { CreateMenuItem, ShowMenuItem, EditMenuItem, DeleteMenuItem, RetrieveMenuItem } from '../menuItem';
import { CreateIconButton, ShowIconButton, EditIconButton, DeleteIconButton, RetrieveIconButton } from '../button';

const actionsStyle = {
    display: 'inline-block',
};

const ColumnActions = ({ basePath = '', record = {}, hasCreate = false, hasShow = true, hasEdit = true, hasDelete = true, hasRetrieve = true, width }) => (
    width !== 1 ?
        <div style={{ textAlign: 'right' }} >
            {hasCreate && <CreateIconButton basePath={basePath} record={record} style={actionsStyle} />}
            {hasShow && <ShowIconButton basePath={basePath} record={record} style={actionsStyle} />}
            {hasEdit && <EditIconButton basePath={basePath} record={record} style={actionsStyle} />}
            {hasDelete && !record.deleted && <DeleteIconButton basePath={basePath} record={record} style={actionsStyle} />}
            {hasRetrieve && record.deleted && <RetrieveIconButton basePath={basePath} record={record} style={actionsStyle} />}
        </div> :
        <div style={{ textAlign: 'right' }}>
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreHorizontalIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                {hasCreate && <CreateMenuItem basePath={basePath} record={record} />}
                {hasShow && <ShowMenuItem basePath={basePath} record={record} />}
                {hasEdit && <EditMenuItem basePath={basePath} record={record} />}
                {hasDelete && !record.deleted && <DeleteMenuItem basePath={basePath} record={record} />}
                {hasRetrieve && record.deleted && <RetrieveMenuItem basePath={basePath} record={record} />}
            </IconMenu>
        </div>
);

ColumnActions.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
    hasCreate: PropTypes.bool,
    hasRetrieve: PropTypes.bool,
    hasShow: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasDelete: PropTypes.bool,
    width: PropTypes.number,
};

const enhance = compose(
    withWidth(),
    muiThemeable(),
);

export default enhance(ColumnActions);
