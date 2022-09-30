import { useContext } from "react"
import { Link } from "react-router-dom"
import {UserContext}from '../contexts/Users'

function Header () {
    const {loggedInUser, isLoggedIn, setLoggedInUser} = useContext(UserContext)
  

    
    const handleLogOut = () => {
        setLoggedInUser({})
    }

    return (
        <header>
        <h1 className="element"> The 'Board' Gamer </h1>
        {!isLoggedIn ? <Link to={'/users'}><button>Log in</button></Link> : <button onClick={handleLogOut}>Log out?</button> }
        
            {isLoggedIn ? <section>
            <img
            className="profile_img"
            src={`${loggedInUser.avatar_url}`}
            alt={`avatar for ${loggedInUser.username}`}/>
            <p>{`${loggedInUser.username}`}</p>
        </section> : <p>Please log in</p>}
        
        </header>
    )
}

export default Header