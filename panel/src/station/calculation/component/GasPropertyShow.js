import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        property: null,
        data: null
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const data = this.props.data;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="age-label-placeholder">

                    </InputLabel>
                    <Select
                        value={this.state.property}
                        onChange={this.handleChange}
                        input={<Input name="property" id="age-label-placeholder" />}
                        displayEmpty
                        name="property"
                        className={classes.selectEmpty}
                    >
                        {Object.keys(data).map(item =>
                            <MenuItem value={data[item]}>{item}</MenuItem>
                        )}
                    </Select>
                    <FormHelperText style={{textAlign:'right', fontFamily: 'IRANSans'}}>خصوصیات</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.property}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem style={{ textAlign:'right', fontFamily: 'IRANSans'}} value="" disabled>
                            مقدار
                        </MenuItem>
                        <MenuItem style={{alignContent: 'left'}} value={this.state.property}>{this.state.property}</MenuItem>

                    </Select>
                    <FormHelperText style={{ textAlign:'right', fontFamily: 'IRANSans'}}>مقدار</FormHelperText>
                </FormControl>

            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
