export const PROJECTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const projectsAPI = {
    fetchProjects: async (page = 1) => {
        const res = await fetch(`${PROJECTS_API_URL}?_page=${page}&_limit=10`);
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        return {
            projects: data,
            hasMore: data.length === 10,
        };
    },
    fetchInfiniteProjects: async ({ pageParam = 1 }) => {
        const res = await fetch(`${PROJECTS_API_URL}?_page=${pageParam}&_limit=10`);
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        return {
            data,
            nextCursor: data.length < 10 ? undefined : pageParam + 1,
        };
    }
};
