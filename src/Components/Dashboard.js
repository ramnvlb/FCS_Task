import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './style.css'




const Dashboard = () => {
    const location = useLocation();
    const [user, setUserDetails] = useState([])

    useEffect(() => {
        console.log(location.pathname);        
        console.log(location.state.details);   
        setUserDetails(location.state.details);

    }, [location]);

    return (
        <div>
            <div className="dashboard">
                <h1 className="title">Welocome To User List</h1>
                <div className="order-list">
                    <ul className="ul-section">
                        <li className="li-section">
                            <div className="main-table-s">
                                <div>
                                    Waiting Days
                                </div>
                                <div>
                                    Full Name
                                </div>
                                <div>
                                    Invite Code
                                </div>
                            </div>
                        </li>
                        {
                            user.map((list, index) => {
                                return (
                                    <li className="list-section" key={index}>
                                        <div className="main-table-s">
                                            <div>
                                                {index+1}
                                            </div>
                                            <div>
                                                {list.userName}
                                            </div>
                                            <div>
                                                {list.inviteCode}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

        </div>
    )
}



export default Dashboard;