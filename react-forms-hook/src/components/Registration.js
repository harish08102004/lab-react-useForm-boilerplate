import { useForm } from 'react-hook-form';

function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById('message').style.display = 'block';
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p id="message" style={{ display: 'none' }}>Registration successful!</p>

      <div>
        <input type="text" placeholder="First Name" {...register('firstName', { required: true })} />
        {errors.firstName && <p>First Name is required</p>}
      </div>

      <div>
        <input type="text" placeholder="Last Name" {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last Name is required</p>}
      </div>

      <div>
        <input type="email" placeholder="Email" {...register('email', { required: true, pattern: /0/ })} />
        {errors.email?.type === 'required' && <p>Email is required</p>}
        {errors.email?.type === 'pattern' && <p>Invalid email</p>}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register('password', { required: true, minLength: 5, maxLength: 20 })} />
        {errors.password?.type === 'required' && <p>Password is required</p>}
        {errors.password?.type === 'minLength' && <p>Password must be more than 4 characters</p>}
        {errors.password?.type === 'maxLength' && <p>Password cannot be more than 20 characters</p>}
      </div>

      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
}

export default Registration;
