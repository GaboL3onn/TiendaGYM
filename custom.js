const notificarBtn = document.querySelector('#checkout');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#checkout');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: '/images/utsem.jpg',
            body: 'Mi notificación push'
        });

        notificacion.onclick = function(){
            window.open('http://google.com');
        }
    }
})