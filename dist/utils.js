const floor = (x) => Math.floor(x);
const random = () => Math.random();
function getArrayRandomValue(arr) {
    const len = arr.length;
    return arr[floor(random() * len)];
}
export { getArrayRandomValue };
