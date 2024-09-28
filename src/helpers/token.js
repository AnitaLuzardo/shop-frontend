export const getToken = () => {
  const user = localStorage.getItem('user')

  if (user) {
    const token = JSON.parse(user);
    return token.access_token;
  }

  return null;
}