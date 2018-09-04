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
        alignContent: 'right',
        direction:'ltr',
        display:'inline-block'
    },
    selectProperty:{
        alignContent: 'right',
        direction:'rtl',
        display:'inline-block',
        fontFamily: 'IRANSans',
    }
});

class SimpleSelect extends React.Component {
    state = {
        property: '',
        data: '',
        propertyName: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    getGasPropertyName = gasPropertyName => {
         let value = '';
      switch (gasPropertyName) {
          case 'mu':
              value = 'ضریب ژول تامسون';
              // this.setState({propertyName:value});
              return value;
          case 'kappa':
              value ='ضریب کاپا';
              // this.setState({propertyName:value});
              return value;
          case 'w':
              value ='سرعت صوت';
              // this.setState({propertyName:value});
              return value;
          case 'u':
              value ='انرژی درونی';
              // this.setState({propertyName:value});
              return value;
          case 's':
              value ='آنتروپی';
              // this.setState({propertyName:value});
              return value;
          case 'h':
              value ='آنتالپی';
              // this.setState({propertyName:value});
              return value;
          case 'm':
              value ='جرم مولی';
              // this.setState({propertyName:value});
              return value;
          case 'c_p':
              value ='ظرفیت گرمایی در فشار ثابت';
              // this.setState({propertyName:value});
              return value;
          case 'd':
              value ='چگالی';
              // this.setState({propertyName:value});
              return value;
          case 'hhvd':
              value = 'ارزش حرارتی سوخت';
              // this.setState({propertyName:value});
              return value;
          case 'c_v':
              value = 'ظرفیت گرمایی در حجم ثابت';
              // this.setState({propertyName:value});
              return value;
          case 'z':
              value ='ضریب تراکم‌پذیری';
              // this.setState({propertyName:value});
              return value;
          case 't_h':
              value ='دمای هیدرات';
              // this.setState({propertyName:value});
              return value;
          default:
              return value;

      }
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
                        // displayEmpty={true}
                        name="property"
                        className={classes.selectProperty}
                    >
                        {Object.keys(data).map(item =>
                            <MenuItem  style={{ textAlign:'right', fontFamily: 'IRANSans'}} value={data[item]}>{this.getGasPropertyName(item)}</MenuItem>
                        )}
                    </Select>
                    <FormHelperText style={{textAlign:'right', fontFamily: 'IRANSans'}}>خصوصیات</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Select
                        value={Math.round(this.state.property * 1000) /1000}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem style={{ textAlign:'right', fontFamily: 'IRANSans'}} value="" disabled>
                            مقدار
                        </MenuItem>
                        <MenuItem style={{alignContent: 'left', direction:'ltr', display:'inline-block'}} value={Math.round(this.state.property * 1000) /1000}>{Math.round(this.state.property* 1000) /1000}</MenuItem>

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
