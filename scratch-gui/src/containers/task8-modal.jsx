import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {openTask8Modal, closeTask8Modal} from '../reducers/task8-modal';

import Task8ModalComponent from '../components/task8-modal/task8-modal.jsx'

const Task8Modal = (props) => (
    <Task8ModalComponent
        {...props}
    />
);

Task8Modal.propTypes = {
    isOpen: PropTypes.bool,
    openTask8Modal: PropTypes.func,
    closeTask8Modal: PropTypes.func
};

const mapStateToProps = state => ({
    isOpen: state.scratchGui.task8Modal.isOpen
});

const mapDispatchToProps = dispatch => ({
    openTask8Modal: () => {
        dispatch(openTask8Modal());
        setTimeout(() => dispatch(closeTask8Modal()), 10000); // Close modal 10 seconds after opening
    },
    closeTask8Modal: () => dispatch(closeTask8Modal())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Task8Modal);