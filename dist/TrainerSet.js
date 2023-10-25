//AND
const ANDTrainer = [
    { inputs: [1, 1], label: 1 },
    { inputs: [0, 1], label: -1 },
    { inputs: [1, 0], label: -1 },
    { inputs: [0, 0], label: -1 }
];
//OR
const ORTrainer = [
    { inputs: [1, 1], label: 1 },
    { inputs: [0, 1], label: 1 },
    { inputs: [1, 0], label: 1 },
    { inputs: [0, 0], label: -1 },
];
export { ANDTrainer, ORTrainer };
