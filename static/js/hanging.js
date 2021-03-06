const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");

clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
};

Draw = (part) => {
    switch (part) {
        case 'gallows' :
            context.strokeStyle = 'blanchedalmond';
            context.lineWidth = 10;
            context.shadowBlur = 2;
            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowColor = "darkred";
            context.beginPath();
            context.moveTo(175, 225);
            context.lineTo(5, 225);
            context.moveTo(40, 225);
            context.lineTo(25, 5);
            context.lineTo(100, 5);
            context.lineTo(100, 25);
            context.stroke();
            break;

        case 'head':
            context.lineWidth = 5;
            context.beginPath();
            context.arc(100, 50, 25, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            break;

        case 'body':
            context.beginPath();
            context.moveTo(100, 75);
            context.lineTo(100, 140);
            context.stroke();
            break;

        case 'rightHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(60, 100);
            context.stroke();
            break;

        case 'leftHarm':
            context.beginPath();
            context.moveTo(100, 85);
            context.lineTo(140, 100);
            context.stroke();
            break;

        case 'rightLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(80, 190);
            context.stroke();
            break;

        case 'rightFoot':
            context.beginPath();
            context.moveTo(82, 190);
            context.lineTo(70, 185);
            context.stroke();
            break;

        case 'leftLeg':
            context.beginPath();
            context.moveTo(100, 140);
            context.lineTo(125, 190);
            context.stroke();
            break;

        case 'leftFoot':
            context.beginPath();
            context.moveTo(122, 190);
            context.lineTo(135, 185);
            context.stroke();
            break;
    }
};

const draws = [
    'gallows',
    'head',
    'body',
    'rightHarm',
    'leftHarm',
    'rightLeg',
    'leftLeg',
    'rightFoot',
    'leftFoot',
];

let step = 0;


const next = document.getElementById('next');

next.addEventListener('click', function () {
    Draw(draws[step++]);
    if (undefined === draws[step]) this.disabled = true;
});

document.getElementById('reset').addEventListener('click', function () {
    clearCanvas();
    step = 0;
    next.disabled = false
});
