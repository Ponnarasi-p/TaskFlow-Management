import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { login as loginService } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import type { LoginRequest } from "../types/auth";

export const useLogin = () => {

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        data: LoginRequest
    ) => {

        try {

            setLoading(true);

            const result = await loginService(data);

            login(
                result.token,
                result.user
            );

            enqueueSnackbar(
                "Login Successful",
                {
                    variant: "success"
                }
            );

            navigate("/dashboard");

        }
        catch (error: any) {

            enqueueSnackbar(

                error?.response?.data?.message ||

                "Invalid Credentials",

                {
                    variant: "error"
                }

            );

        }
        finally {

            setLoading(false);

        }

    };

    return {

        loading,

        handleLogin

    };

};