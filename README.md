# Perceptron
![typescript][]

<div id="introduction">
	This is an example of how a single perceptron works, it was one of the first codes I made to study neural networks, and the code was made using TypeScript.
</div>

## First Steps

The project is already compiled to JavaScript, but if you feel like changing something in **TypeScript**, of course, you will need to have TypeScript compiler installed, and for that, you will need to have a packet manager such as ```npm``` or ```yarn``` installed.

**Making TypeScript code changes**

1. Create a new folder;

2. Inside the new folder, clone the repository;
> git clone https://github.com/vinicius-goncalves/perceptron-ts.git

3. Then install the latest **TypeScript** version:
> npm install -g typescript

4. Verify if TypeScript was installed correctly:
	> tsc -v
	
	or
	
	> tsc --version

4. **Open with your code editor and then make the changes**. Then, open a terminal inside the root project folder and use the following command to compile from TypeScript to JavaScript:
> tsc

5. Open the index.html and then visualize the console.

## How to use

This is an example of how a perceptron works, so you need to know the basics of how a neural network works to understand the steps done here.

The project has a "Perceptron.ts" class, you will need to instance this in the app.ts like this:

```typescript
const perceptron: Perceptron = new Perceptron(2);
```

Where "2" it's the number of inputs. In this example, I'm using AND logical port - so, we just need two inputs.

After instantiating the class, we need to train the perceptron, and the Perceptron prototype has a ```train()``` method.

```typescript
perceptron.train(inputs, label, lr?);
```

To understand this, we need to know: Exists a model for training "TrainerSet", that it must have the inputs, where this is an array of numbers, and a label, where is the expected result - this must be a number. Example:

Inside the ```TrainerSets.ts```:
```typescript
const ANDTrainer: TrainerSet[] = [
    { inputs: [1, 1], label: 1 },
    { inputs: [0, 1], label: -1 },
    { inputs: [1, 0], label: -1 },
    { inputs: [0, 0], label: -1 }
]
```

Now, we can loop it for some thousand epochs getting a random set inside the ```ANDTrainer``` array to train using the ```train()``` method. Something like this could be thought:

```typescript
for(let i: number = 0; i < 20_000; i++) {

    const { inputs, label }: { inputs: number[], label: number } =
        getArrayRandomValue(AND);

    perceptron.train(inputs, label);
}
```

After that, we can predict the results, to know if the perceptron is getting errors or not - and we can use the ```predict()``` method of the Perceptron prototype to do it.

```typescript

//AND SET, so, expected row matrix: [1, -1, -1, -1]

const predictions: number[] = [
    perceptron.predict([1, 1]), //1
    perceptron.predict([0, 1]), //-1
    perceptron.predict([1, 0]), //-1
    perceptron.predict([0, 0]), //-1
];
```

If we send a log to the console, we can see the predictions:

```typescript
console.log(predictions); //[1, -1, -1, -1]
```

[comment]: # (links)
[typescript]: <https://img.shields.io/badge/TypeScript-323330?style=for-the-badge&logo=typescript&logoColor=3077C5> "TypeScript"
[comment]: # (links)
