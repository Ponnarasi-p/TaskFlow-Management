import {

    Box,

    Button,

    TextField

} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface Props {

    search: string;

    onSearchChange: (

        value: string

    ) => void;

    onAddEmployee: () => void;

}

const EmployeeToolbar = ({

    search,

    onSearchChange,

    onAddEmployee

}: Props) => {

    return (

        <Box

            display="flex"

            justifyContent="space-between"

            alignItems="center"

            mb={3}

            gap={2}

        >

            <TextField

                label="Search Employee"

                value={search}

                onChange={(e) =>

                    onSearchChange(

                        e.target.value

                    )

                }

                size="small"

                sx={{

                    width: 350

                }}

            />

            <Button

                variant="contained"

                startIcon={<AddIcon />}

                onClick={onAddEmployee}

            >

                Add Employee

            </Button>

        </Box>

    );

};

export default EmployeeToolbar;