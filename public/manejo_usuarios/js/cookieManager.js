// Una función para poner un token en una cookie HTTP-only
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name +
    "=" +
    (value || "") +
    expires +
    "; path=/; secure; samesite=strict; HttpOnly";
}

//Extrae el valor de una cookie
function getCookie(name) {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

//Extrae el token del header de autorización y lo retorna
function extractTokenFromHeader(authorizationHeader) {
  const token = authorizationHeader.split(" ")[1];
  return token;
}

module.exports = { setCookie, extractTokenFromHeader };
