import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router';


const Privacy = ({children}) => {
  const [cookie]=useCookies(['token']);
  const {token}=cookie;
  if(!token){
    return <Navigate to="/Login"/>
  }
  return children;
}

export default Privacy
