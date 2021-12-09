import * as actionType from '../constants/actionTypes';
import Axios from 'axios';
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      const id = JSON.parse(localStorage.getItem('profile')).result._id;
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentCDL', response.data["0"].CDL === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentOverEighteen', response.data["0"].OverEighteen === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentSetup', response.data["0"].Setup === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentWeekOne', response.data["0"].WeekOne === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentWeekTwo', response.data["0"].WeekTwo === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentWeekThree', response.data["0"].WeekThree === true)
        })
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            localStorage.setItem('CurrentWeekFour', response.data["0"].WeekFour === true)
        })
      localStorage.setItem('token',JSON.parse(localStorage.getItem('profile')).token);
     
    
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.AdminAUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      const id2 = JSON.parse(localStorage.getItem('profile')).result._id;
      localStorage.setItem('id', id2);
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;