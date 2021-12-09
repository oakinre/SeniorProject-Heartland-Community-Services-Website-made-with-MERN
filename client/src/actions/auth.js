import { AUTH, AdminAUTH } from '../constants/actionTypes';
import * as api from '../api/index.js'

export const adminSignIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.adminSignIn(formData);

        dispatch({type: AdminAUTH, data});


        history.push('/')
    } catch (error) {
        console.log(error);
    }
};
export const adminSignUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.adminSignUp(formData);

        dispatch({type: AdminAUTH, data});


        history.push('/')
    } catch (error) {
        console.log(error);
    }
};

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data});


        history.push('/')
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});
        history.push('/')
        
    } catch (error) {
        console.log(error);
    }
};