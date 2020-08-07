import React from 'react'

export default function SpeakerCard(props) {
    return (
        <>
        <div className="speaker-details-col">
            <div className="headshot">
            <img src={`${ props.speaker.photo }`} alt={ props.speaker.name } className="speaker-photo"/>
                <div className="speaker-name">
                    { props.speaker.name }
                </div>
                <div className="speaker-title">
                    { props.speaker.title }
                </div>
            </div>
            <div className="speaker-details-col speaker-desc">
                { props.speaker.description }
            </div>

        </div>

        
        </>
    )
}
