import {useEffect, useState} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
function UserResults() {
    const apiKey = import.meta.env.VITE_APP_GITHUB_TOKEN
    const apiLink = import.meta.env.VITE_APP_GITHUB_URL

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${apiLink}/users`, {
                headers: {
                    Authorization: `token ${apiKey}`
                }
        })
        const data = await response.json()

        console.log(data)
        setUsers(data)
        setLoading(false)
    }

    if(!loading){
    return (
        <div className='text-white grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
                ))} 
                
        </div>
    )
    } else {
        return <Spinner />
    }
}

export default UserResults
