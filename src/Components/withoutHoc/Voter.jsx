import React from 'react'
import './Voter.css'

export default function Voter(props) {
    return (
        <div className="main">
            <div>{props.votes}</div>
            <div>{props.name}</div>
            <div onClick={props.vote} className="click">Click Here</div>
        </div>
    )
}
