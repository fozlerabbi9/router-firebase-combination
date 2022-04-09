import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../CustomeHooks/useFireBase';
import './Header.css';

const Header = () => {
    const { user , handleSignOut} = useFireBase();
    return (
        <div>
            <h2>this is header file</h2>
            <span>{user?.displayName && user.displayName}</span>

            <nav>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/AboutUs">About Us</Link> </li>
                <li> <Link to="/register">Register</Link> </li>
               

                <li> {
                    user?.uid ? <button onClick={handleSignOut} className='button'>Sign Out</button>
                        :  <Link to="/login">Login</Link>
                } </li>
            </nav>
        </div>
    );
};

export default Header;




