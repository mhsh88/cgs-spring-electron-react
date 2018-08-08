import { pinkA400 } from 'material-ui/styles/colors';

const RowStyle = (record) => {
    if (record.deleted) return { textDecoration: 'line-through', color: '#f50057' };
    return {};
};

export default RowStyle;
