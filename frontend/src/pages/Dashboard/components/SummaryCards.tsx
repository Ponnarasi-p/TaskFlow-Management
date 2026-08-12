import {
    Grid,
    CircularProgress,
    Box,
    Alert
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CommentIcon from "@mui/icons-material/Comment";

import SummaryCard from "./SummaryCard";

import { useDashboardSummary } from "../hooks/useDashboardSummary";

const SummaryCards = () => {

    const {

        data,

        isLoading,

        isError

    } = useDashboardSummary();

    if (isLoading) {

        return (

            <Box
                display="flex"
                justifyContent="center"
                py={5}
            >

                <CircularProgress />

            </Box>

        );

    }

    if (isError) {

        return (

            <Alert severity="error">

                Failed to load summary.

            </Alert>

        );

    }

    const cards = [

        {

            title: "Employees",

            value: data?.employees ?? 0,

            icon: <PeopleIcon fontSize="large" />,

            color: "#1976d2"

        },

        {

            title: "Projects",

            value: data?.projects ?? 0,

            icon: <FolderIcon fontSize="large" />,

            color: "#2e7d32"

        },

        {

            title: "Tasks",

            value: data?.tasks ?? 0,

            icon: <AssignmentIcon fontSize="large" />,

            color: "#ed6c02"

        },

        {

            title: "Comments",

            value: data?.comments ?? 0,

            icon: <CommentIcon fontSize="large" />,

            color: "#9c27b0"

        }

    ];

    return (

        <Grid
            container
            spacing={3}
            mb={4}
        >

            {

                cards.map((card) => (

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={card.title}
                    >

                        <SummaryCard

                            title={card.title}

                            value={card.value}

                            icon={card.icon}

                            color={card.color}

                        />

                    </Grid>

                ))

            }

        </Grid>

    );

};

export default SummaryCards;