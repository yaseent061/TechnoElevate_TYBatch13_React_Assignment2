import React from 'react'
import withCounter from '../hoc/withCounter'

function Go(props) {
    return (
        <div className="main">
            <div>{props.count}</div>
            <div>Go</div>
            <div onClick={props.vote} className="click">Click Here</div>
        </div>
    )
}

export default withCounter(Go)