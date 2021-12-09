import React, {useState} from 'react'
import { 
Container, 
FormContent,
Img,
ImgWrap,
FormWrap, 
Form,
FormH1,
FormH2,
NavLogo,
FormButton,
DropDownContainer,
DropDownHeader,
DropDownList,
DropDownListContainer,
ListItem,
FormLabel,
FormLabel2,
FormInput,
InfoContainer
} from './AuthElements'
// import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import {Button, Grid} from '@material-ui/core'
import useStyles from './styles'
import Input from './Input'
import { signin, signup} from '../../actions/auth'
import { useHistory } from 'react-router-dom';
import img from '../../images/hcs.svg'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', AOI: 'Food Distribution', CDL: false, Setup: false, OverEighteen: false, WeekOne: false, WeekTwo: false, WeekThree: false, WeekFour: false}
const options = ["Food Distribution", "Prayer Group"]

const Auth = () => {
    
    const refresh = () =>{
         window.location.reload(true);
    }
    //Checkboxes
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedNo, setIsCheckedNo] = useState(false);
    const handleOnChange = (val) => {
        if(val === 0){
            if(isCheckedNo){
                setIsChecked(!isChecked);
                setIsCheckedNo(false);
            }else{
                setIsChecked(!isChecked);
            }
        }
        if(val === 1){
            if(isChecked){
                setIsCheckedNo(!isCheckedNo);
                setIsChecked(false);
            }else{
                setIsCheckedNo(!isCheckedNo);
            }
        }
  };
  const [isChecked1, setIsChecked1] = useState(false);
  const [isCheckedNo1, setIsCheckedNo1] = useState(false);
    const handleOnChange1 = (val) => {
        if(val === 0){
            if(isCheckedNo1){
                setIsChecked1(!isChecked1);
                setIsCheckedNo1(false);
            }else{
                setIsChecked1(!isChecked1);
            }
        }
        if(val === 1){
            if(isChecked1){
                setIsCheckedNo1(!isCheckedNo1);
                setIsChecked1(false);
            }else{
                setIsCheckedNo1(!isCheckedNo1);
            }
        }
  };
  const [isChecked2, setIsChecked2] = useState(false);
  const [isCheckedNo2, setIsCheckedNo2] = useState(false);
    const handleOnChange2 = (val) => {
        if(val === 0){
            if(isCheckedNo2){
                setIsChecked2(!isChecked2);
                setIsCheckedNo2(false);
            }else{
                setIsChecked2(!isChecked2);
            }
        }
        if(val === 1){
            if(isChecked2){
                setIsCheckedNo2(!isCheckedNo2);
                setIsChecked2(false);
            }else{
                setIsCheckedNo2(!isCheckedNo2);
            }
        }
  };
  const [isChecked3, setIsChecked3] = useState(false);
  const [isCheckedNo3, setIsCheckedNo3] = useState(false);
    const handleOnChange3 = (val) => {
        if(val === 0){
            if(isCheckedNo3){
                setIsChecked3(!isChecked3);
                setIsCheckedNo3(false);
            }else{
                setIsChecked3(!isChecked3);
            }
        }
        if(val === 1){
            if(isChecked3){
                setIsCheckedNo3(!isCheckedNo3);
                setIsChecked3(false);
            }else{
                setIsCheckedNo3(!isCheckedNo3);
            }
        }
  };
  const [isChecked4, setIsChecked4] = useState(false);
  const [isCheckedNo4, setIsCheckedNo4] = useState(false);

    const handleOnChange4 = (val) => {
        if(val === 0){
            if(isCheckedNo4){
                setIsChecked4(!isChecked4);
                setIsCheckedNo4(false);
            }else{
                setIsChecked4(!isChecked4);
            }
        }
        if(val === 1){
            if(isChecked4){
                setIsCheckedNo4(!isCheckedNo4);
                setIsChecked4(false);
            }else{
                setIsCheckedNo4(!isCheckedNo4);
            }
        }
  };
  const [isChecked5, setIsChecked5] = useState(false);
  const [isCheckedNo5, setIsCheckedNo5] = useState(false);
    const handleOnChange5 = (val) => {
        if(val === 0){
            if(isCheckedNo5){
                setIsChecked5(!isChecked5);
                setIsCheckedNo5(false);
            }else{
                setIsChecked5(!isChecked5);
            }
        }
        if(val === 1){
            if(isChecked5){
                setIsCheckedNo5(!isCheckedNo5);
                setIsChecked5(false);
            }else{
                setIsCheckedNo5(!isCheckedNo5);
            }
        }
  };
  const [isChecked6, setIsChecked6] = useState(false);
  const [isCheckedNo6, setIsCheckedNo6] = useState(false);
    const handleOnChange6 = (val) => {
        if(val === 0){
            if(isCheckedNo6){
                setIsChecked6(!isChecked6);
                setIsCheckedNo6(false);
            }else{
                setIsChecked6(!isChecked6);
            }
        }
        if(val === 1){
            if(isChecked6){
                setIsCheckedNo6(!isCheckedNo6);
                setIsChecked6(false);
            }else{
                setIsCheckedNo6(!isCheckedNo6);
            }
        }
  };
    /*********************************************************************************/
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggling = () => setIsOpen(!isOpen);
  
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
      setFormData({...formData, AOI: value});
    };

  /***********************************************************************************/

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(formData, history))
        }else {
            dispatch(signin(formData, history))
            
        }
    };
    const handleChange =(e) => {
        setFormData ({...formData, [e.target.name]: e.target.value});
    };
    const handleChange2 =(e) => {
        let isChecked = e.target.value;
        setFormData ({...formData, [e.target.name]: isChecked});
        console.log(e.target.name,isChecked)
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
        setIsChecked(false);
        setIsCheckedNo(false);
        setIsChecked1(false);
        setIsCheckedNo1(false);
        setIsChecked2(false);
        setIsCheckedNo2(false);
        setIsChecked3(false);
        setIsCheckedNo3(false);
        setIsChecked4(false);
        setIsCheckedNo4(false);
        setIsChecked5(false);
        setIsCheckedNo5(false);
        setIsChecked6(false);
        setIsCheckedNo6(false);
        setSelectedOption("Food Distribution")
    };
    const whatMonth = (value) =>{
        var month ="";
        switch(value){
            case 0:
                month ="January";
                return(month);
            case 1:
                month ="February";
                return(month);
            case 2:
                month ="March";
                return(month);
            case 3:
                month ="April";
                return(month);
            case 4:
                month ="May";
                return(month);
            case 5:
                month ="June";
                return(month);
            case 6:
                month ="July";
                return(month);
            case 7:
                month ="August";
                return(month);
            case 8:
                month ="September";
                return(month);
            case 9:
                month ="October";
                return(month);
            case 10:
                month ="November";
                return(month);
            case 11: 
                month ="December";
                return(month);
            default:
                return("")
        }
    }
    const twoCalls = (e,val) => {
        handleOnChange(val);
        handleChange2(e);
    }
    const twoCalls1 = (e,val) => {
        handleOnChange1(val);
        handleChange2(e);
    }
    const twoCalls2 = (e,val) => {
        handleOnChange2(val);
        handleChange2(e);
    }
    const twoCalls3 = (e,val) => {
        handleOnChange3(val);
        handleChange2(e);
    }
    const twoCalls4 = (e,val) => {
        handleOnChange4(val);
        handleChange2(e);
    }
    const twoCalls5 = (e,val) => {
        handleOnChange5(val);
        handleChange2(e);
    }
    const twoCalls6 = (e,val) => {
        handleOnChange6(val);
        handleChange2(e);
    }

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
                                <FormH2 color='#fff' fullWidth>Volunteer Info</FormH2>
                                <FormLabel>Area of Interest: </FormLabel>
                                <DropDownContainer>
                                    <DropDownHeader onClick={toggling}>
                                    {selectedOption || "Food Distribution"}
                                    </DropDownHeader>
                                    {isOpen && (
                                    <DropDownListContainer>
                                        <DropDownList>
                                        {options.map(option => (
                                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option}
                                            </ListItem>
                                        ))}
                                        </DropDownList>
                                    </DropDownListContainer>
                                    )}
                                </DropDownContainer>
                                <InfoContainer>
                                <FormLabel>Do you have a valid TX CDL License: </FormLabel>
                                
                                <div className="validCDL">
                                    <FormInput type="checkbox" required= {
                                        isChecked ? "required" : null
                                    } 
                                    id="yes" name="CDL" value= "true" checked={isChecked} onChange={e => twoCalls(e,0)} />Yes
                                    <FormInput type="checkbox" 
                                    required= {
                                        !isChecked ? "required" : null
                                    }
                                    id="no" name="CDL" value="false" checked={isCheckedNo} onChange={e => twoCalls(e,1)} />No
                                </div>
                                <FormLabel>Are you available for setup (arrive earlier): </FormLabel>
                                <div className="validSetup">
                                    <FormInput type="checkbox" required= {
                                        isChecked1 ? "required" : null
                                    } 
                                    id="yes1" name="Setup" value="true" checked={isChecked1} onChange={e => twoCalls1(e,0)} />Yes
                                    <FormInput type="checkbox" required= {
                                        !isChecked1 ? "required" : null
                                    } 
                                    id="no1" name="Setup" value="false" checked={isCheckedNo1} onChange={e => twoCalls1(e,1)} />No
                                </div>
                                <FormLabel>Are you over 18: </FormLabel>
                                <div className="valid18">
                                    <FormInput type="checkbox" required= {
                                        isChecked2 ? "required" : null
                                    } 
                                    id="yes2" name="OverEighteen" value="true" checked={isChecked2} onChange={e => twoCalls2(e,0)} />Yes
                                    <FormInput type="checkbox" required= {
                                        !isChecked2 ? "required" : null
                                    } 
                                    id="no2" name="OverEighteen" value="false" checked={isCheckedNo2} onChange={e => twoCalls2(e,1)}/>No
                                </div>
                                <FormLabel>Monthly Availability for {whatMonth(new Date().getMonth())}: </FormLabel>
                                <h6>Can update for future months once account is created</h6>
                                <br/>
                                <div>
                                <FormLabel2>Week 1: </FormLabel2>
                                    <FormInput type="checkbox" required= {
                                        isChecked3 ? "required" : null
                                    }
                                    id="yes3" name="WeekOne" value="true" checked={isChecked3} onChange={e => twoCalls3(e,0)}/>Yes
                                    <FormInput type="checkbox" required= {
                                        !isChecked3 ? "WeekOne" : null
                                    }
                                    id="no3" name="no" value="false" checked={isCheckedNo3} onChange={e => twoCalls3(e,1)}/>No
                                <br/>
                                <FormLabel2>Week 2: </FormLabel2>
                                <FormInput type="checkbox" required= {
                                        isChecked4 ? "required" : null
                                    }
                                    id="yes4" name="WeekTwo" value="true" checked={isChecked4} onChange={e => twoCalls4(e,0)}/>Yes
                                <FormInput type="checkbox" required= {
                                        !isChecked4 ? "required" : null
                                    }
                                    id="no4" name="WeekTwo" value="false" checked={isCheckedNo4} onChange={e => twoCalls4(e,1)}/>No
                                <br/>
                                <FormLabel2>Week 3: </FormLabel2>
                                <FormInput type="checkbox" required= {
                                        isChecked5 ? "required" : null
                                    }
                                    id="yes5" name="WeekThree" value="true" checked={isChecked5} onChange={e => twoCalls5(e,0)}/>Yes
                                <FormInput type="checkbox" required= {
                                        !isChecked5 ? "required" : null
                                    }
                                    id="no5" name="WeekThree" value="false" checked={isCheckedNo5} onChange={e => twoCalls5(e,1)}/>No
                                <br/>
                                <FormLabel2>Week 4: </FormLabel2>
                                <FormInput type="checkbox" required= {
                                        isChecked6 ? "required" : null
                                    }
                                    id="yes6" name="WeekFour" value="true" checked={isChecked6} onChange={e => twoCalls6(e,0)}/>Yes
                                <FormInput type="checkbox" required= {
                                        !isChecked6 ? "required" : null
                                    }
                                    id="no6" name="WeekFour" value="false" checked={isCheckedNo6} onChange={e => twoCalls6(e,1)}/>No
                                </div>
                                </InfoContainer>
                                </>
                                
                                )}
                            </Grid>
                        
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
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignup ? 'Already have an account? Sign In' : "Don't Have an account? Sign Up"}
                                    </Button>
                                </Grid>  
                            </Grid>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        
    )
}

export default Auth
