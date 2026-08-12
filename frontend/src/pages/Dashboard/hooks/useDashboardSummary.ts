import { useQuery } from "@tanstack/react-query";

import {

    getDashboardSummary

} from "../../../services/dashboardService";

export const useDashboardSummary = () => {

    return useQuery({

        queryKey: ["dashboard-summary"],

        queryFn: getDashboardSummary

    });

};