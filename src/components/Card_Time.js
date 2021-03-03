import React from 'react'

export const Card_Time = (props) => {
    return (
        <div className="timeline">
            <div className="timeline_text">
                <div className="timeline_text-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="timeline_text-content">
                    <p className="timeline_text_p">
                        {props.textbody}
                    </p>
                    <img className="timeline_img"src={props.urlimg} />
                </div>
            </div>
        </div>
    )
}
