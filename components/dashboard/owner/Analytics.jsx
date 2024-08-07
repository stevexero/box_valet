import React from 'react';

const Analytics = ({ stats }) => {
  return (
    <div>
      <h1>Analytics Dashboard Soon</h1>
      <p>Page Views: {stats.pageviews && stats.pageviews.value}</p>
      <p>Visitors: {stats.visitors && stats.visitors.value}</p>
      <p>Visits: {stats.visits && stats.visits.value}</p>
    </div>
  );
};

export default Analytics;
