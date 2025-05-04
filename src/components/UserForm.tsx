import { UserData } from '../types';
import { useForm } from "react-hook-form";
import '../styles/UserForm.sass';

interface UserFormProps {
    onSubmit: (data: UserData) => void;
    onClose: (bool: boolean) => void;
}

const UserForm = ({ onSubmit, onClose }: UserFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

    return (
        <div className="modalOverlay" onClick={() => onClose(false)}>
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
                className='userForm'
            >
                <button
                    type="button"
                    className='userForm__closeBtn'
                    onClick={() => onClose(false)}
                >
                    {/* svg іконка */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="..." fill="#374957" />
                    </svg>
                </button>

                <h2>Enter your data!</h2>
                <ul className='userForm__inputsWrap'>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input {...register("name", { required: "Name is required" })} id='name' type="text" />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="phone">Phone number</label>
                        <input {...register("phone", { required: "Phone is required" })} id='phone' type="tel" />
                        {errors.phone && <p className="error">{errors.phone.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input {...register("email", { required: "Email is required" })} id='email' type="email" />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </li>
                </ul>
                <button type="submit" className='userForm__submitBtn'>Send</button>
            </form>
        </div>
    );
};

export default UserForm;
