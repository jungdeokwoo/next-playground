import React from 'react'
import { useSelector } from 'react-redux'

const SecondComponent = () => {
  const number = useSelector(state => state.number)
  return <div>Third number:{number}</div>
}

export default SecondComponent
