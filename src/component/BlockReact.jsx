import React, { useState} from 'react';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';


const BlockReact = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [array, setArray] = useState([
        email,
        password
    ]);

    function arrayEmail(e){
        setEmail(e.target.value);
        setArray([e.target.value, password])
    }

    function arrayPassword(p) {
        setPassword(p.target.value);
        setArray([email, p.target.value])
    }
 
    function loginButton() {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let checkEmail = re.test(String(email).toLowerCase());
        let regx = /[а-яА-ЯЁё]/.test(password);
        
        console.log(regx)
        for(let i = 0; i < array.length; i++){
            if(checkEmail === false){
                setEmailError(true)
            } else {
                setEmailError(false)
            }
            if(array[1] === '' || regx === true || array[1].length < 8){
                setPasswordError(true)
            } else {
                setPasswordError(false)
            }
            console.log(array)
        }
    }

    function form(e){
        e.preventDefault()
    }

    return (
        <div className='to_come_in'>
           <div style={{marginTop: '150px'}}>
                <p>Добро пожаловать</p>
                <h1>Simple Hotel Check</h1>
           </div>
           <div>
               <form onSubmit={form} 
                    style={{display: 'flex',
                            flexDirection: 'column'
                    }}>
                    <Input
                        value={email}
                        name='email'
                        type="text" 
                        placeholder="Логин"
                        onChange={email => arrayEmail(email)}
                        />
                   <Input 
                        style={{marginTop:'16px'}}
                        value={password}
                        name='password'
                        type="password" 
                        placeholder="Пароль" 
                        onChange={p => arrayPassword(p)}
                        />
                    {(emailError || passwordError) &&  <span>Неверный логин или пароль. Повторите попытку</span>}
                    <Button onClick={loginButton}>Вход</Button>
               </form>
           </div>
        </div>
    );
};

export default BlockReact;


