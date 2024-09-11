import React from "react";
import Home from '../components/home/Home'

export {Home}

export const TaskLists = React.lazy(()=> import('../components/tasks-list/tasks-list'))
export const Users = React.lazy(()=> import('../components/users/users'))