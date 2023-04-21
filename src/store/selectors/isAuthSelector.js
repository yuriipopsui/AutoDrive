
export const isAuthSelector = (state) => {
  // console.log(state.auth.user?.token);
  // console.log(state.auth.user?.user);
  return state?.auth?.user?.token;
}
export const isAuthSelectorUser = (state) => {
  // console.log(state.auth.user?.token);
  // console.log(state.auth.user?.user);
  return state?.auth?.user?.user;
} 