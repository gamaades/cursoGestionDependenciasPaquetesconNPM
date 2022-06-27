const message = [
    "Oscar",
    "Ana",
    "Paulina",
    "Gustavo",
    "Nicolas",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const message = message[Math.floor(Math.random() * message.length)];
    console.log(message);
};

module.exports = { randomMsg };