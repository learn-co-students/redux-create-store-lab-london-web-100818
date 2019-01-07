export default function createStore(reducer) {
  
    let state;

    const dispatch = (action = { type: '@@INIT' }) => {
      state = reducer(state, action )
      render()
    }

    const getState = () => {
      return state
    }
   
    dispatch({ type: '@@INIT' })

    return {  dispatch,getState}
  }


function render() {
  const container = document.getElementById('container');

}
