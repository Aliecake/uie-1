import React from 'react';

export default function Card(props) {
  console.log(props.actionDetails.text)
  return (
    <div className="info-card speaker-details-col">
        { props.actionDetails.text }
        <a href={props.actionDetails.hyperlink} className="button">
            { props.actionDetails.buttonText }
        </a>
    </div>
  );
}
