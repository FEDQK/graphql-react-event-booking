import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import './Event.css';

export default class EventsPage extends Component {
  state = {
    creating: false,
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onConfirm={this.modalConfirmHandler}
            onCancel={this.modalCancelHandler}
          >
            <p>Modal content</p>
          </Modal>
        )}
        <div className="events-control">
          <p>Just create an event!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create event
          </button>
        </div>
      </React.Fragment>
    );
  }
}
