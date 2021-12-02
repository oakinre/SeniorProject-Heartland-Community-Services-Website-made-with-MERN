import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      localStorage.setItem('token',JSON.parse(localStorage.getItem('profile')).token);
      //User Info
      localStorage.setItem('AOI',JSON.parse(localStorage.getItem('profile')).result.AOI);
      localStorage.setItem('CDL',JSON.parse(localStorage.getItem('profile')).result.CDL);
      localStorage.setItem('OverEighteen',JSON.parse(localStorage.getItem('profile')).result.OverEighteen);
      localStorage.setItem('Setup',JSON.parse(localStorage.getItem('profile')).result.Setup);
      localStorage.setItem('WeekOne',JSON.parse(localStorage.getItem('profile')).result.WeekOne);
      localStorage.setItem('WeekTwo',JSON.parse(localStorage.getItem('profile')).result.WeekTwo);
      localStorage.setItem('WeekThree',JSON.parse(localStorage.getItem('profile')).result.WeekThree);
      localStorage.setItem('WeekFour',JSON.parse(localStorage.getItem('profile')).result.WeekFour);
      localStorage.setItem('Name',JSON.parse(localStorage.getItem('profile')).result.name);
      
    
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;