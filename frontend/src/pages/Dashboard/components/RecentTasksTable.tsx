import {

    Paper,

    Table,

    TableBody,

    TableCell,

    TableContainer,

    TableHead,

    TableRow,

    Typography,

    Chip

} from "@mui/material";

interface Task {

    id: number;

    title: string;

    status: string;

    priority: string;

    dueDate: string;

    assignedTo: {

        name: string;

    };

    project: {

        name: string;

    };

}

interface Props {

    data: Task[];

}

const getStatusColor = (status: string) => {

    switch (status) {

        case "TODO":

            return "warning";

        case "IN_PROGRESS":

            return "info";

        case "COMPLETED":

            return "success";

        default:

            return "default";

    }

};

const getPriorityColor = (priority: string) => {

    switch (priority) {

        case "HIGH":

            return "error";

        case "MEDIUM":

            return "warning";

        case "LOW":

            return "success";

        default:

            return "default";

    }

};

const RecentTasksTable = ({

    data

}: Props) => {

    return (

        <>

            <Typography

                variant="h5"

                fontWeight="bold"

                mt={5}

                mb={2}

            >

                Recent Tasks

            </Typography>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell><b>Title</b></TableCell>

                            <TableCell><b>Employee</b></TableCell>

                            <TableCell><b>Project</b></TableCell>

                            <TableCell><b>Status</b></TableCell>

                            <TableCell><b>Priority</b></TableCell>

                            <TableCell><b>Due Date</b></TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            data.map((task) => (

                                <TableRow key={task.id}>

                                    <TableCell>

                                        {task.title}

                                    </TableCell>

                                    <TableCell>

                                        {task.assignedTo.name}

                                    </TableCell>

                                    <TableCell>

                                        {task.project.name}

                                    </TableCell>

                                    <TableCell>

                                        <Chip

                                            label={task.status}

                                            color={getStatusColor(task.status)}

                                            size="small"

                                        />

                                    </TableCell>

                                    <TableCell>

                                        <Chip

                                            label={task.priority}

                                            color={getPriorityColor(task.priority)}

                                            size="small"

                                        />

                                    </TableCell>

                                    <TableCell>

                                        {

                                            new Date(task.dueDate)

                                                .toLocaleDateString()

                                        }

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </TableContainer>

        </>

    );

};

export default RecentTasksTable;