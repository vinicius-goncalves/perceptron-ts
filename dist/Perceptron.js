/**
 * @author vinicius-goncalves | github.com/vinicius-goncalves
 */
class Perceptron {
    weights;
    bias;
    constructor(inputsLen) {
        this.weights = Array.from({ length: inputsLen }, () => Math.random());
        this.bias = Math.random();
    }
    activation(x) {
        return x >= 0 ? 1 : -1;
    }
    predict(inputs) {
        const values = [];
        for (let i = 0; i < inputs.length; i++) {
            values.push(inputs[i] * this.weights[i]);
        }
        const reduceSum = (acc, item) => acc + item;
        let sum = values
            .reduce(reduceSum, this.bias);
        return this.activation(sum);
    }
    train(inputs, label, lr = 0.1) {
        const prediction = this.predict(inputs);
        const error = label - prediction;
        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] += error * lr * inputs[i];
        }
        this.bias += error * lr;
    }
}
export default Perceptron;
