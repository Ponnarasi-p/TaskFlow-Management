import { useQuery } from "@tanstack/react-query";

import { getEmployees } from "../../../services/employeeService";

export const useEmployees = (

    page: number,

    limit: number,

    search: string

) => {

    return useQuery({

        queryKey: [

            "employees",

            page,

            limit,

            search

        ],

        queryFn: () =>

            getEmployees(

                page,

                limit,

                search

            )

    });

};