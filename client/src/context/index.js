import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


const UserContext = createContext([{ data: null, loading: true, error: null }, () => { }]);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        data: null,
        loading: true,
        error: null,
    });
    var token = "placeholder";
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token");
    }

    if (token) {
        axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    }
    const fetchUser = async () => {
        const { data: response } = await axios.get("http://localhost:3001/user/me");
        if (response.data && response.data.user) {
            setUser({
                data: {
                    id: response.data.user.id,
                    email: response.data.user.email,
                    name: response.data.user.name,
                    password: response.data.user.password,
                    AOI: response.data.user.AOI,
                    CDL: response.data.user.CDL,
                    Setup: response.data.user.Setup,
                    OverEighteen: response.data.user.OverEighteen,
                    WeekOne: response.data.user.WeekOne,
                    WeekTwo: response.data.user.WeekTwo,
                    WeekThree: response.data.user.WeekThree,
                    WeekFour: response.data.user.WeekFour
                },
                loading: false,
                error: null,
            });
        }
        else if (response.data && response.data.errors.length) {
            setUser({
                data: null,
                loading: false,
                error: response.errors[0].msg,
            });
        }
    };
    useEffect(() => {
        if (token && token !== "placeholder") {
            fetchUser();
        }
        else {
            setUser({
                data: null,
                loading: false,
                error: null,
            });
        }
    }, []);
    return (React.createElement(UserContext.Provider, { value: [user, setUser] }, children));
};
export { UserContext, UserProvider };
