import React, {useState} from 'react'
import { 
Container, 
FormContent,
Img,
ImgWrap,
FormWrap, 
Form,
FormH1,
NavLogo,
FormButton
} from './AdminElements'
import Input from '../Auth/Input'
import img from '../../images/hcs.svg'
import {Button, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { adminSignIn, adminSignUp} from '../../actions/auth'
import { useHistory } from 'react-router-dom';
import useStyles from '../Auth/styles'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Admin = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(adminSignIn(formData, history))
    };
    const handleChange =(e) => {
        setFormData ({...formData, [e.target.name]: e.target.value});
    };
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
                        <FormH1 color='#fff' fullWidth>Admin Portal</FormH1>
                        
                            <Grid container spacing ={2}>
                                
                                            {/* <Input name="firstName" label="First Name" handleChange ={handleChange} autoFocus half />
                                            <Input name="lastName" label="Last Name"  handleChange ={handleChange} half/> */}
                                            
                                        
                                
                                <Input name= "username" label="Username" handleChange={handleChange} type="text"/>
                                <Input name= "password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                               
                                {/* <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> */}
                               
                                </Grid>
                                <FormButton type='submit' className={classes.submit}> Sign In </FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Admin
