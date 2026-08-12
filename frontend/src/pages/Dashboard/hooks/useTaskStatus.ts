import { useQuery } from "@tanstack/react-query";

import {

    getTaskStatus

} from "../../../services/dashboardService";

export const useTaskStatus = () => {

    return useQuery({

        queryKey: ["task-status"],

        queryFn: getTaskStatus

    });

};