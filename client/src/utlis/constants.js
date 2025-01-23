export const HOST=import.meta.env.VITE_SERVER_URL;


export const AUTH_ROUTES="api/auth";
export const SIGNUP_ROUTE=`${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE=`${AUTH_ROUTES}/login`;
export const GET_USER_ROUTE=`${AUTH_ROUTES}/user-Info`;
export const UPDATE_PROFILE_ROUTE=`${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE=`${AUTH_ROUTES}/add-profile-image`;