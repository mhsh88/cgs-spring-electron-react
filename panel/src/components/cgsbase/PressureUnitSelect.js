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
        // minWidth: 10,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit,
    },
});

class SimpleSelect extends React.Component {

    state = {
        age: 'kPa',
        name: 'kPa',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        style={{alignContent: 'left', textAlign: 'left'}}
                        value={this.state.age}
                        onChange={this.handleChange}
                        onOpen={this.handleChange}
                        onClose={this.handleChange}
                        name="age"
                        autoWidth={true}
                        displayEmpty={false}
                        renderValue={value => `${this.state.age}`}
                    >
                            <MenuItem value={'kPa'}>kPa</MenuItem>
                            <MenuItem value={'MPa'}>MPa</MenuItem>
                        <MenuItem value={'PSI'}>PSI</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

export default withStyles(styles)(SimpleSelect);
