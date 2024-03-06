import { extractTokenFromHeader, setCookie } from "./cookieManager";

const email = document.getElementById("email");
const password = document.getElementById("password");

login.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(email);
  const jsonData = {
    email,
    password,
  };

  try {
    const response = await fetch("/logging", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      const token = extractTokenFromHeader(
        response.headers.get("Authorization")
      );
      setCookie("webToken", token, 1);
      window.location.href = "/";
    } else {
      console.error("Error submitting login form:", response);
    }
  } catch (error) {
    console.error("Error submitting login form:", error);
  }
});
