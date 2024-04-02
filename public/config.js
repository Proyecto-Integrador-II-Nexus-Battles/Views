
const options = {
    method: 'GET'
};

let HOST = "";
let PORT = "";
let PORT_BACK = "";
let PORT_VITRINA = "";

try {
    const response = await fetch("/variables", options);
    const data = await response.json();
    HOST = data.host || 'localhost';
    PORT = data.port || 5000;
    PORT_BACK = data.port_back || 3020;
    PORT_VITRINA = data.port_vitrina || 4443;

    console.log("Hizo fetch")
    console.log(HOST, PORT, PORT_BACK)
} catch (error) {
    console.error(error);
}

export { HOST, PORT, PORT_BACK, PORT_VITRINA };

