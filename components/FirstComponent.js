import React, { useState } from 'react'
import SecondComponent from './SecondComponent'
import { useDispatch } from 'react-redux'
import { amountNum, decreaseNum, increaseNum } from 'redux/counterActions'

const FirstComponent = () => {
  const [inputNum, setInputNum] = useState(0)
  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch(increaseNum())
  }

  const decreaseHandler = () => {
    dispatch(decreaseNum())
  }

  const amountHandler = () => {
    dispatch(amountNum(parseInt(inputNum)))
  }

  const inputHandler = ({ target }) => {
    setInputNum(target.value)
  }

  return (
    <>
      <div>second Number:</div>
      <button onClick={addHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      <button onClick={amountHandler}>amount</button>
      <input type="text" onChange={inputHandler} defaultValue="0" />
      <SecondComponent />
    </>
  )
}
export default FirstComponent
