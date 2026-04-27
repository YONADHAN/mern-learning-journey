import React from 'react';
import useFetch from './useFetch';

const Users = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error:{error}</p>
    }

    return (
        <div>
            {
                data && data.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </div>
    )
}


export default Users;