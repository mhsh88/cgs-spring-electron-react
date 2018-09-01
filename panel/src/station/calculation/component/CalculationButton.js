import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import './CalculationButton.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        backgroundColor: '#00BCD4',
        color: 'white',
        fontFamily:'IRANSans',
        fontStyle:'normal',
        fontWeight:'500',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function IconLabelButtons(props) {
    const { classes, onClick } = props;
    return (
        <div onClick={onClick}>
            <Button size="large" variant="contained" className={classes.button} >
                محاسبه نتایج
                <Icon className={classes.leftIcon}>send</Icon>
            </Button>
        </div>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default withStyles(styles)(IconLabelButtons);
