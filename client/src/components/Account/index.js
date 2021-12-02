import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../context'
import Axios from 'axios'
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
FormLabel3,
FormInput,
InfoContainer
} from './AccountElements'
// import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import {Button, Grid} from '@material-ui/core'
import useStyles from './styles'
import Input from './Input'
import { signin, signup} from '../../actions/auth'
import { useHistory } from 'react-router-dom';
import img from '../../images/hcs.svg'
import mongoose from 'mongoose'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', AOI: 'Food Distribution', CDL: false, Setup: false, OverEighteen: false, WeekOne: "false", WeekTwo: "false", WeekThree: "false", WeekFour: "false"}
const options = ["Food Distribution", "Prayer Group"]

const AccountPage = () => {
    //User Info
    const [eventList, setEventList] = useState([]);
    const id = JSON.parse(localStorage.getItem('profile')).result._id;
    useEffect(()=>{
        Axios.get("http://localhost:3001/read2", {params: {id: id}}).then((response)=>{
            setEventList(response.data);
            localStorage.setItem('CurrentCDL', response.data["0"].CDL === true)
            
        }) 
        }, []);
        
    
    const [state, setState] = useContext(UserContext);
    console.log(state)
    
    
    console.log(id)
    
    
    // const loading = () => {
    //     if(state["loading"] === true){
    //         setTimeout(loading, 100);
    //         return
    //     }else if(state["loading"] === false){
    //     console.log(state["loading"],'nav')
    //     var CDL = ((state["loading"] === true) ? false : true)
        
    //     return(CDL)
    //     }
    // }
    

    
    var CDL = ( localStorage.getItem('CurrentCDL') === 'true')
    var Setup = (localStorage.getItem('CurrentSetup') === 'true')
    var OverEighteen = (localStorage.getItem('CurrentOverEighteen') === 'true')
    var WeekOne = (localStorage.getItem('CurrentWeekOne') === 'true')
    var WeekTwo = (localStorage.getItem('CurrentWeekTwo') === 'true')
    var WeekThree = (localStorage.getItem('CurrentWeekThree') === 'true')
    var WeekFour = (localStorage.getItem('CurrentWeekFour') === 'true')

    //Checkboxes
    const [isChecked, setIsChecked] = useState(CDL);
    const [isCheckedNo, setIsCheckedNo] = useState(!CDL);
    
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
  const [isChecked1, setIsChecked1] = useState(Setup);
  const [isCheckedNo1, setIsCheckedNo1] = useState(!Setup);
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
  const [isChecked2, setIsChecked2] = useState(OverEighteen);
  const [isCheckedNo2, setIsCheckedNo2] = useState(!OverEighteen);
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
  const [isChecked3, setIsChecked3] = useState(WeekOne);
  const [isCheckedNo3, setIsCheckedNo3] = useState(!WeekOne);
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
  const [isChecked4, setIsChecked4] = useState(WeekTwo);
  const [isCheckedNo4, setIsCheckedNo4] = useState(!WeekTwo);

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
  const [isChecked5, setIsChecked5] = useState(WeekThree);
  const [isCheckedNo5, setIsCheckedNo5] = useState(!WeekThree);
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
  const [isChecked6, setIsChecked6] = useState(WeekFour);
  const [isCheckedNo6, setIsCheckedNo6] = useState(!WeekFour);
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

    return (
        <Container component = "main">
            <NavLogo to='/'>
            <ImgWrap>
                    <Img src={img} alt="HCS"/>
                </ImgWrap>
            </NavLogo>
            <FormWrap>
                <FormContent>
                    <Form className="e-float-input e-disabled" onSubmit={handleSubmit}>
                        <FormH1 color='#fff' fullWidth>Volunteer Account Info</FormH1>
                            <Grid container spacing ={2}>
                            {eventList.map((val, key)=> {
                                return(
                                <div key={key} className="account">
                                <FormLabel3>Current Name: {val.name}</FormLabel3>
                                <Input name="firstName" label="First Name" handleChange ={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name"  handleChange ={handleChange} half/>
                                <Input name= "email" label={val.email} handleChange={handleChange} type="email" disabled={true}/>
                                
                            
                                <FormH2 color='#fff' fullWidth>Volunteer Info</FormH2>
                                <FormLabel>Area of Interest: </FormLabel>
                                <DropDownContainer>
                                    <DropDownHeader onClick={toggling}>
                                    {selectedOption || val.AOI}
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
                                </div>
                            )})}
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
                               
                                
                                
                            </Grid>
                        
                            <FormButton type='submit' className={classes.submit} >Update</FormButton>
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
                            
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
    )
}

export default AccountPage
