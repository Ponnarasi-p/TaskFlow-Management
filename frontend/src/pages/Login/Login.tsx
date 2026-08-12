import { useState } from "react";

import { useForm } from "react-hook-form";

import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    IconButton,
    InputAdornment
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";

import { useLogin } from "../../hooks/useLogin";

import type { LoginRequest } from "../../types/auth";

const Login = () => {

    const {

        register,

        handleSubmit,

        formState: {

            errors

        }

    } = useForm<LoginRequest>();

    const {

        loading,

        handleLogin

    } = useLogin();

    const [showPassword, setShowPassword] = useState(false);

    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f5f5f5"
            }}
        >

            <Card
                sx={{
                    width: 420,
                    borderRadius: 3,
                    boxShadow: 6
                }}
            >

                <CardContent sx={{ p: 4 }}>

                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                    >

                        TaskFlow

                    </Typography>

                    <Typography
                        align="center"
                        color="text.secondary"
                        mb={3}
                    >

                        Welcome Back 👋

                    </Typography>

                    <form
                        onSubmit={handleSubmit(handleLogin)}
                    >

                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register("email", {

                                required: "Email is required"

                            })}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            error={!!errors.password}
                            helperText={
                                errors.password?.message
                            }
                            {...register("password", {

                                required:
                                    "Password is required"

                            })}
                            InputProps={{

                                endAdornment: (

                                    <InputAdornment position="end">

                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(

                                                    !showPassword

                                                )
                                            }
                                        >

                                            {

                                                showPassword

                                                    ? <VisibilityOff />

                                                    : <Visibility />

                                            }

                                        </IconButton>

                                    </InputAdornment>

                                )

                            }}
                        />

                        <LoadingButton

                            loading={loading}

                            type="submit"

                            fullWidth

                            variant="contained"

                            sx={{

                                mt: 3,

                                py: 1.3

                            }}

                        >

                            Login

                        </LoadingButton>

                    </form>

                </CardContent>

            </Card>

        </Box>

    );

};

export default Login;