function deepEqual(objA, objB) {
    // If they are exactly the same value
    if (objA === objB) {
        return true;
    }

    // If either is not an object or is null
    if (
        typeof objA !== "object" ||
        typeof objB !== "object" ||
        objA === null ||
        objB === null
    ) {
        return false;
    }

    // Get the keys
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    // Different number of keys means they are not equal
    if (keysA.length !== keysB.length) {
        return false;
    }

    // Compare every key and value
    for (const key of keysA) {
        if (!Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }

        if (!deepEqual(objA[key], objB[key])) {
            return false;
        }
    }

    return true;
}


// Test
console.log(
    deepEqual(
        { name: "Peter", age: 25 },
        { name: "Peter", age: 25 }
    )
); // true

console.log(
    deepEqual(
        { name: "Peter", address: { city: "Ibadan" } },
        { name: "Peter", address: { city: "Ibadan" } }
    )
); // true

console.log(
    deepEqual(
        { name: "Peter", address: { city: "Ibadan" } },
        { name: "Peter", address: { city: "Lagos" } }
    )
); // false