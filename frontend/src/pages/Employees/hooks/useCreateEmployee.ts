import {

    useMutation,

    useQueryClient

} from "@tanstack/react-query";

import {

    createEmployee

} from "../../../services/employeeService";

export const useCreateEmployee = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createEmployee,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["employees"]

            });

        }

    });

};