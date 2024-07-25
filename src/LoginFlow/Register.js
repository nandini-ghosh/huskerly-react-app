import './style.css';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Register() {
    // const location = useLocation();
    // const userData = location.state.userData
    // const userAtts = location.state.userAtts

    // console.log(userData)
    // console.log(userAtts)

    return (
        <body id="white-background">
            <div className='contents-center'>
                <div className='user-icon-xl'><FaUserCircle /></div>
                <div className='caption-wrapper'>
                    {/* <div className='caption-text username'> Welcome {userData.username}! </div>
                    <div className='caption-text email'> { userAtts.email } </div> */}

                    <div className='caption-text username'> Welcome Jane Doe! </div>
                    <div className='caption-text email'> janedoe@company.com </div>
                </div>
                <div className='organization-list-wrapper'>
                    <div className='caption-text'>Group Name</div>
                    <input id="groupname" className='input-field wd-large' type='text' placeholder='Enter a name for your group...'></input>
                </div>
                <Link to="/registration-confirmation"><div className='button-black wd-large spacing-large'>Register group</div></Link>
                <Link to="/join"><div className='link-text'>Join an existing group instead</div></Link>
            </div>
        </body>
    );
}

export default Register;