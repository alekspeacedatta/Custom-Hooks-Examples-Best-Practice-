import { useFetch } from "../hooks/useFetch"
import React from "react"
interface User { 
    id: number,
    name: string,
    email: string
}
const UserList: React.FC = () => {
    const {data: users, loading, error} = useFetch<User>("https://jsonplaceholder.typicode.com/users");
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users?.map(user => (
                <li key={user.id}>
                    <strong>{user.name}</strong> ({user.email})
                </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList