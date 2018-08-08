import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { cyan500 } from 'material-ui/styles/colors';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import translate from '../../core/i18n/translate';

const styles = {
    button: {
        margin: '10px 0',
    },
    pageInfo: {
        padding: '1.2em',
    },
    mobileToolbar: {
        margin: 'auto',
    },
};

export class QuestionsPagination extends Component {

    range() {
        const input = [];
        const { page, totalPages } = this.props;
        if (isNaN(page)) return input;

        // display page links around the current page
        if (page > 2) {
            input.push('1');
        }
        if (page === 4) {
            input.push('2');
        }
        if (page > 4) {
            input.push('.');
        }
        if (page > 1) {
            input.push(page - 1);
        }
        input.push(page);
        if (page < totalPages) {
            input.push(page + 1);
        }
        if (page === (totalPages - 3)) {
            input.push(totalPages - 1);
        }
        if (page < (totalPages - 3)) {
            input.push('.');
        }
        if (page < (totalPages - 1)) {
            input.push(totalPages);
        }

        return input;
    }

    prevPage = (event) => {
        event.stopPropagation();
        if (this.props.page === 1) {
            throw new Error(this.props.translate('hcore.navigation.page_out_from_begin'));
        }
        this.props.setPage(this.props.page - 1);
    };

    nextPage = (event) => {
        event.stopPropagation();
        /*if (this.props.page > this.props.totalPages || 1) {
            throw new Error(this.props.translate('hcore.navigation.page_out_from_end'));
        }*/
        this.props.setPage(this.props.page + 1);
    };

    gotoPage = (event) => {
        event.stopPropagation();
        const page = event.currentTarget.dataset.page;
        /*if (page < 1 || page > this.props.totalPages || 1) {
            throw new Error(this.props.translate('hcore.navigation.page_out_of_boundaries', { page }));
        }*/
        this.props.setPage(page);
    };

    renderPageNums() {
        return this.range().map((pageNum, index) => (
            (pageNum === '.') ?
                <span
                    key={`hyphen_${index}`}
                    style={{ padding: '1.2em' }}
                >
                    &hellip;
                </span> :
                <FlatButton
                    className="page-number"
                    key={pageNum}
                    label={pageNum}
                    data-page={pageNum}
                    onClick={this.gotoPage}
                    primary={pageNum !== this.props.page}
                    style={styles.button}
                />
        ));
    }

    render() {
        const { page, totalPages, translate, width } = this.props;

        return width === 1 ? (
            <Toolbar>
                <ToolbarGroup style={styles.mobileToolbar}>
                    {page > 1 &&
                        <IconButton onClick={this.prevPage}>
                            <ChevronLeft color={cyan500} />
                        </IconButton>
                    }
                    {page !== totalPages &&
                        <IconButton onClick={this.nextPage}>
                            <ChevronRight color={cyan500} />
                        </IconButton>
                    }
                </ToolbarGroup>
            </Toolbar>
        ) : (
            <Toolbar>
                {totalPages > 1 &&
                <ToolbarGroup>
                    {page > 1 &&
                        <FlatButton className="previous-page" primary key="prev" label={translate('hcore.navigation.prev')} icon={<ChevronLeft />} onClick={this.prevPage} style={styles.button} />
                    }
                    {this.renderPageNums()}
                    {page !== totalPages &&
                        <FlatButton className="next-page" primary key="next" label={translate('hcore.navigation.next')} icon={<ChevronRight />} labelPosition="before" onClick={this.nextPage} style={styles.button} />
                    }
                </ToolbarGroup>
                }
            </Toolbar>
        );
    }
}

QuestionsPagination.propTypes = {
    page: PropTypes.number,
    totalPages: PropTypes.number,
    setPage: PropTypes.func,
    translate: PropTypes.func.isRequired,
    width: PropTypes.number,
};

const enhance = compose(
    pure,
    translate,
    withWidth(),
);

export default enhance(QuestionsPagination);
