import React, { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "../types/User";
import { axios } from "../utils/axios";
import { BEARER } from "../utils/constants";
import { getToken } from "../utils/localStorageHelper";

type Props = {
  children?: React.ReactNode;
};
const AuthProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token: string) => {
    setIsLoading(true);
    console.log('sad');
    
    try {
      const { data } = await axios.get(`/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const { id } = data;
      setUserData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user: User) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user: userData, setUser: handleUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
