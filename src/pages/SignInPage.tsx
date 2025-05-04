import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/SignInPage.sass'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../hooks/AuthContext';
import { UserData } from '../types';

export const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();
  const [loading, setLoading] = useState<boolean>(false);
  const {login} = useAuth();
  const navigate = useNavigate();
  function onRegister(data: UserData) {
    setLoading(true);
    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка при реєстрації');
        }
        return response.json();
      })
      .then(result => {
        console.log('Успішно зареєстровано:', result);
        toast.success('Успішна авторизація!')
        localStorage.setItem('accessToken', result.token)
        login(data);
        setTimeout(()=> {
          navigate('/home')
        }, 1000)
      })
      .catch(error => {
        console.error('Помилка:', error);
      })
      .finally(() => setLoading(false));
  }
  
  return (
    <div className="auth-container">    
    <ToastContainer aria-label={undefined} />
    <div className='errors col-9'>
      {errors.phone && <p className="error">{errors.phone.message}</p>}
      {errors.name && <p className="error">{errors.name.message}</p>}
      {errors.email && <p className="error">{errors.email.message}</p>}
    </div>
      <h2 className='auth-container__title'>Register</h2>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="form-group ">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone number is required (+380...)"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: 'Невірний формат номера (+380...)',
                },
              })}
            />            
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              {...register('name', {
                required: 'Name is required',
                minLength: 4
              })}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="*****@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format',
              },
            })}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary mt-3" 
            disabled={loading}
          >
            {loading ? 'Відправка...' : 'Зареєструватись'}
          </button>
        </form>
    </div>
  );
};

