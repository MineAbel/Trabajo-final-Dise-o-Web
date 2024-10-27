let enIngles = false; // Variable para rastrear el estado del idioma

        function traducirContenido() {
            const elementos = document.querySelectorAll("p, h2, h3, li");

            elementos.forEach((elemento) => {
                const textoOriginal = elemento.innerText;
                
                if (!enIngles) {
                    // Guardar el texto original en un atributo solo la primera vez
                    if (!elemento.hasAttribute("data-original")) {
                        elemento.setAttribute("data-original", textoOriginal);
                    }

                    // Llamada para traducir el texto actual al inglés
                    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=${encodeURIComponent(textoOriginal)}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data && data[0] && data[0][0]) {
                                const textoTraducido = data[0][0][0];
                                elemento.innerText = textoTraducido;
                            } else {
                                console.error("Error en la traducción o respuesta incompleta");
                            }
                        })
                        .catch(error => console.error("Error en la traducción:", error));
                } else {
                    // Restaurar el texto original desde el atributo "data-original"
                    const textoOriginalGuardado = elemento.getAttribute("data-original");
                    if (textoOriginalGuardado) {
                        elemento.innerText = textoOriginalGuardado;
                    }
                }
            });

            enIngles = !enIngles; // Alternar el estado del idioma
        }