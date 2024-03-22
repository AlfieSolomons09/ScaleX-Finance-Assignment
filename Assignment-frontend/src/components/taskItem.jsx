import React from 'react'

const TaskItem = ({ price, volume }) => {
    return (
        <div className="task">
            <div style={{
                display: 'flex',
            }}>
                <h2>Price: </h2>
                <h4>h6:</h4>
                <p>{price.h6}</p>
                <h4>h24:</h4>
                <p>{price.h24}</p>
                <h4>h1:</h4>
                <p>{price.h1}</p>
                <h4>m5:</h4>
                <p>{price.m5}</p>
                
                <div></div>
                <h2>Volume: </h2>
                <h4>h6:</h4>
                <p>{volume.h6}</p>
                <h4>h24:</h4>
                <p>{volume.h24}</p>
                <h4>h1:</h4>
                <p>{volume.h1}</p>
                <h4>m5:</h4>
                <p>{volume.m5}</p>
            </div>
        </div>
    )
}

export default TaskItem;