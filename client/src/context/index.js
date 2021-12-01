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
        console.log(response);
        if (response.data && response.data.user) {
            setUser({
                data: {
                    id: response.data.user.id,
                    email: response.data.user.email
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
