const Notification = (function () {
    const container = document.querySelector('.tasks-wrap .container');

    const show = function (message) {
        hide();

        const alert = `<div class="notification ${message.class}">${message.text}</div>`;
        container.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => hide(), 2000);
    };

    const hide = function () {
        const currentAlert = document.querySelector('.notification');
        if (currentAlert) {
            currentAlert.remove();
        }
    };

    return {
        show
    }

}());