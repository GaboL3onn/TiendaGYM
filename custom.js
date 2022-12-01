
const checkout = document.querySelector('#checkout');

checkout.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('TIENDITAGYM', {
            icon: 'images/utsem.jpg',
            body: 'Acabas De Realizar Una Compra, Graciaaaas!'
        });

        notificacion.onclick = function(){
            window.open(reload);
        }
    }
})