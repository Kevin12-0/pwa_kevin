const pedidoNotification = async () => {    //Vamos a comprobar si el navegador es compatible con las notificaciones
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    if (Notification.permission === "granted") {
        const notification = new Notification("Novedades el Inge", {
            body: "Tu pedido a sido realizado, espera tu entrega",
            icon: "../img/icons/favicon.ico",
        });

        notification.addEventListener("click", (event) => {
            // Acción a realizar cuando se hace clic en la notificación
        });
    }
}
