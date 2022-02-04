import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCornerDownLeft } from "react-icons/fi";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContex";

function User() {
    const {user, getUser, setUser, loading} = useContext(GithubContext)

    const params = useParams()

    useEffect(() =>{
        getUser(params.login)
    }, [])

    if(loading){
        return <h3 className="text-center"><Spinner /></h3>
    }
    
    return (
        <div className="profile m-auto">
        <div className="avatar">
            <div className="mb-8 rounded-box w-1/2 h-1/2 ring ring-primary ring-offset-base-100 ring-offset-2 bg-primary">
                <h1 className="m-5 text-center text-neutral-focus">{user.login}</h1>
                <p className="text-center text-neutral-focus bg-secondary">{user.name}</p>
                <img src={user.avatar_url} alt="avatar" />
            </div>
            <div className="flex flex-col text-left">
            <div className="ml-5 w-full stats text-white">
                    <Link to='/' className="link link-hover">
                     <FiCornerDownLeft size={30} /> 
                    </Link>  
                </div>
                <div className="p-2 w-full stats">
                    <div className="stat">
                        <div className="stat-title">Followers</div> 
                        <div className="stat-value text-primary">{user.following} 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block ml-2 w-8 h-8 stroke-current">              
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
                            </svg>
                        </div> 
                        <a className="stat-desc text-primary-focus" href={user.html_url}>Profile</a>
                    </div> 
                </div>
                <div className="p-2 w-full stats">
                    <div className="stat">
                        <div className="stat-title">Public repos</div> 
                        <div className="stat-value text-secondary">{user.public_repos}</div>
                    </div> 
                </div>
                {user.location && ( 
                    <div className="p-2 w-full stats">
                        <div className="stat">
                            <div className="stat-title">Location</div>
                            <p className="stat-desc text-primary-focus">{user.location}</p>
                        </div> 
                    </div>
                )}
            </div>
        </div>
        {user.bio && (
        <p className="text-secondary text-justify">
            <p className="text-secondary-focus text-justify">Biography: </p> 
            {user.bio}</p>
        )}
    </div>
  );
}

export default User;
