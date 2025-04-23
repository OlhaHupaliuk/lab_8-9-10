import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/SignInPage.sass'
import { useNavigate } from 'react-router-dom';

interface FormData {
  fullName: string;
  phoneNumber: string;
}

export const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  function onRegister(data: FormData) {
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
        localStorage.setItem('accessToken', result.token)
        navigate('/home')
      })
      .catch(error => {
        console.error('Помилка:', error);
      })
      .finally(() => setLoading(false));
  }
  
  return (
    <div className="auth-container">
      <h2>Автентифікація за номером телефону</h2>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="form-group mx-auto col-3">
            <label htmlFor="phoneNumber">Номер телефону</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Введіть номер телефону (+380...)"
              {...register('phoneNumber', {
                required: 'Номер телефону обов\'язковий',
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: 'Невірний формат номера (+380...)',
                },
              })}
            />            
            <label htmlFor="fullName">Номер телефону</label>
            <input
              type="text"
              id="fullName"
              placeholder="Введіть ваше ім`я та прізвище"
              {...register('fullName', {
                required: 'Ім`я обов\'язкове',
                minLength: 4
              })}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={loading}
          >
            {loading ? 'Відправка...' : 'Зареєструватись'}
          </button>
        </form>
    </div>
  );
};

