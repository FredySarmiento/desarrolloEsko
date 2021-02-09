import React from 'react';

export const Card = (props) => {
    return (
        <div className="card">
                <div className="card_box">
                    <div className="card_front">
                        <h2>{props.title_card}</h2>
                    </div>
                    <div className="card_back">
                    <p> {props.content_card} </p>
                    </div>             
                </div>
        </div>
    )
}
