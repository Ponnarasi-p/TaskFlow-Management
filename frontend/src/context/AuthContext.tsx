import {

    createContext,

    useContext,

    useEffect,

    useState

} from "react";

import type { User } from "../types/auth";

interface AuthContextType {

    user: User | null;

    token: string | null;

    login: (

        token: string,

        user: User

    ) => void;

    logout: () => void;

}

const AuthContext = createContext<AuthContextType>(

    {} as AuthContextType

);

export const AuthProvider = ({

    children

}: {

    children: React.ReactNode;

}) => {

    const [token, setToken] = useState<string | null>(null);

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        const storedToken =

            localStorage.getItem("token");

        const storedUser =

            localStorage.getItem("user");

        if (storedToken && storedUser) {

            setToken(storedToken);

            setUser(JSON.parse(storedUser));

        }

    }, []);

    const login = (

        token: string,

        user: User

    ) => {

        localStorage.setItem(

            "token",

            token

        );

        localStorage.setItem(

            "user",

            JSON.stringify(user)

        );

        setToken(token);

        setUser(user);

    };

    const logout = () => {

        localStorage.clear();

        setUser(null);

        setToken(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () =>

    useContext(AuthContext);