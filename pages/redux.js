import FirstComponent from 'components/FirstComponent'
import React from 'react'
import { useSelector } from 'react-redux'

const Redux = () => {
  const number = useSelector(state => state.number)
  console.log(number.number)
  return (
    <>
      <div>number:{number}</div>
      <FirstComponent></FirstComponent>
    </>
  )
}

export default Redux
