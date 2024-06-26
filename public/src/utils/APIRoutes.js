// export const host = "https://quirk-chat.onrender.com";
export const host = "http://localhost:5000";

export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const setStatusRoute = `${host}/api/messages/setStatus`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
export const firebaseLoginRoute = `${host}/api/auth/firebaselogin`;
export const checkUserNameRoute = `${host}/api/auth/checkusername`;