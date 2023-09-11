import Toastify from 'toastify-js';

type SendToastifyType = {
    text: string;
    duration?: number;
};
export const sendToastify = ({ text, duration = 3000 }: SendToastifyType) => {
    if (typeof window !== undefined) {
        Toastify({
            text: text,
            duration: duration,
            newWindow: true,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            onClick: function () {},
        }).showToast();
    }
};
