import React from 'react'
import { useDispatch } from 'react-redux'
import actionCreators from './state/index'
const Bank = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ margin: "20px" }}>Deposit/Withdraw money</h2>
            <button className="btn btn-primary"onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} >-</button>
            <span style={{ margin: "10px" }}>Update</span>
            <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
        </div>
    )
}

export default Bank