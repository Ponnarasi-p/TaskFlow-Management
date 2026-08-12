import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";

import Dashboard from "../pages/Dashboard/Dashboard";
import Employees from "../pages/Employees/Employees";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";
import Comments from "../pages/Comments/Comments";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {

    return (

        <Routes>

            <Route

                path="/"

                element={

                    <PublicRoute>

                        <Login />

                    </PublicRoute>

                }

            />

            <Route

                element={

                    <ProtectedRoute>

                        <MainLayout />

                    </ProtectedRoute>

                }

            >

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/employees"
                    element={<Employees />}
                />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/tasks"
                    element={<Tasks />}
                />

                <Route
                    path="/comments"
                    element={<Comments />}
                />

            </Route>

        </Routes>

    );

};

export default AppRoutes;