import { Modal, ModalBody, ModalHeader } from '@windmill/react-ui';
import React, { Component } from 'react';


class WithdrawModal extends Component{
    render(){
        return(
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader>Modal header</ModalHeader>
                <ModalBody>
                    <p>This Is Modal Withdraw</p>
                </ModalBody>
            </Modal>
        )
    }
}

export default WithdrawModal;