import axios from "axios";
// const 
const dataInitial = {
  array: []
}

//types
const get_data_success = "get_data_success";
// Reducer
export default function reducerProducts(state = dataInitial, action = {}) {
  switch (action.type) {
    case get_data_success:
      return { ...state, array: action.payload }
    default:
      return state;
  }
}

// Actions 
export const getProductsAction = () => async (dispatch, getState) => {
  try {

    const result = await axios.get(process.env.REACT_APP_API + 'products');
    dispatch({
      type: get_data_success,
      payload: result.data
    })
  } catch (error) {

  }
}