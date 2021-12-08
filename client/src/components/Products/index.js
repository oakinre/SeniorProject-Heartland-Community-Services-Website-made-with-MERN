import React, {useState} from "react"
import Axios from 'axios'
import img from '../../images/hcs.svg'
import { 
Container, 
FormContent,
Icon, 
FormWrap, 
Form,
FormH1,
FormLabel,
FormInput,
FormInput2,
FormButton,
DropDownContainer,
DropDownListContainer,
DropDownHeader,
DropDownList,
ListItem,
SubH4
} from './ProductElements'
import { useHistory } from 'react-router-dom';

const options = ["Dry Goods", "Meat and Dairy Products", "Personal Hygiene Products", "Household Products", "Other"]

const Product = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggling = () => setIsOpen(!isOpen);
  
    const [itemType, setItemType] = useState("Dry Goods");
    const [exprDate, setExprDate] = useState("");
    const [generalDesc, setGeneralDesc] = useState("");
    const [estimatedPalettes, setEstimatedPalettes] = useState("");
    const [nameOfOrg, setNameOfOrg] = useState("");
    const [contact, setContact] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        setItemType(value);
      };
    const contactValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regex2 = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
        if(regex.test(contact) === false) {
            if(regex2.test(contact) === false){
                return (false);
            }else{
                return(true);
            }
        }else{
            return(true);
        }
          
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isContactValid = contactValidation();
        
        // Check if email is valid
        if (isContactValid) {
            addToList();
            history.push('/');
        }else{
            setErrorMessage("Wrong Email or Phone Number Format");
        }
    }
    const addToList = () => {
        Axios.post("http://localhost:3001/insert3", {
            itemType: itemType,
            exprDate: exprDate,
            generalDesc: generalDesc,
            estimatedPalettes: estimatedPalettes,
            nameOfOrg: nameOfOrg,
            contact: contact
        });
    };
    return (
        <Container>
            <Icon to="/">HCS</Icon>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={onSubmit}>
                        <FormH1>Product Donation Form</FormH1>
                            <FormLabel htmlFor='for'>Item Type</FormLabel>
                            <DropDownContainer>
                                    <DropDownHeader onClick={toggling}>
                                    {selectedOption || "Dry Goods"}
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
                            {(itemType !== "Household Products") && (
                            <>
                            <FormLabel htmlFor='for'>Best used by date</FormLabel>
                            <FormInput 
                            type="date" 
                            onChange={(event) => {
                                setExprDate(event.target.value);
                                
                            }} required />
                            
                            <FormLabel htmlFor='for'>Estimated Palettes</FormLabel>
                            <FormInput 
                            type="number"
                            min="0" 
                            onChange={(event) => {
                                setEstimatedPalettes(event.target.value);
                                
                            }} required />
                            </>
                            )}
                          
                            <FormLabel htmlFor='for'>General Description</FormLabel>
                            <FormInput2 
                            type="text" 
                            onChange={(event) => {
                                setGeneralDesc(event.target.value);
                                
                            }} required />
                            <FormLabel htmlFor='for'>Name of Organization</FormLabel>
                            <FormInput 
                            type="text" 
                            onChange={(event) => {
                                setNameOfOrg(event.target.value);
                                
                            }} required />
                            <FormLabel htmlFor='for'>Contact Info (i.e. Phone Number or Email)</FormLabel>
                            <FormInput 
                            type="text" 
                            onChange={(event) => {
                                setContact(event.target.value);
                            }} required />
                            
                            <SubH4 className='error'> {errorMessage} </SubH4>
                            <FormButton type='submit'>Submit</FormButton>
                            <br/>
                            <h4>***Once submitted cannot be revised, must resubmit***</h4>
                            </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Product
