import React, {useState} from 'react'
import { 
Container, 
FormContent,
Icon, 
FormWrap, 
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text
} from './SigninElements'
import {Avatar, Button, Grid, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles();

    const isSignup = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {

    };
    const handleChange =() => {

    };
    return (
        <Container>
            <FormWrap>
                <Icon to="/">HFC</Icon>
                <FormContent>
                    <Form className={classes.form} onSubmit={handleSubmit} isSignup={isSignup}>

                        <FormH1 color='#fff' fullWidth>{isSignup ? 'Sign Up' : 'Sign In'}</FormH1>
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
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                        {/* 
                        onChange={(event) => {setUsername(event.target.value)}} 
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton> */}
                        {/* <Text>Forgot password</Text> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        
    )
}

export default SignIn
