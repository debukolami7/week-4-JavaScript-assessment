function diffObjects(oldObj, newObj) {
    const added = {};
    const removed = {};
    const changed = {};

    // Check for added and changed properties
    for (const key of Object.keys(newObj)) {
        if (!Object.prototype.hasOwnProperty.call(oldObj, key)) {
            added[key] = newObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            changed[key] = {
                oldValue: oldObj[key],
                newValue: newObj[key]
            };
        }
    }

    // Check for removed properties
    for (const key of Object.keys(oldObj)) {
        if (!Object.prototype.hasOwnProperty.call(newObj, key)) {
            removed[key] = oldObj[key];
        }
    }

    return {
        added,
        removed,
        changed
    };
}


// Test
const oldObj = {
    name: "Peter",
    age: 25,
    city: "Ibadan"
};

const newObj = {
    name: "Peter",
    age: 26,
    country: "Nigeria"
};

console.log(diffObjects(oldObj, newObj));