import React from 'react';
import ActionCard from './ActionCard';
import Speakers from './Speakers'
import actionCards from '../js/action-cards'

export default function Details() {
  return (
    <div className="main-content">
        <div className="details-header">
            <h1>
            Have 8 smart people teach you how to design for mobile
            </h1>
        </div>
        <div className="details-card">
            <div className="details-talks">
                If you want to design great mobile experiences, then check out these talks from UXIM14:
                <ul>
                    <li>Luke Wroblewski on current mobile behavior, data, and trends</li>
                    <li>Brad Frost on Atomic Design–building systems from components</li>
                    <li>Cyd Harrell on conducting mobile research, even with small budgets</li>
                    <li>Jason Grigsby on implementing a mobile-first responsive web design process</li>
                    <li>Karen McGrane on publishing content to many devices</li>
                    <li>Nate Schutta on building prototypes using JavaScript</li>
                    <li>Ben Callahan on moving beyond a linear design process</li>
                    <li>Jared Spool on innovations in UX design education and development</li>
                </ul>
            </div>
            <div className="details-card-container">
                {actionCards.map((card, index) => {
                    return <ActionCard actionDetails={ card } key={ index }/>
                })
                }
            </div>
        </div>
        <Speakers />

    </div>
  );
}
