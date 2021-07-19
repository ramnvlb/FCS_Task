import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import useLocalStorage  from './useLocalStorage'


const Signup = () => {
    const history = useHistory()

    const [userName, SetUserName] = useState("")
    const [inviteCode, SetinviteCode] = useState("")
    const [allEntry, setAllEntry] = useLocalStorage("detail",[])
    const [userError, setUserError] = useState("")
    const [countUserWithInviteCode, SetcountUserWithInviteCode] = useState(0)
    const [inviteCodeError, setinviteErorCode] = useState("")


    const onUserMethod = (e) => {
        SetUserName(e.target.value)
        setUserError("")
    }

    const onInviteCodeMethod = (e) => {
        SetinviteCode(e.target.value)
        setinviteErorCode("")
    }

// add user method 
    const addUser = () => {

        if (userName == "") {
            setUserError("Enter User Name")
            return
        }


        const newEntry = { userName: userName, inviteCode: inviteCode }
        const inviteCodeList = ["austin234", "alvin145", "karthik321"];
        if (inviteCode == "") {
            setAllEntry([...allEntry, newEntry]);

           
        }
        else {
            if (inviteCodeList.includes(inviteCode)) {

                SetcountUserWithInviteCode(countUserWithInviteCode + 1)

                allEntry.splice(countUserWithInviteCode, 0, newEntry)
                console.log("*****************", countUserWithInviteCode, newEntry)
                setAllEntry([...allEntry])

            }
            else {
                setinviteErorCode("Please Enter Vailid Invite Code")
            }
        }
     

    }

// go to dashboard  method 
    const goToDashboard = () => {
        if (allEntry.length !== 0) {
            history.push({
                pathname: "/dashboard",
                state: { details: allEntry }
            })
        }
    }

 


    return (
        <div>

            <div className="warpper">
                <section className="main-section">
                    {/* left section start here */}
                    <div className="float-left">
                        <h1 className="title">Add User List</h1>
                        <div className="add-section">
                            <button className="add-btn" onClick={goToDashboard}>Go to Dashboard</button>
                        </div>
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
                                    allEntry.map((currentUser, index) => {
                                        return (
                                            <li className="list-section" key={index}>
                                                <div className="main-table-s">
                                                    <div>
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        {currentUser.userName}
                                                    </div>
                                                    <div>
                                                        {currentUser.inviteCode}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                   {/* left section end here */} 

                    {/* right section start here */}

                    <div className="float-Right">
                        <h1 className="title m-t-m">Signup Order</h1>
                        <div className="signup-section">
                            <input type="text" name="userName"
                                onChange={onUserMethod} value={userName}
                                placeholder="Enter User Name" />
                        </div>
                        <p className="error">{userError}</p>
                        <div className="signup-section">
                            <input type="text" name="inviteCode"
                                onChange={onInviteCodeMethod} placeholder="Enter Invite Code"
                                value={inviteCode} />
                        </div>
                        <p className="error">{inviteCodeError}</p>
                        <div className="add-section">
                            <button className="add-btn" onClick={addUser}>Add User</button>
                        </div>
                    </div>

                {/* right section end here */}
                </section>


            </div>
        </div>
    )
}



export default Signup;