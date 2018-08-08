import React from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import { CardActions } from 'material-ui/Card';
import { ListButton } from '../button';
import { ListMenuItem } from '../menuItem';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const CreateActions = ({ basePath, width }) => (
    width !== 1 ?
        (<CardActions style={cardActionStyle}>
            <ListButton basePath={basePath} />
        </CardActions>) :
        ((<IconMenu
            iconButtonElement={
                <IconButton><MoreVerticalIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            <ListMenuItem basePath={basePath} />
        </IconMenu>))
);

CreateActions.propTypes = {
    basePath: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

export default withWidth()(CreateActions);
