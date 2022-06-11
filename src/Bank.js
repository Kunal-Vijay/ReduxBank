import React from 'react'

const Bank = () => {
    return (
        <div>
            <h2 style={{ margin: "20px" }}>Deposit/Withdraw money</h2>
            <button className="btn btn-primary">-</button>
            <span style={{ margin: "10px" }}>Update</span>
            <button className="btn btn-primary">+</button>
        </div>
    )
}

export default Bank