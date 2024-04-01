export function appendHeader() {
  const token = "Bearer " + localStorage.getItem("token");
  if (token) {
    const headers = new Headers();
    headers.append("Authorization", token);
    return headers;
  }
}
