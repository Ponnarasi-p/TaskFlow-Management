import { Typography } from "@mui/material";

import SummaryCards from "./components/SummaryCards";
import TaskStatusCards from "./components/TaskStatusCards";
import PriorityCards from "./components/PriorityCards";
import RecentTasksTable from "./components/RecentTasksTable";
import RecentCommentsTable from "./components/RecentCommentsTable";


import { useTaskStatus } from "./hooks/useTaskStatus";
import { useTaskPriority } from "./hooks/useTaskPriority";
import { useRecentTasks } from "./hooks/useRecentTasks";
import { useRecentComments } from "./hooks/useRecentComments";

const Dashboard = () => {

    const {

        data: taskStatus = []

    } = useTaskStatus();

    const {

        data: priority = []

    } = useTaskPriority();

    const {

        data: recentTasks = []

    } = useRecentTasks();

    const {

    data: recentComments = []

} = useRecentComments();

    return (

        <>

            <Typography

                variant="h4"

                fontWeight="bold"

                mb={3}

            >

                Dashboard

            </Typography>

            <SummaryCards />

            <TaskStatusCards

                data={taskStatus}

            />

            <PriorityCards

                data={priority}

            />

            <RecentTasksTable

                data={recentTasks}

            />

            <RecentCommentsTable

    data={recentComments}

/>

        </>

    );

};

export default Dashboard;