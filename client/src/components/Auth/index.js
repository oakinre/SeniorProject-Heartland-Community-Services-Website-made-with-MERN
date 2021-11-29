import React, {useState} from 'react'
import { 
Container, 
FormContent,
Iconz,
Img,
ImgWrap,
FormWrap, 
Form,
FormH1,
NavLogo,
FormLabel,
FormInput,
FormButton,
Text
} from './AuthElements'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import Icon from './Icon'
import {Avatar, Button, Grid, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import { signin, signup} from '../../actions/auth'
import { useHistory } from 'react-router-dom';
import img from '../../images/hcs.svg'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup) {
            dispatch(signup(formData, history))
        }else {
            dispatch(signin(formData, history))
        }
    };
    const handleChange =(e) => {
        setFormData ({...formData, [e.target.name]: e.target.value});
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    // const googleSuccess = async (res) => {
    //    const result = res?.profileOnj;
    //    const token = res?.tokenId;

    // //    try{
    // //         dispatch({type: 'AUTH', data: { result, token} });
    // //    } catch (error) {
    // //        console.log(error);
    // //    }
    // };

    // const googleFailure = (error) => {
    //     console.log(error);
    //     console.log("Google Sign In was unsuccessful. Try Again Later");
    // };

    return (
        <Container component = "main">
            <NavLogo to='/'>
            <ImgWrap>
                    <Img src={img} alt="HCS"/>
                </ImgWrap>
            </NavLogo>
            <FormWrap>
                <FormContent>
                    <Form className={classes.form} onSubmit={handleSubmit} isSignup={isSignup}>
                        <FormH1 color='#fff' fullWidth>{isSignup ? 'Volunteer Sign Up' : 'Volunteer Sign In'}</FormH1>
                        
                            <Grid container spacing ={2}>
                                {
                                    isSignup && (
                                        <>
                                            <Input name="firstName" label="First Name" handleChange ={handleChange} autoFocus half />
                                            <Input name="lastName" label="Last Name"  handleChange ={handleChange} half/>
                                            
                                        </>
                                )}
                                <Input name= "email" label="Email Address" handleChange={handleChange} type="email"/>
                                <Input name= "password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                                { 
                                isSignup && (
                                <>
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                                </>
                                )}
                            </Grid>
                            {/* <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</Button> */}
                            <FormButton type='submit' className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</FormButton>
                             {/* <GoogleLogin 
                                clientId="623345783952-1ct1aska925alqkq880h7f770u2g95oe.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color ='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}  variant="contained">
                                        Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy={'single_host_origin'}
                            /> */}
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignup ? 'Already have an account? Sign In' : "Don't Have an account? Sign Up"}
                                    </Button>
                                </Grid>  
                            </Grid>
                        {/* 
                        onChange={(event) => {setUsername(event.target.value)}} 
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                         */}
                        {/* <Text>Forgot password</Text> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        
    )
}

export default Auth
