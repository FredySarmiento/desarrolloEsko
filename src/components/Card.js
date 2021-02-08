import React from 'react';

export const Card = (props) => {
    return (
        <>
            <div className="card_caja">
                <h2>{props.title_card}</h2>
                <p> {props.content_card} </p>
            </div>
        </>
    )
}
