import api from "../api/axios";

import type { DashboardSummary } from "../types/dashboard";

export const getDashboardSummary = async (): Promise<DashboardSummary> => {

    const response =
        await api.get("/dashboard/summary");

    return response.data.data;

};

export const getTaskStatus = async () => {

    const response =
        await api.get("/dashboard/task-status");

    return response.data.data;

};

export const getTaskPriority = async () => {

    const response =
        await api.get("/dashboard/task-priority");

    return response.data.data;

};

export const getRecentTasks = async () => {

    const response =
        await api.get("/dashboard/recent-tasks");

    return response.data.data;

};

export const getRecentComments = async () => {

    const response =
        await api.get("/dashboard/recent-comments");

    return response.data.data;

};