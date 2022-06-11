import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './state/index'

const Bank = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2 style={{ margin: "20px" }}>Deposit/Withdraw money</h2>
            <button className="btn btn-primary"onClick={()=>withdrawMoney(100)} >-</button>
            <span style={{ margin: "10px" }}>Update</span>
            <button className="btn btn-primary" onClick={()=>depositMoney(100)}>+</button>
        </div >
    )
}

export default Bank