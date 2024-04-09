import { useReducer, useState, useRef} from 'react'
import DisplayData from './DisplayData'

const NAME = 'updateName'
const YEAR = 'updateEstablishmentYear'
const BUILDING = 'updateBuilding'
const STREET = 'updaetStreet'
const CITY = 'updateCity'
const STATE = 'updateState'
const PINCODE = 'updatePincode'
const LANDMARK = 'updateLandmark'
const COURSES = 'updateCourses'

const initialState = {
  collegeName: "",
  establishmentYear : '',
  Address : {
    building : '',
    street : "",
    city : '',
    state : '',
    pincode : '',
    landmark : ''
  },
  courses : []
}

const callReducer = (state, action) => {

  switch(action.type){
    case NAME : return {...state, collegeName : action.payload}
    case YEAR : return {...state,establishmentYear : action.payload}
    case BUILDING : return {...state, Address : {...state.Address, building : action.payload}}
    case STREET : return {...state, Address : {...state.Address, street : action.payload}}
    case CITY : return {...state, Address : {...state.Address, city : action.payload}}
    case STATE : return {...state, Address : {...state.Address, state : action.payload}}
    case PINCODE : return {...state, Address : {...state.Address, pincode : action.payload}}
    case LANDMARK : return {...state, Address : {...state.Address, landmark : action.payload}}
    case COURSES : return {...state, courses : [action.payload.split(',')]}
    default : return initialState
  }
}
function App() {

  let [state, dispatch] = useReducer(callReducer, initialState )
  let data = useRef([])

  const handleChange = (type , payload) => {
    return dispatch({type, payload})
  }

  const handleSubmit = event => {
    event.preventDefault()
    data.current.push(state)
    dispatch({type : "reset"})
  }

  console.log(data)
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter College Name <input type="text" placeholder='Enter name here' value={state.collegeName} onChange={e => handleChange(NAME, e.target.value)}/></label><br />
        <label>Enter Establishment year <input type="number" placeholder='Enter establishment year here' value={state.establishmentYear} onChange={e => handleChange(YEAR, e.target.value)}/></label><br />
        <label>Enter College Address
        <input type="text" placeholder='Enter building name' value={state.Address.building} onChange={e => handleChange(BUILDING, e.target.value)} />
        <input type="text" placeholder='street name' value={state.Address.street} onChange={e => handleChange(STREET, e.target.value)}/>  
        <input type="text" placeholder='City name' value={state.Address.city} onChange={e => handleChange(CITY, e.target.value)}/>  
        <input type="text" placeholder='State' value={state.Address.state} onChange={e => handleChange(STATE, e.target.value)}/>  
        <input type="text" placeholder='Pincode' value={state.Address.pincode} onChange={e => handleChange(PINCODE, e.target.value)}/>  
        <input type="text" placeholder='Landmark' value={state.Address.landmark} onChange={e => handleChange(LANDMARK, e.target.value)}/>  
        </label><br />
        <label>Enter Course Offered <input type="text" value={state.courses} placeholder='Enter course offered' onChange={e => handleChange(COURSES, e.target.value)} /></label><br />
        <input type="submit" />
      </form>
      <DisplayData data={data.current}/>
    </>
  )
}

export default App
