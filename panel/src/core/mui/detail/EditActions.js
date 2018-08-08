import React from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import { CardActions } from 'material-ui/Card';
import { ListButton, ShowButton, DeleteButton, RetrieveButton, RefreshButton } from '../button';
import { ListMenuItem, ShowMenuItem, DeleteMenuItem, RetrieveMenuItem, RefreshMenuItem } from '../menuItem';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const EditActions = ({ basePath, resource, data, hasDelete, hasRetrieve, hasShow, refresh, width }) => (
    width !== 1 ?
        (<CardActions style={cardActionStyle}>
            {hasShow && <ShowButton basePath={basePath} record={data} />}
            <ListButton basePath={basePath} />
            {hasDelete && data && !data.deleted && <DeleteButton basePath={basePath} record={data} />}
            {hasRetrieve && data && data.deleted && <RetrieveButton basePath={basePath} record={data} />}
            <RefreshButton refresh={refresh} />
        </CardActions>) :
        (<IconMenu
            iconButtonElement={
                <IconButton><MoreVerticalIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            {hasShow && <ShowMenuItem basePath={basePath} record={data} />}
            <ListMenuItem basePath={basePath} />
            {hasDelete && data && !data.deleted && <DeleteMenuItem basePath={basePath} record={data} />}
            {hasRetrieve && data && data.deleted && <RetrieveMenuItem basePath={basePath} record={data} />}
            <RefreshMenuItem refresh={refresh} />
        </IconMenu>)
);

EditActions.propTypes = {
    basePath: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    hasDelete: PropTypes.bool.isRequired,
    hasRetrieve: PropTypes.bool.isRequired,
    hasShow: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
};

export default withWidth()(EditActions);
