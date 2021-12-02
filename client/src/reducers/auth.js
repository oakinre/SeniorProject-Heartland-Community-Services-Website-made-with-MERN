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
      //User Info
      // localStorage.setItem('AOI',JSON.parse(localStorage.getItem('profile')).result.AOI);
      // localStorage.setItem('CDL',JSON.parse(localStorage.getItem('profile')).result.CDL);
      // localStorage.setItem('OverEighteen',JSON.parse(localStorage.getItem('profile')).result.OverEighteen);
      // localStorage.setItem('Setup',JSON.parse(localStorage.getItem('profile')).result.Setup);
      // localStorage.setItem('WeekOne',JSON.parse(localStorage.getItem('profile')).result.WeekOne);
      // localStorage.setItem('WeekTwo',JSON.parse(localStorage.getItem('profile')).result.WeekTwo);
      // localStorage.setItem('WeekThree',JSON.parse(localStorage.getItem('profile')).result.WeekThree);
      // localStorage.setItem('WeekFour',JSON.parse(localStorage.getItem('profile')).result.WeekFour);
      // localStorage.setItem('Name',JSON.parse(localStorage.getItem('profile')).result.name);
      // localStorage.setItem('Email',JSON.parse(localStorage.getItem('profile')).result.email);
      
    
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;