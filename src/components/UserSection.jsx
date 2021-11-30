/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Component ------------------------------- */
    import User from './User.jsx';
/* -------------------------------------------------------------------------- */

/* --------------------------------- Native --------------------------------- */
    import {useEffect, useState} from 'react';
/* -------------------------------------------------------------------------- */

/* --------------------------- 3rd Party Libraries -------------------------- */
    import axios from 'axios';
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

function UserSection(){
    /* -------------------------------------------------------------------------- */
    /*                                   States                                   */
    /* -------------------------------------------------------------------------- */
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                   Effects                                  */
    /* -------------------------------------------------------------------------- */
        // * Fetching datas and pushing them into the user state
        useEffect(() => {
            // ! setTimeOut is for the indicator test.
            setTimeout(() => {
                axios('https://jsonplaceholder.typicode.com/users')
                .then(response => setUsers(response.data))
                .catch(error => console.log(error))
                .finally(setLoading(false))
            }, 3000);
        }, []);
    /* -------------------------------------------------------------------------- */

    return (
        <section className="user-section">
            {
                loading &&
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            }
            {
                users.map(user => (
                    <User key={user.id} user={user}></User>
                ))
            }
        </section>
    )
}

export default UserSection;