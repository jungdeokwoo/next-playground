import { AMOUNT_NUM, DECREASE_NUM, INCREASE_NUM } from './counterTypes'

export const increaseNum = () => {
  return {
    type: INCREASE_NUM,
  }
}

export const decreaseNum = () => {
  return {
    type: DECREASE_NUM,
  }
}

export const amountNum = number => {
  return {
    type: AMOUNT_NUM,
    payload: number,
  }
}
