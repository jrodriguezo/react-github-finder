import { createContext, useState} from "react";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        
        setUsers(data)
        setLoading(false)
    }

    // Get search users
    const searchUsers = async (text) => {
        setLoading(true)

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()
        
        setUsers(items)
        setLoading(false)
    }

        // Get search user
        const getUser = async (login) => {
            setLoading(true)
    
            const response = await fetch(`${GITHUB_URL}/users/${login}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })

            if(response.status == 404){
                window.location = '/notfound'
            }else{
                const data = await response.json()
                setUser(data)
                setLoading(false)
            }
        }

    return <GithubContext.Provider value={{users, loading, fetchUsers, setUsers, searchUsers, user, getUser}}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext 