import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
        color:'#00BCD4'
    },
});

class CircularDeterminate extends React.Component {
    timer = null;

    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    size={50}
                    value={this.state.completed}
                />
            </div>
        );
    }
}

CircularDeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);