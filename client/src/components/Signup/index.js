import React, {useState, useEffect} from "react"
import Axios from 'axios'
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
Text,
Form2
} from './SignupElements'



const SignUp = () => {
    const [volunteerName, setVolunteerName] = useState("");
    const [ages, setAges] = useState(0);
    const[newVolunteerName, setNewVolunteerName] = useState('');
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setVolunteerList(response.data);
        })
    }, []);

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            volunteerName: volunteerName,
            ages: ages,
        });
    };

    const updateVolunteer = (id) => {
        Axios.put("http://localhost:3001/update", {id: id,newVolunteerName: newVolunteerName})
    }

    return (
        <Container>
            <FormWrap>
                <Icon to="/">HFC</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign up</FormH1>
                        {/* <Form2> */}
                            <FormLabel htmlFor='for'>Volunteer Name</FormLabel>
                            <FormInput type="text" 
                            onChange={(event) => {
                                setVolunteerName(event.target.value);
                            }} required />
                            <FormLabel htmlFor='for'>Volunteer Age</FormLabel>
                            <FormInput 
                            type="number" 
                            onChange={(event) => {
                                setAges(event.target.value);
                            }} required />
                            {/* <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required /> */}
                            <FormButton onClick={addToList} type='submit'>Add to List</FormButton>
                            <Text>Forgot password</Text>
                            
                        {/* </Form2> */}
                    </Form>
                    <h1>Volunteer List</h1>
                    {volunteerList.map((val, key)=> {
                        return (
                        <div key={key} className="volunteer"> 
                            <h1>{val.volunteerName}</h1>
                            <h1>{val.volunteerAge}</h1>
                            <input type="text" placeholder="New Volunteer Name..." onChange={(event) => {
                                setNewVolunteerName(event.target.value)}} />
                            <button onClick={() => updateVolunteer(val._id)}> Update </button>
                            <button> Delete </button>
                        </div>
                        )
                        })}
                </FormContent>
            </FormWrap>
        </Container>

        
    )
}

export default SignUp
