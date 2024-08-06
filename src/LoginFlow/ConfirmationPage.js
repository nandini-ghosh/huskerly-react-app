import './style.css';

function ConfirmationPage() {
    document.body.setAttribute("id", "white-background");
    
    return (
            <div className='contents-center'>
                <div className='dialogue-box'>
                    <div className='dialogue-box-content'>
                        <div className='dialogue-box-text'>
                        Thank you for registering! 
                        <br></br>
                        Once our system administration approves your group, you can start adding teams and members
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ConfirmationPage;