import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {NumberField, TextField} from "../../../core/mui/field";
import { SimpleShowLayout } from "../../../core";

const styles = theme => ({
    root: {
        width: '100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        fontFamily: 'IRANSans',
        fontStyle: 'normal'
    },
    childPaper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        fontFamily: 'IRANSans',
        fontStyle: 'normal'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontFamily: 'IRANSans',
        fontStyle: 'normal'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    typography:{
        fontFamily: 'IRANSans',
        fontStyle: 'normal'
    },
    numberField:{
    textAlign: 'left',
    }
});

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
        childExpanded: null,
        isLoading: this.props.isLoading
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleChildChange = panel => (event, expanded) => {
        this.setState({
            childExpanded: expanded ? panel : false,
        });
    };


    expansionPanelName(name){

        switch(name) {
            case 'userInputTemperature':
                return "محاسبات با اطلاعات ورودی";
            case 'hydrateTemperature':
                return "محاسبات با دمای هیدارت";

            case 'beforeHeater':
                return "خط لوله قبل از گرم‌کن";
            case 'heater':
                return "اطلاعات گرم‌کن";
            case 'afterHeater':
                return "خط لوله بعد از گرم‌کن";
            case 'collector':
                return "کلکتور";
            case 'runs':
                return "ران";
            case 'regulator':
                return "رگولاتور";
            case 'input':
                return "شرایط ابتدا";
            case 'output':
                return "شرایط انتها";
            case 'insulationConsumption':
                return "تلفات حرارتی با استفاده از عایق";
            case 'noInsulationConsumption':
                return "تلفات حرارتی بدون استفاده از عایق";
            case 'heaters':
                return "گرم‌کن‌ها";
            case 'consumption':
                return "مصرف";
            case 'insulationLoss':
                return "تلفات حرارتی با استفاده از عایق";
            case 'noInsulationLoss':
                return "تلفات حرارتی بدون استفاده از عایق";
            case 'loss':
                return "تلفات";
            default:
                return "";
        }

    }

    render() {
        const {classes} = this.props;
        const {expanded, childExpanded} = this.state;
        const {data} = this.props.data;

        if (data && Object.keys(data[0]).length > 0) {
            return (
                <div className={classes.root}>
                    {
                        Object.keys(data[0]).map(((items,index) =>
                            <Paper className={classes.paper} elevation={1}>
                                <Typography className={classes.typography} variant="headline" component="h3">
                                    {this.expansionPanelName(items)}
                                </Typography>
                                <Typography style={{ color: 'white'}} component="p">
                                    نامرئی
                                </Typography>
                                {
                                    Object.keys(data[0][items]).map((calitems, calindex) =>
                                        <ExpansionPanel expanded={expanded === `panel.${items}.${calitems}`}
                                                        onChange={this.handleChange(`panel.${items}.${calitems}`)}>
                                            <ExpansionPanelSummary>
                                                <Typography
                                                    className={classes.heading}>{this.expansionPanelName(calitems)}</Typography>
                                                <Typography className={classes.secondaryHeading}>
                                                    {calitems}
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                    Aliquam eget
                                                    maximus est, id dignissim quam.
                                                </Typography>
                                            </ExpansionPanelDetails>

                                            {
                                                Object.keys(data[0][items][calitems]).map((stationItems) =>
                                                    typeof data[0][items][calitems][stationItems] === 'object' || data[0][items][calitems][stationItems] && Object.keys(data[0][items][calitems][stationItems]).length>1 ?
                                                    <Paper className={classes.childPaper} elevation={2}>
                                                    <ExpansionPanel expanded={childExpanded === `panel.${items}.${calitems}.${stationItems}`}
                                                                    onChange={this.handleChildChange(`panel.${items}.${calitems}.${stationItems}`)}>
                                                        <ExpansionPanelSummary>
                                                            <Typography
                                                                className={classes.heading}>{this.expansionPanelName(stationItems)}</Typography>
                                                            <Typography className={classes.secondaryHeading}>
                                                                {stationItems}
                                                            </Typography>
                                                        </ExpansionPanelSummary>
                                                        <ExpansionPanelDetails>
                                                            <Typography>
                                                                {stationItems}
                                                            </Typography>
                                                        </ExpansionPanelDetails>

                                                    </ExpansionPanel>
                                                    </Paper>
                                                        :
                                                        <Paper className={classes.childPaper} elevation={2}>
                                                            <Typography className={classes.typography} component="p">
                                                                {this.expansionPanelName(stationItems) + ": "}
                                                                <NumberField className={classes.numberField} record={data[0][items][calitems]} source={stationItems}/>
                                                            </Typography>

                                                        </Paper>
                                                )
                                            }
                                        </ExpansionPanel>

                                    )

                                }
                            </Paper>

                        ))
                    }


                </div>

            )
        }
        else {

            return(<div/>);

        }
    }

}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
    isLoading: PropTypes.bool
};

export default withStyles(styles)(ControlledExpansionPanels);
