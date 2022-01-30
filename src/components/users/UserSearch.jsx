import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContex";

function UserSearch() {
    const [text, setText] = useState('')
    const {users, setUsers, searchUsers} = useContext(GithubContext)


    const handleChange = (event) => {
        setText(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        if(text === ''){
            alert("Please, enter something")
        } else {
            searchUsers(text)
            setText('')
        }
    }

    const handleClear = () => {
        setUsers([])
    }


    return (  
        <div className="form-control mb-12 w-3/12">
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search github user profile" 
                        className="w-full pr-16 input input-primary input-bordered"
                        value={text} 
                        onChange={handleChange} /> 
                        <div className="absolute btn-group top-0 right-0">
                            <button className="rounded-l-none btn btn-primary">go</button>
                            {users.length > 0 && (
                                <div>
                                <button className="rounded-l-none btn btn-secondary" onClick={handleClear}>Clear</button>
                            </div>)}
                        </div>
                </div>

            </form>

        </div>)
}

export default UserSearch;
