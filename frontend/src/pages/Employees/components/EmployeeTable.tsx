import {

    Paper,

    Table,

    TableBody,

    TableCell,

    TableContainer,

    TableHead,

    TableRow,

    Chip,

    IconButton,

    Typography

} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

import type {

    Employee

} from "../../../types/employee";

interface Props {

    employees: Employee[];

}

const EmployeeTable = ({

    employees

}: Props) => {

    return (

        <TableContainer component={Paper}>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>

                            <b>Name</b>

                        </TableCell>

                        <TableCell>

                            <b>Email</b>

                        </TableCell>

                        <TableCell>

                            <b>Role</b>

                        </TableCell>

                        <TableCell>

                            <b>Created</b>

                        </TableCell>

                        <TableCell align="center">

                            <b>Actions</b>

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        employees.length === 0 ?

                        (

                            <TableRow>

                                <TableCell

                                    colSpan={5}

                                    align="center"

                                >

                                    <Typography>

                                        No Employees Found

                                    </Typography>

                                </TableCell>

                            </TableRow>

                        )

                        :

                        (

                            employees.map((employee) => (

                                <TableRow

                                    key={employee.id}

                                >

                                    <TableCell>

                                        {employee.name}

                                    </TableCell>

                                    <TableCell>

                                        {employee.email}

                                    </TableCell>

                                    <TableCell>

                                        <Chip

                                            label={employee.role}

                                            color={

                                                employee.role === "ADMIN"

                                                ? "error"

                                                : "primary"

                                            }

                                            size="small"

                                        />

                                    </TableCell>

                                    <TableCell>

                                        {

                                            new Date(

                                                employee.createdAt

                                            ).toLocaleDateString()

                                        }

                                    </TableCell>

                                    <TableCell align="center">

                                        <IconButton>

                                            <EditIcon />

                                        </IconButton>

                                        <IconButton>

                                            <DeleteIcon />

                                        </IconButton>

                                    </TableCell>

                                </TableRow>

                            ))

                        )

                    }

                </TableBody>

            </Table>

        </TableContainer>

    );

};

export default EmployeeTable;