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
import {Avatar, Button, Paper, Grid, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const SignIn = () => {
    const[Username, setUsername] = useState("");
    const classes = useStyles();
    const isSignup = true;
    const handleSubmit = () => {

    };
    const handleChange =() => {

    };
    return (
        <Container>
            <FormWrap>
                <Icon to="/">HFC</Icon>
                <FormContent>
                    <Form className={classes.form} onSubmit={handleSubmit}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5" color='#fff'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                            <Grid container spacing ={2}>
                                {
                                    isSignup && (
                                        <>
                                                <FormLabel htmlFor='for'>First Name</FormLabel>
                                                <FormInput name="firstName" placeholder="Enter First Name..." handleChange ={handleChange}/>
                                                <FormLabel htmlFor='for'>First Name</FormLabel>
                                                <FormInput name="firstName" placeholder="Enter First Name..." handleChange ={handleChange}/>
                                        </>
                                    )
                                }
                            </Grid>
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
