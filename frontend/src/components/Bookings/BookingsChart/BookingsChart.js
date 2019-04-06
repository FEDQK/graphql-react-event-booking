import React from 'react';
import { Bar as BarChart } from 'react-chartjs';

import './BookingsChart.css';

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 15,
  },
  Normal: {
    min: 15,
    max: 50,
  },
  Expensive: {
    min: 50,
    max: 1000000,
  },
};

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  Object.keys(BOOKINGS_BUCKETS).forEach(key => {
    const filteredBookingsCount = props.bookings.filter(
      bookingData =>
        bookingData.event.price >= BOOKINGS_BUCKETS[key].min &&
        bookingData.event.price < BOOKINGS_BUCKETS[key].max,
    ).length;
    values.push(filteredBookingsCount);
    chartData.labels.push(key);
    chartData.datasets.push({
      // label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: values,
    });
    values = [...values];
    values[values.length - 1] = 0;
  });

  return (
    <div className="chart-container">
      <BarChart data={chartData} />
    </div>
  );
};

export default bookingsChart;
