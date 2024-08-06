import './style.css';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {
    document.body.setAttribute("id", "white-background");
    
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state?.userData
    const userAtts = location.state?.userAtts

    console.log(userData)
    console.log(userAtts)

    useEffect(() => {
        const input = document.getElementById('groupname');
        const btn = document.getElementById('register-btn');

        if (input && btn) {
            const handleKeyUp = (e) => {
                const value = e.currentTarget.value;
                btn.disabled = value === "";
            };

            input.addEventListener('keyup', handleKeyUp);

            // Cleanup function to remove event listener
            return () => {
                input.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, []);

    // Function to post group name and user email to request organization registration
    async function postRequest(e) {
        e.preventDefault(); // Prevent the form from submitting
        const inputValue = document.getElementById('groupname').value;
        const userEmail = userAtts.email;
        console.log(inputValue);
        console.log(userEmail);
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/org/request`;

        try {
            const response = await fetch(url, {
                //mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ org_name: inputValue, creator_email: userEmail })
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const text = await response.text();
            console.log(text);
            navigate('/registration-confirmation');

        } catch (error) {
            console.error(error.message);
            return null;
        }
    }


    return (
        <body id="white-background">
            <div className='contents-center'>
                <div className='user-icon-xl'><FaUserCircle /></div>
                <div className='caption-wrapper'>
                    <div className='caption-text username'> Welcome {userAtts.name}! </div>
                    <div className='caption-text email'> {userAtts.email} </div>
                </div>
                <form className='organization-list-wrapper' onSubmit={postRequest}>
                    <div className='caption-text'>Group Name</div>
                    <input id="groupname" className='input-field wd-large' type='text' placeholder='Enter a name for your group...'></input>

                    <button id='register-btn' className='button-black wd-large spacing-large' disabled>Register group</button>
                    {/* <Link to="/registration-confirmation"><button id='register-btn' className='button-black wd-large spacing-large' onClick={postRequest} disabled>Register group</button></Link> */}
                </form>
                <Link to="/join" state={{ userData, userAtts }}><div className='link-text'>Join an existing group instead</div></Link>
            </div>
        </body>
    );
}

export default Register;