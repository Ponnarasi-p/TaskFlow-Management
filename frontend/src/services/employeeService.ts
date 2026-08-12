import api from "../api/axios";

import type { EmployeeListResponse } from "../types/employee";

export const getEmployees = async (

    page = 1,

    limit = 5,

    search = ""

): Promise<EmployeeListResponse> => {

    const response = await api.get(

        "/employees",

        {

            params: {

                page,

                limit,

                search

            }

        }

    );

    return response.data.data;

};

export const createEmployee = async (employee: {

    name: string;

    email: string;

    password: string;

    role: string;

}) => {

    const response = await api.post(

        "/employees",

        employee

    );

    return response.data.data;

};