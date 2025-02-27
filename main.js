console.log('Emi');

// 1. identificar el canvas
const canvas = document.querySelector('#canvas');
console.log(canvas);

// 1.5 definir el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. definir el contexto de una constante
const ctx = canvas.getContext('2d');
console.log(ctx);

///rectangulo
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;
ctx.rect(347, 340, 110, 52);
ctx.stroke();



/// circulo
const x = canvas.width / 2;
const y = canvas.height / 2;

ctx.beginPath();
ctx.fillStyle = 'blue'; 
ctx.arc(385, 273 + 300, 37, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

///



///
ctx.beginPath();
ctx.fillStyle = 'blue'; 
ctx.arc(385, 151 + 300, 37, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
////

ctx.beginPath();
ctx.moveTo(473, 435); // Punto de inicio de la línea
ctx.lineTo(330, 585); // Punto final de la línea
ctx.lineWidth = 5; // Grosor de la línea
ctx.strokeStyle = 'yellow'; // Color de la línea
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(473, 450); // Punto de inicio de la línea
ctx.lineTo(330, 600); // Punto final de la línea
ctx.lineWidth = 5; // Grosor de la línea
ctx.strokeStyle = 'yellow'; // Color de la línea
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(473, 466); // Punto de inicio de la línea
ctx.lineTo(330, 615); // Punto final de la línea
ctx.lineWidth = 5; // Grosor de la línea
ctx.strokeStyle = 'yellow'; // Color de la línea
ctx.stroke();
ctx.closePath();

///
ctx.beginPath();
ctx.fillStyle = 'blue'; 
ctx.arc(385, 213 + 300, 37, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();