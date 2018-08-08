import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import { Link } from 'react-router-dom';
import { translate } from '../core';

const styles = {
    titleLink: { textDecoration: 'none', color: '#000' },
    card: { borderLeft: 'solid 4px #f44336', flex: 1, marginRight: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#f44336' },
};

const location = { pathname: 'reviews', query: { filter: JSON.stringify({ status: 'pending' }) } };

export default translate(({ nb, translate }) => (
    <Card style={styles.card}>
        <CommentIcon style={styles.icon} />
        <CardTitle title={<Link to={location} style={styles.titleLink}>{nb}</Link>} subtitle={translate('pos.dashboard.pending_reviews')} />
    </Card>
));
