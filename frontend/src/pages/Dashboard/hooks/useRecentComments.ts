import { useQuery } from "@tanstack/react-query";

import {

    getRecentComments

} from "../../../services/dashboardService";

export const useRecentComments = () => {

    return useQuery({

        queryKey: ["recent-comments"],

        queryFn: getRecentComments

    });

};