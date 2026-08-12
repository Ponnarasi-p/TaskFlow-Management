export interface Employee {

    id: number;

    name: string;

    email: string;

    role: "ADMIN" | "EMPLOYEE";

    createdAt: string;

}

export interface EmployeePagination {

    page: number;

    limit: number;

    totalRecords: number;

    totalPages: number;

}

export interface EmployeeListResponse {

    employees: Employee[];

    pagination: EmployeePagination;

}

export interface CreateEmployeeRequest {

    name: string;

    email: string;

    password: string;

    role: "ADMIN" | "EMPLOYEE";

}