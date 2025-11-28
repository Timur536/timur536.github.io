import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setPassword('');
    setUsername('');
  }, [isRegisterMode]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users')) || {}

    if (isRegisterMode) {

      if (!username || !password) {
        Swal.fire({
          text: "Заполните пустые поля",
          icon: "warning",
          backdrop: false,
          customClass: {
            popup: 'my-popup',
            title: 'my-title',
            confirmButton: 'my-button',
          }
        });
        return
      }

      if (password.length < 6 || /^\d+$/.test(password)) {
        Swal.fire({
          text: 'Пароль должен быть не короче 6 символов и содержать хотя бы одну букву ',
          icon: "warning",
          backdrop: false,
          customClass: {
            popup: 'my-popup',
            title: 'my-title',
            confirmButton: 'my-button',
          }
        });
        return
      }

      if (users[username]) {
        Swal.fire({
          text: 'Такой пользователь уже существует',
          icon: "warning",
          backdrop: false,
          customClass: {
            popup: 'my-popup',
            title: 'my-title',
            confirmButton: 'my-button',
          }
        });

        return
      }



      users[username] = password
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('auth', username)
      onLogin()
      navigate('/')
    } else {
      // 🔵 ВХОД
      if (!users[username] || users[username] !== password) {
        Swal.fire({
          text: 'Неверный логин или пароль',
          icon: "warning",
          backdrop: false,
          customClass: {
            popup: 'my-popup',
            title: 'my-title',
            confirmButton: 'my-button',
          }
        });

        return
      }

      localStorage.setItem('auth', username)
      onLogin()
      navigate('/')
    }
  }

  return (
    <form className='registration' onSubmit={handleSubmit}>
      <h2>{isRegisterMode ? 'Регистрация' : 'Вход'}</h2>
      <input
        className='registration__input'
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='registration__input'
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' type="submit">{isRegisterMode ? 'Зарегестрироваться' : 'Войти'}</button>
      <p>
        {isRegisterMode ? ' Есть аккаунт?' : 'Нет аккаунта?'}{' '}
      </p>
      <button className='button' type='button' onClick={() => setIsRegisterMode(!isRegisterMode)}>
        {isRegisterMode ? 'Войти' : 'Перейти к регистрации'}
      </button>
    </form>

  )
}

export default LoginPage