import { AMOUNT_NUM, DECREASE_NUM, INCREASE_NUM } from './counterTypes'

type State = {
  number: number
}

const initialState = {
  number: 0,
}

const counterReducer = (
  state: State = initialState,
  action: { type: string; payload?: number },
) => {
  switch (action.type) {
    case INCREASE_NUM:
      return { ...state, number: state.number + 1 }
    case DECREASE_NUM:
      return { ...state, number: state.number - 1 }
    case AMOUNT_NUM:
      return { ...state, number: state.number + action.payload }
    default:
      return state
  }
}

export default counterReducer
