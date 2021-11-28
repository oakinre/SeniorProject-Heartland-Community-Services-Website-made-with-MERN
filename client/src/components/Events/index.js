import React, {useEffect}, {useState} from 'react'
import {
    Column2, 
    Img, 
    ImgWrap, 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    EventH1,
    
    } from './EventElements'
const Events = () => {

    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=>{
            setVolunteerList(response.data);
        })
    }, []);

    return (
        <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <EventH1>Events</EventH1>
                <TextWrapper>
                    {volunteerList.map((val, key)=> {
                        return (
                        <div key={key} className="volunteer"> 
                            <h1>{val.volunteerName}</h1>
                            <h1>{val.volunteerAge}</h1>
                            </div>
                        )
                        })}
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
            
    )
}

export default Events
