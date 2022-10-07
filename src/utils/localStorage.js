export const addUserToLocalStorage = (user) => {
  localStorage.setItem('userJobster', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('userJobster');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('userJobster');
  const user = result ? JSON.parse(result) : null;
  return user;
};
