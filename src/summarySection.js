
import React from 'react'
import Summary from './summary'
import Total from './total'

export default function SummarySection(props) {
  const { selected } = props;

  const summary = Object.keys(selected)
    .map(key =>
      <Summary
        key={key}
        featureTitle={key}
        selected={selected} /> 
    );

  return (
    <section className="main__summary">
    <h2>Your Cart</h2>
      {summary}
      <Total selected={selected} />
    </section>
  );
}