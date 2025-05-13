        function crear() {
            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const edad = document.getElementById("edad").value.trim();
 
            

            if (!nombre || !apellido || !edad) {
                alert("Completa todos los campos.");
                return;
            }

            const tablaBody = document.getElementById("tablaBody");
            tablaBody.innerHTML += `
                <tr>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${edad}</td>
                </tr>
            `;

            // Limpiar campos
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("edad").value = "";
        }

        function eliminar() {
            const tablaBody = document.getElementById("tablaBody");
            if (tablaBody.rows.length > 0) {
                tablaBody.deleteRow(tablaBody.rows.length - 1);
            } else {
                alert("No hay filas para eliminar.");
            }
        }