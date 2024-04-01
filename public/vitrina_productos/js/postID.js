import { authHeader } from "../../js/authentication.js";

async function envioIDCarro(idCard) {
  try {
    const response = await fetch("/vitrina/addCart", {
      method: "POST",
      headers: {
        Authorization: `${authHeader()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idCard }),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  return JSON.stringify({ id: idCard });
}

async function envioIDLista(idCard) {
  try {
    const response = await fetch("/vitrina/addDeseos", {
      method: "POST",
      headers: {
        Authorization: `${authHeader()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idCard }),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  return JSON.stringify({ id: idCard });
}
