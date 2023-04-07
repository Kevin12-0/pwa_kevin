function pedidoNoticación() {
    if (window.Notification) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                var options = {
                    body: 'Esta es una notificación de prueba',
                    icon: 'icon.png',
                    actions: [
                        { action: 'ver', title: 'Ver' },
                        { action: 'cancelar', title: 'Cancelar' }
                    ]
                };
                var notification = new Notification('Título de la notificación', options);
                notification.addEventListener('click', function () {
                    window.open('');
                    notification.close();
                });
                setTimeout(function () {
                    notification.close();
                }, 5000);
            }
        });
    }
}