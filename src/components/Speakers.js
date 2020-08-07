import React from 'react'
import ActionCard from './ActionCard'
import SpeakerCard from './SpeakerCard'
import speakers from '../js/speakers'

export default function Speakers() {

    return (
        <>
            <h2>
                Here are the full descriptions of the 8 UXIM14 talks:
            </h2>
            <div className="speakers-container">
                {/* loop list of speakers to create speaker cards */}
                {speakers.map((speaker, index) => {
                   return <SpeakerCard speaker={ speaker } />
                })}
                <ActionCard className="speaker-details-col"/>
            </div>
        </>
    )
}
