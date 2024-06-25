import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { USER_LOGIN, USER_POST } from "../../redux-toolkit/API-URL";
import { postData } from "../../redux-toolkit/Slice/bookslice";

const Signbutton = ({ orderPopup, setOrderPopup }) => {

  const [inputmodel, setinputmodel] = useState(false);

  const togglebutton = () => {
    setinputmodel(!inputmodel);
  };

  let name = useRef();
  let email = useRef();
  let password = useRef();
  let dispatch = useDispatch();

  let signdata = () => {
    let data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    };
    dispatch(postData({
      payload: data,
      endpoint: USER_POST,
      dataType: "user",
    }));
    name.current.value = "",
      email.current.value = "",
      password.current.value = ""
  };

  let username = useRef();
  let userpassword = useRef();

  let logindata = () => {

    let userdata = {
      username: username.current.value,
      password: userpassword.current.value
    };
    dispatch(postData({
      payload: userdata,
      endpoint: USER_LOGIN,
      dataType: "login",
    }));
    username.current.value = "",
    userpassword.current.value = ""


  }

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {inputmodel ?
              <>
                {/* header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1>User Sign up </h1>
                  </div>
                  <div>
                    <IoCloseOutline
                      className="text-2xl cursor-pointer "
                      onClick={() => setOrderPopup(false)}
                    />
                  </div>
                </div>
                {/* Body */}
                <div className="mt-4">
                  <input
                    type="text" placeholder="Name" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" ref={name} />
                  <input
                    type="email" placeholder="email" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" ref={email} />
                  <input
                    type="text" placeholder="Password" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" ref={password} />
                  <button className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-primary px-2 py-1 mb-4 bg-primary" onClick={signdata}>Sign in</button>
                </div>
              </>
              :
              <>
                {/* header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1>User Login up </h1>
                  </div>
                  <div>
                    <IoCloseOutline
                      className="text-2xl cursor-pointer "
                      onClick={() => setOrderPopup(false)}
                    />
                  </div>
                </div>
                {/* Body */}
                <div className="mt-4">
                  <input
                    type="text" placeholder="User Name" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" ref={username} />
                  <input
                    type="text" placeholder="Password" className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4" ref={userpassword} />
                  <button className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-primary px-2 py-1 mb-4 bg-primary" onClick={logindata}>Login in</button>
                </div>
              </>
            }

            {/* button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full " onClick={togglebutton}>
                {inputmodel ? 'Login' : 'Sign'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signbutton;