import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Lock, UserAdmin, Mail } from 'grommet-icons';

import { registerUserAction, loginUserAction } from '../../../features/user/userActions';

function Login() {
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState('login');
  const {
    register: setLoginInput,
    handleSubmit: handleSubmitLogin,
    formState: formStateLogin,
    reset: resetLoginInputs
  } = useForm();

  const {
    register: setRegisterInput,
    handleSubmit: handleSubmitRegister,
    formState: formStateRegister,
    reset: resetRegisterInputs
  } = useForm();

  const onSubmitLogin = (data) => {
    dispatch(loginUserAction(data));
    resetLoginInputs();
  };

  const onSubmitRegister = async (data) => {
    const isSuccessful = await dispatch(registerUserAction(data));
    if (isSuccessful) setOpenForm('login');
    resetRegisterInputs();
  };

  const handleSetLoginForm = () => {
    setOpenForm('login');
    resetLoginInputs();
  };
  const handleSetRegisterForm = () => {
    setOpenForm('register');
    resetRegisterInputs();
  };

  const renderLogin = () => {
    return (
      <form id="login_form" onSubmit={handleSubmitLogin(onSubmitLogin)}>
        <h1 className="Title-Text mb-20">Sign in</h1>
        <div className="Textfield-With-Icon w-70">
          <Mail />
          <input
            type="email"
            placeholder="Type your email"
            {...setLoginInput('user_email', { required: true })}
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            placeholder="Type your password"
            {...setLoginInput('user_password', { required: true })}
          />
        </div>
        <button
          type="submit"
          className="Button Button__Primary Button__Lg w-70 mt-20"
          form="login_form"
          disabled={formStateLogin.isSubmitting}
        >
          Sign in
        </button>
        <p className="Link-Text mt-30" onClick={handleSetRegisterForm}>
          Or create an account here.
        </p>
      </form>
    );
  };

  const renderRegister = () => {
    return (
      <form id="register_form" onSubmit={handleSubmitRegister(onSubmitRegister)}>
        <h1 className="Title-Text mb-20">Sign up</h1>
        <div className="Textfield-With-Icon w-70">
          <UserAdmin />
          <input
            type="text"
            placeholder="Type your name"
            {...setRegisterInput('user_name', { required: true })}
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Mail />
          <input
            type="email"
            placeholder="Type your email"
            {...setRegisterInput('user_email', { required: true })}
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            placeholder="Type your password"
            {...setRegisterInput('user_password', { required: true })}
          />
        </div>
        <div className="Textfield-With-Icon w-70 mt-10">
          <Lock />
          <input
            type="password"
            placeholder="Confirm your password"
            {...setRegisterInput('confirm_password', { required: true })}
          />
        </div>
        <button
          type="submit"
          className="Button Button__Primary Button__Lg w-70 mt-20"
          form="register_form"
          disabled={formStateRegister.isSubmitting}
        >
          Sign up
        </button>
        <p className="Link-Text mt-30" onClick={handleSetLoginForm}>
          Already have an account?
        </p>
      </form>
    );
  };

  const render = () => {
    return (
      <div className="Access-Layout__Card-Content">
        {openForm === 'login' && renderLogin()}
        {openForm === 'register' && renderRegister()}
        <div className="flex flex-1 align-center justify-center bg-primary">
          <h1 className="display-1 fw-bolder text-center text-white">
            Start with Todoizer
          </h1>
        </div>
      </div>
    );
  };

  return render();
}

export default Login;