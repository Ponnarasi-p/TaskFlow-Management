import { useQuery } from "@tanstack/react-query";

import {

    getRecentTasks

} from "../../../services/dashboardService";

export const useRecentTasks = () => {

    return useQuery({

        queryKey: ["recent-tasks"],

        queryFn: getRecentTasks

    });

};