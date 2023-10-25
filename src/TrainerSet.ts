type TrainerSet = {
    inputs: number[],
    label: number
};

//AND
const ANDTrainer: TrainerSet[] = [
    { inputs: [1, 1], label: 1 },
    { inputs: [0, 1], label: -1 },
    { inputs: [1, 0], label: -1 },
    { inputs: [0, 0], label: -1 }
]

//OR
const ORTrainer: TrainerSet[] = [
    { inputs: [1, 1], label: 1 },
    { inputs: [0, 1], label: 1 },
    { inputs: [1, 0], label: 1 },
    { inputs: [0, 0], label: -1 },
]


export { ANDTrainer, ORTrainer, TrainerSet as default };