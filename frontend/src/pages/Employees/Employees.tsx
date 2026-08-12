import {

    Typography,

    Pagination,

    Box,

    CircularProgress

} from "@mui/material";

import {

    useState

} from "react";

import EmployeeToolbar from "./components/EmployeeToolbar";

import EmployeeTable from "./components/EmployeeTable";

import {

    useEmployees

} from "./hooks/useEmployees";

import EmployeeDialog from "./dialogs/EmployeeDialog";

const Employees = () => {

    const [

        page,

        setPage

    ] = useState(1);

    const [

        search,

        setSearch

    ] = useState("");

    const [

        openDialog,

        setOpenDialog

    ] = useState(false);

    const {

        data,

        isLoading

    } = useEmployees(

        page,

        5,

        search

    );

    if (isLoading) {

        return (

            <Box

                display="flex"

                justifyContent="center"

                alignItems="center"

                minHeight="60vh"

            >

                <CircularProgress />

            </Box>

        );

    }

    return (

        <>

            <Typography

                variant="h4"

                fontWeight="bold"

                mb={3}

            >

                Employees

            </Typography>

            <EmployeeToolbar

                search={search}

                onSearchChange={setSearch}

                onAddEmployee={() =>

                    setOpenDialog(true)

                }

            />

            <EmployeeTable

                employees={

                    data?.employees || []

                }

            />

            <Box

                display="flex"

                justifyContent="center"

                mt={3}

            >

                <Pagination

                    page={page}

                    count={

                        data?.pagination.totalPages || 1

                    }

                    onChange={(

                        _,

                        value

                    ) =>

                        setPage(value)

                    }

                />

            </Box>

            <EmployeeDialog

                open={openDialog}

                onClose={() =>

                    setOpenDialog(false)

                }

            />

        </>

    );

};

export default Employees;