import { useQuery } from "@tanstack/react-query";

import {

    getTaskPriority

} from "../../../services/dashboardService";

export const useTaskPriority = () => {

    return useQuery({

        queryKey: ["task-priority"],

        queryFn: getTaskPriority

    });

};