import React, { FC, useState, useContext } from "react";
import Auth0 from "react-native-auth0";
import { createCtx } from "../../hooks/createCtx";
import Config from "react-native-config";

const auth0 = new Auth0({
  domain: Config.AUTH_DOMAIN,
  clientId: Config.AUTH_CLIENT_ID
});

export const [Auth0Context, Auth0ContextProvider] = createCtx<
  ReturnType<typeof useContextValue>
>();

const useAuthState = () => {
  return useState({
    accessToken: null,
    idToken: null,
    expiresAt: 0
  });
};

const useContextValue = () => {
  const [authState, updateAuthState] = useAuthState();
  return {
    auth0: auth0,
    authState,
    updateAuthState
  };
};

export const Auth0Provider: FC = ({ children }) => {
  const value = useContextValue();
  return <Auth0ContextProvider value={value}>{children}</Auth0ContextProvider>;
};
