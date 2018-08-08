import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile, GET_LIST, GET_MANY } from '../core';

import MonthlyRevenue from './MonthlyRevenue';
import NbNewOrders from './NbNewOrders';
import PendingReviews from './PendingReviews';
import NewCustomers from './NewCustomers';
import restClient from '../restClient';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        const d = new Date();
        d.setDate(d.getDate() - 30);
        this.setState({ revenue: 3000000 });
        this.setState({ nbNewOrders: 40 });
        this.setState({ nbNewCustomers: 2000 });
        this.setState({ nbPendingReviews: 250 });
    }

    render() {
        const {
            nbNewCustomers,
            nbNewOrders,
            nbPendingReviews,
            revenue,
        } = this.state;
        const { width } = this.props;
        return (
            <div>
                {width === 1 && <AppBarMobile title="Posters Galore Admin" />}
                <div style={styles.flex}>
                    <div style={styles.leftCol}>
                        <div style={styles.flex}>
                            <MonthlyRevenue value={revenue} />
                            <NbNewOrders value={nbNewOrders} />
                        </div>
                    </div>
                    <div style={styles.rightCol}>
                        <div style={styles.flex}>
                            <PendingReviews nb={nbPendingReviews} />
                            <NewCustomers nb={nbNewCustomers} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    width: PropTypes.number,
};

export default withWidth()(Dashboard);
