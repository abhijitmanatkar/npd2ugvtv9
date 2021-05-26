const OPEN_TASK8_MODAL = "scratch-gui/task8-modal/OPEN_TASK8_MODAL";
const CLOSE_TASK8_MODAL = "scratch-gui/task8-modal/CLOSE_TASK8_MODAL";

const initialState = {
    isOpen: false,
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case OPEN_TASK8_MODAL:
            return { isOpen: true };
        case CLOSE_TASK8_MODAL:
            return { isOpen: false };
        default:
            return state;
    }
};

const openTask8Modal = () => ({ type: OPEN_TASK8_MODAL });
const closeTask8Modal = () => ({ type: CLOSE_TASK8_MODAL });

export {
    reducer as default,
    initialState as task8ModalInitialState,
    openTask8Modal,
    closeTask8Modal,
};
