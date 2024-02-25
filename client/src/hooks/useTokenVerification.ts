// useTokenVerification.ts
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Store } from '../store';

interface TokenVerificationState {
  loading: boolean;
  isValidToken: boolean | null;
}

const useTokenVerification = (): TokenVerificationState => {
  const [loading, setLoading] = useState(true);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const { userInfo } = state;


  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Make a request to the backend to verify the token
        const response = await axios.get('/api/verifyToken',
        {headers: { authorization: `Bearer ${userInfo.token}` }
      });
        // If token is valid, set isValidToken to true
        setIsValidToken(true);
      } catch (error) {
        // If token is invalid or request fails, set isValidToken to false
        setIsValidToken(false);
      } finally {
        // Set loading to false once token verification is completed
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  return { loading, isValidToken };
};

export default useTokenVerification;
