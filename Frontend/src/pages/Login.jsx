import { useNavigate } from 'react-router-dom';
import '../stylesheet/login.css';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleValidation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/app/user/login", { name: name, password: password });
            message.success("Login Successful");
            console.log(`Success at ${response.data}`);
            navigate('/homepage');
        } catch (err) {
            message.error("Login Failed");
        }
    };

    return (
        <>
            <div className='login_cont'>
                <div className='login_main_cont'>
                    <div className='login_left_cont'>
                        <h1 style={{ fontSize: '30px' }}>World's Best Quiz Application You Will Experience!</h1>
                    </div>
                    <div className='login_right_cont'>
                        <h1 style={{ fontSize: '40px', fontWeight: '500' }}>Login</h1>
                        <form onSubmit={handleValidation}>
                            <label>Username: </label>
                            <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} value={name} />
                            <label>Password: </label>
                            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <button type="submit">Get IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
