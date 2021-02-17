import React from 'react'

export const Card_Time = (props) => {
    return (
        <div className="timeline">
            <div className="demo-card democard--step2">
                <div className="head_card">
                    <div className="number_box">
                        <span>{props.number}</span>
                    </div>
                    <h2>{props.title}</h2>
                </div>
                <div className="body_card">
                    <p>
                        {props.textbody}
                    </p>
                    <img src={props.urlimg} />
                </div>
            </div>
        </div>
    )
}
