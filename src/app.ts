import Perceptron from './Perceptron.js';
import * as TrainerSets from './TrainerSet.js';
import TrainerSet from './TrainerSet.js'
import { getArrayRandomValue } from './utils.js';

//Initializing perceptron with two inputs.
const perceptron: Perceptron = new Perceptron(2);

//Training the perceptron with 20 thousand epochs by getting an random value from the trainer set. In this example, AND set.

// const OR: TrainerSet[] = TrainerSets.ORTrainer;
const AND: TrainerSet[] = TrainerSets.ANDTrainer;

for(let i: number = 0; i < 500; i++) {

    // const { inputs, label }: { inputs: number[], label: number } =
    //     getArrayRandomValue(OR);

    const { inputs, label }: { inputs: number[], label: number } =
        getArrayRandomValue(AND);

    perceptron.train(inputs, label);
}

//AND SET, so, expected row matrix: "[1, -1, -1, -1]".

const predictions: number[] = [
    perceptron.predict([1, 1]), //1
    perceptron.predict([0, 1]), //-1
    perceptron.predict([1, 0]), //-1
    perceptron.predict([0, 0]), //-1
];

console.log(predictions);