import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import {
    useState
} from "react";

import EmployeeForm from "../components/EmployeeForm";

import { CreateEmployeeRequest } from "../../../types/employee";

import { useCreateEmployee } from "../hooks/useCreateEmployee";

interface Props {

    open: boolean;

    onClose: () => void;

}

const EmployeeDialog = ({
    open,
    onClose
}: Props) => {

    const createEmployee =
        useCreateEmployee();

    const [employee, setEmployee] =
        useState<CreateEmployeeRequest>({

            name: "",

            email: "",

            password: "",

            role: "EMPLOYEE"

        });

    const handleChange = (

        field: keyof CreateEmployeeRequest,

        value: string

    ) => {

        setEmployee((prev) => ({

            ...prev,

            [field]: value

        }));

    };

    const handleSave = () => {

        createEmployee.mutate(employee, {

            onSuccess: () => {

                onClose();

                setEmployee({

                    name: "",

                    email: "",

                    password: "",

                    role: "EMPLOYEE"

                });

            }

        });

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                Add Employee

            </DialogTitle>

            <DialogContent>

                <EmployeeForm

                    employee={employee}

                    onChange={handleChange}

                />

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >

                    Cancel

                </Button>

                <Button
                    variant="contained"
                    onClick={handleSave}
                    disabled={createEmployee.isPending}
                >

                    Save

                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default EmployeeDialog;