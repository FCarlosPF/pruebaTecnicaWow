import { Home, TaskLists, Users } from "./pages";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/todos',
        element: <TaskLists/>
    },
    {
        path: '/users',
        element: <Users/>
    }
]