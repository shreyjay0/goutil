export const getUserDetail = (): any => {
  const owner_data_up = window.localStorage.getItem("owner");
  const owner_data = JSON.parse(owner_data_up ? owner_data_up : "{}");
  return owner_data;
};
