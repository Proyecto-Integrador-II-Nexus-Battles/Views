
async function envioID(idCard) {
  try {
    const response = await fetch("a donde se enviará", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idCard }),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
  return  JSON.stringify({ id: idCard });
}
