import { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { z } from 'zod';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const [Logged, setLogged] = useState(false);

    const schema = z.object({
        email: z.string().email({ message: 'Email é valido' }),
        password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
    });


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateForm(value, password)
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validateForm(email, value)
    }

    const validateForm = () => {
        try {
            schema.parse({ email, password });
            setValid(true)
        } catch (error) {
            console.error(error)
            setValid(false)
        }
    }

    const handleSubmit = () => {
        if (valid) {
            setLogged(true)
            alert('Login realizado com sucesso')
        } else {
            alert('Os dados estão incorretos')
        }
    }

    return (
        <div className='divFundo'>
            <div className='loginContainer'>
                <h1>User Login</h1>
                <input
                    type='email'
                    placeholder='e-mail'
                    className='input'
                    value={email}
                    onChange={handleEmailChange}
                />
                <br></br>
                <input
                    type='password'
                    placeholder='Senha'
                    className='input'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br></br>
                <Button
                    className='button'
                    onClick={handleSubmit}
                >Avançar</Button>
                {Logged && (
                    <Button className='button'>
                        <Link to={`/list`}>Entre</Link>
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Login;