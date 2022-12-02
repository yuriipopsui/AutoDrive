const SET_LOGIN = 'SET_LOGIN';


const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  userLogin: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, ...action.data, isAuth: true }
    default:
      return { ...state }
  }
}

