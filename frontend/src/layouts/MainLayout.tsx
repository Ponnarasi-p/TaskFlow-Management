import { Outlet, useNavigate, useLocation } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Button
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CommentIcon from "@mui/icons-material/Comment";

import { useAuth } from "../context/AuthContext";

const drawerWidth = 240;

const MainLayout = () => {

    const { logout, user } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const menuItems = [

        {
            text: "Dashboard",
            icon: <DashboardIcon />,
            path: "/dashboard"
        },

        {
            text: "Employees",
            icon: <PeopleIcon />,
            path: "/employees"
        },

        {
            text: "Projects",
            icon: <FolderIcon />,
            path: "/projects"
        },

        {
            text: "Tasks",
            icon: <AssignmentIcon />,
            path: "/tasks"
        },

        {
            text: "Comments",
            icon: <CommentIcon />,
            path: "/comments"
        }

    ];

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <Box sx={{ display: "flex" }}>

            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`
                }}
            >

                <Toolbar>

                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >

                        TaskFlow

                    </Typography>

                    <Typography sx={{ mr: 2 }}>

                        {user?.name}

                    </Typography>

                    <Button
                        color="inherit"
                        onClick={handleLogout}
                    >

                        Logout

                    </Button>

                </Toolbar>

            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,

                    flexShrink: 0,

                    "& .MuiDrawer-paper": {

                        width: drawerWidth,

                        boxSizing: "border-box"

                    }

                }}
            >

                <Toolbar>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >

                        TaskFlow

                    </Typography>

                </Toolbar>

                <List>

                    {

                        menuItems.map((item) => (

                            <ListItemButton

                                key={item.text}

                                selected={
                                    location.pathname === item.path
                                }

                                onClick={() =>
                                    navigate(item.path)
                                }

                            >

                                <ListItemIcon>

                                    {item.icon}

                                </ListItemIcon>

                                <ListItemText
                                    primary={item.text}
                                />

                            </ListItemButton>

                        ))

                    }

                </List>

            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "#f5f5f5",
                    p: 3
                }}
            >

                <Toolbar />

                <Outlet />

            </Box>

        </Box>

    );

};

export default MainLayout;