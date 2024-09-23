import { createContext, useContext, useEffect, useState } from 'react';

import { getAuthorizationToken, setAuthorizationToken } from '../functions/connections/auth';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  type: NotificationType;
  message: string;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);
  const token = getAuthorizationToken();

  const setAccessToken = (accessToken: string) => {
    setAuthorizationToken(accessToken);

    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  useEffect(() => {
    if (token) setAccessToken(token);
  }, [token]);

  const setNotification = (type: NotificationType, message: string, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        type,
        message,
        description,
      },
    });
  };

  return {
    notification: globalData?.notification,
    setNotification,
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
