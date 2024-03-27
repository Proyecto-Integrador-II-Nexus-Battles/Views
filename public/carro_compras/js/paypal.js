

                    const botonPago = document.getElementById('checkout');

                    botonPago.addEventListener('click', async () => {
                        try {
                            axios.post('http://localhost:3000/portal_pagos/create-order', { IdUsuario: 1 })
                                .then(response => {
                                    const paypalUrl = response.data.paypalUrl;
                                    window.location.href = paypalUrl;
                                    res.redirect(paypalUrl);
                                })
                                .catch(error => {
                                    console.error('Error al realizar la solicitud:', error);
                                });
                            console.log('Respuesta del servidor:', response.data);
                        } catch (error) {
                            console.error('Error al realizar la solicitud:', error);
                        }
                    });
             