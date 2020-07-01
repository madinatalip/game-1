const SIZE_x = 'SIZE_x'
const SIZE_y = 'SIZE_y'
const SET_STATE = 'SET_STATE'

const initialState = {
  size: {
    x: 5,
    y: 5
  },
  array: new Array(25).fill(null).map((it, index) => {
    return {
      id: index + 1,
      stat: 'free'
    }
  }),
  tid: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIZE_x:
      return {
        ...state,
        size: { ...state, x: [action.x]}
      }
    case SIZE_y:
      return {
        ...state,
        size: { ...state, y: action.y }
      }
        case SET_STATE:
      return {
        ...state,
        array: state.array.map((it) => {
          return {
            ...it,
            stat: it.id === action.id ? action.st : it.stat
          }
        }),
                 }
    default:
      return state
  }
}

export function setSizeone(x){
  return { type: SIZE_x, x }
}

export function setSizetwo(y) {
  return { type: SIZE_y, y }
}

export function updateState(id, st, tid) {
  return { type: SET_STATE, id, st, tid}
}
