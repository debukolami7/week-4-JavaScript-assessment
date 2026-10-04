function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        get value() {
            return count;
        }
    };
}


// Test
const counter = createCounter();

console.log(counter.value); 
// 0

counter.increment();

console.log(counter.value); 
// 1

counter.increment();

console.log(counter.value); 
// 2

counter.decrement();

console.log(counter.value); 
// 1