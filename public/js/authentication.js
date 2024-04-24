export function authHeader() {
  const token = "Bearer " + localStorage.getItem("token");
  return token;
}
