import { UserData } from '../types';
import { useForm } from "react-hook-form";
import '../styles/UserForm.sass'
interface UserFormProps {
    onSubmit: (data: UserData) => void;
    onClose: (bool: boolean) => void;
}

const UserForm = ({ onSubmit, onClose }: UserFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='userForm'>
            <button className='userForm__closeBtn' onClick={() => onClose(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M23.7072 0.293153C23.5196 0.105682 23.2653 0.000366211 23.0002 0.000366211C22.735 0.000366211 22.4807 0.105682 22.2932 0.293153L12.0002 10.5862L1.70715 0.293153C1.51963 0.105682 1.26532 0.000366211 1.00015 0.000366211C0.734988 0.000366211 0.48068 0.105682 0.293153 0.293153C0.105682 0.48068 0.000366211 0.734988 0.000366211 1.00015C0.000366211 1.26532 0.105682 1.51963 0.293153 1.70715L10.5862 12.0002L0.293153 22.2932C0.105682 22.4807 0.000366211 22.735 0.000366211 23.0002C0.000366211 23.2653 0.105682 23.5196 0.293153 23.7072C0.48068 23.8946 0.734988 23.9999 1.00015 23.9999C1.26532 23.9999 1.51963 23.8946 1.70715 23.7072L12.0002 13.4142L22.2932 23.7072C22.4807 23.8946 22.735 23.9999 23.0002 23.9999C23.2653 23.9999 23.5196 23.8946 23.7072 23.7072C23.8946 23.5196 23.9999 23.2653 23.9999 23.0002C23.9999 22.735 23.8946 22.4807 23.7072 22.2932L13.4142 12.0002L23.7072 1.70715C23.8946 1.51963 23.9999 1.26532 23.9999 1.00015C23.9999 0.734988 23.8946 0.48068 23.7072 0.293153Z" fill="#374957"/>
                </svg>
            </button>
            <h2>Enter your data!</h2>
                <ul className='userForm__inputsWrap'>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input 
                         {...register("name", { required: "Name is required" })} 
                            id='name'
                            type="text" 
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="phone">Phone number</label>
                        <input 
                         {...register("phone", { required: "Phone is required" })} 
                            type="tel" 
                            id='phone'
                        />
                         {errors.phone && <p className="error">{errors.phone.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input 
                            {...register("email", { required: "Email is required" })} 
                            id='email' 
                            type="email" 
                        />
                         {errors.email && <p className="error">{errors.email.message}</p>}
                    </li>
                </ul>
            <button type="submit" className='userForm__submitBtn'>Send</button>
            </form>
    );
};

export default UserForm;