const floor = (x: number) => Math.floor(x);
const random = () => Math.random()

function getArrayRandomValue<T>(arr: T[]): T {
    const len = arr.length;
    return arr[floor(random() * len)];
}

export { getArrayRandomValue }