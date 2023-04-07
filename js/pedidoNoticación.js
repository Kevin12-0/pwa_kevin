const pedidoNotification = async () => {    //Vamos a comprobar si el navegador es compatible con las notificaciones
    if (navigator.setAppBadge) {
        console.log("The App Badging API is supported!");
    }
}
