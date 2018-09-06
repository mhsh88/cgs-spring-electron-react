import React from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import { CardActions } from 'material-ui/Card';
import { ListButton, EditButton, DeleteButton, RetrieveButton, RefreshButton } from '../button';
import { ListMenuItem, EditMenuItem, DeleteMenuItem, RetrieveMenuItem, RefreshMenuItem } from '../menuItem';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const ShowActions = ({ basePath, resource, data, hasDelete, hasRetrieve, hasEdit, refresh, width, update }) => (

    width !== 1 ?
        (<CardActions style={cardActionStyle}>
            {data = data ? data :  console.log(update.meta)}
            {hasEdit && <EditButton basePath={basePath} record={data} />}
            <ListButton basePath={basePath} />
            {hasDelete && !data.deleted && <DeleteButton basePath={basePath} record={data} />}
            {hasRetrieve && data.deleted && <RetrieveButton basePath={basePath} record={data} />}
            <RefreshButton refresh={refresh} />
        </CardActions>) :
        (<IconMenu
            iconButtonElement={
                <IconButton><MoreVerticalIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            {hasEdit && <EditMenuItem basePath={basePath} record={data} />}
            <ListMenuItem basePath={basePath} />
            {hasDelete && !data.deleted && <DeleteMenuItem basePath={basePath} record={data} />}
            {hasRetrieve && data.deleted && <RetrieveMenuItem basePath={basePath} record={data} />}
            <RefreshMenuItem refresh={refresh} />
        </IconMenu>)
);

ShowActions.propTypes = {
    basePath: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    hasDelete: PropTypes.bool.isRequired,
    hasRetrieve: PropTypes.bool.isRequired,
    hasEdit: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    update: PropTypes.func,
};

export default withWidth()(ShowActions);
