import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionIp } from '../features/session/sessionSlice';

const SessionManager = ({ children }) => {
  const dispatch = useDispatch();
  const { userIp } = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getSessionIp());
  }, [dispatch]);

  useEffect(() => {
    console.log(userIp);
  }, [userIp]);

  return children;
};

export default SessionManager;
