/**
 * @author vinicius-goncalves | github.com/vinicius-goncalves
 */

class Perceptron {

    private weights: number[];
    private bias: number;

    constructor(inputsLen: number) {
        this.weights = Array.from({ length: inputsLen }, () => Math.random());
        this.bias = Math.random();
    }

    private activation(x: number): number {
        return x >= 0 ? 1 : -1;
    }

    predict(inputs: number[]): number {

        const values: number[] = [];

        for(let i: number = 0; i < inputs.length; i++) {
            values.push(inputs[i] * this.weights[i]);
        }

        const reduceSum = (acc: number, item: number): number => acc + item;
        const sum: number = values.reduce(reduceSum, this.bias);

        return this.activation(sum);
    }

    train(inputs: number[], label: number, lr: number = 0.1): void {

        const prediction: number = this.predict(inputs);
        const error: number = label - prediction;

        for(let i: number = 0; i < inputs.length; i++) {
            this.weights[i] += error * lr * inputs[i];
        }

        this.bias += error * lr;
    }
}

export default Perceptron;