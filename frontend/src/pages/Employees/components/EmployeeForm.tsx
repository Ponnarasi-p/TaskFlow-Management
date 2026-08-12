import {
    Box,
    MenuItem,
    TextField
} from "@mui/material";

import { CreateEmployeeRequest } from "../../../types/employee";

interface Props {

    employee: CreateEmployeeRequest;

    onChange: (
        field: keyof CreateEmployeeRequest,
        value: string
    ) => void;

}

const EmployeeForm = ({
    employee,
    onChange
}: Props) => {

    return (

        <Box
            display="flex"
            flexDirection="column"
            gap={2}
            mt={1}
        >

            <TextField
                label="Name"
                fullWidth
                value={employee.name}
                onChange={(e) =>
                    onChange("name", e.target.value)
                }
            />

            <TextField
                label="Email"
                fullWidth
                value={employee.email}
                onChange={(e) =>
                    onChange("email", e.target.value)
                }
            />

            <TextField
                label="Password"
                type="password"
                fullWidth
                value={employee.password}
                onChange={(e) =>
                    onChange("password", e.target.value)
                }
            />

            <TextField
                select
                label="Role"
                fullWidth
                value={employee.role}
                onChange={(e) =>
                    onChange("role", e.target.value)
                }
            >

                <MenuItem value="EMPLOYEE">
                    Employee
                </MenuItem>

                <MenuItem value="ADMIN">
                    Admin
                </MenuItem>

            </TextField>

        </Box>

    );

};

export default EmployeeForm;