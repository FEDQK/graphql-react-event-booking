import React from 'react';

import './BookingList.css';

const bookingList = props => {
  return (
    <ul className="bookings-list">
      {props.bookings.map(booking => {
        return (
          <li key={booking._id} className="bookings-item">
            <div className="bookings-item-date">
              {booking.event.title} -{' '}
              {new Date(booking.createdAt).toLocaleDateString()}
            </div>
            <div className="bookings-item-actions">
              <button
                className="btn"
                onClick={props.onDelete.bind(this, booking._id)}
              >
                Cancel
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default bookingList;
