
const random = {
    d4: () => Math.floor(Math.random() * 4 + 1),
    d6: () => Math.floor(Math.random() * 6 + 1),
    d8: () => Math.floor(Math.random() * 8 + 1),
    d10: () => Math.floor(Math.random() * 10 + 1),
    d12: () => Math.floor(Math.random() * 12 + 1),
    d20: () => Math.floor(Math.random() * 20 + 1),
};


export default random;