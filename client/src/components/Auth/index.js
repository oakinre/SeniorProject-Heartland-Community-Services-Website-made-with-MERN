import React, {useState} from 'react'
import { 
Container, 
FormContent,
Iconz,
FormWrap, 
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text
} from './AuthElements'
import { GoogleLogin } from 'react-google-login'
import Icon from './Icon'
import {Avatar, Button, Grid, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles();

    const [isSignup, setIsSignup] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {

    };
    const handleChange =() => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        console.log(res);
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later");
    }
    return (
        <Container>
            <FormWrap>
                <Iconz to="/">HFC</Iconz>
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
                                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                            </Grid>
                            {/* <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</Button> */}
                            <FormButton type='submit' className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</FormButton>
                             <GoogleLogin 
                                clientId="623345783952-3p3u2suurvfb6f2ctglei84vc8p0e0ie.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color ='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}  variant="contained">
                                        Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
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

export default SignIn
