
import { useNavigate } from 'react-router-dom'
import '../stylesheet/login.css'


const Login=()=>{
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault
        navigate('/')
    }
    return (
        <>
        <div className='login_cont'>
            <div className='login_main_cont'>
                <div className='login_left_cont'>
                    <h1 style={{fontSize:'30px'}}>World's Best Quiz Application You Will Experience!</h1>
                </div>
                <div className='login_right_cont'>
                    <h1 style={{fontSize:'40px',fontWeight:'500'}}>Login</h1>
                    <form onSubmit={handlesubmit}>
                        <label>Username: </label>
                        <input type="text" placeholder="username"/>
                        <label>Passsword: </label>
                        <input type="password" placeholder="password"/>
                        <button type="submit">Get IN</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login