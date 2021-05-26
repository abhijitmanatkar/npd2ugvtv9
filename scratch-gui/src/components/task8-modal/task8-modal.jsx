import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './task8-modal.css';

class Task8ModalComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Open modal after 30 seconds from start
        setTimeout(this.props.openTask8Modal, 30000);
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                onReqestClose={this.props.closeTask8Modal}
                overlayClassName={styles.modalOverlay}
            >
                <h1> Modal Title</h1>
                <p> Modal content message </p>
                <button onClick={this.props.closeTask8Modal}>Ok</button>
                <button onClick={this.props.closeTask8Modal}>Close</button>
            </ReactModal>
        );
    }
}

Task8ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    openTask8Modal: PropTypes.func,
    closeTask8Modal: PropTypes.func
}

export default Task8ModalComponent;