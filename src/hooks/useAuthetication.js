import React from "react";
import { useFetch, useLocalStorage } from "hooks"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AUTH_TOKEN, USER } from "constants/Localstorage.constants";

/**
 * @returns  
 * session 
 * login 
 * verifyToken
 * token
 * forget-password
 * isLoading
 * 
 */

export const useAuth = () => {
  // const navigate = useNavigate();
  const [error, SetError] = React.useState(null)
  const { getLocalStorage,
    setLocalStorage } = useLocalStorage();
  const onSuccess = React.useCallback((data) => {
    let response = data?.response
    if (response?.token) {
      setLocalStorage(AUTH_TOKEN, response?.token);
      setLocalStorage(USER, response?.user);
      toast.success(response?.message);
      window.location.href = "/admin/home"
      // navigate("/admin/home");
    }
    else {
      toast.success(response?.message);
      // navigate('/verify-otp');
    }
  }, [ setLocalStorage]);
  const onFailure = React.useCallback((error) => {
    if (error) {
      toast.error(error);
      SetError(error)
    }
  }, []);

  const session = React.useCallback(() => {
    return getLocalStorage(AUTH_TOKEN) ?? false;
  }, [getLocalStorage]);
  const userValue = React.useMemo(() => {
    return getLocalStorage(USER);
  }, [getLocalStorage]);


  const { isLoading, callFetch } = useFetch({
    initialUrl: "/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });



  const login = React.useCallback((data) => {
    const formData = new FormData();
    formData.append("username", data.email);
    formData.append("password", data.password);
    callFetch({
      url: "/login/",
      method: "post",
      data: data
    });
  }, [callFetch])




  const logout = React.useCallback(() => {
    if (window !== undefined) {
      // callFetch({
      //   url: "/logout",
      //   method: "post",
      // });
      localStorage.clear();
      window.location.reload();
      toast.success("Logout successfully ")
    }
  }, [callFetch])

  return {
    session,
    userValue,
    logout,
    login,
    isLoading,
    error
  }
}



