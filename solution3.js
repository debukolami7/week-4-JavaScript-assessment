function deepFreeze(obj) {
    // Only freeze objects
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Freeze the object
    Object.freeze(obj);

    // Freeze all nested objects
    for (const value of Object.values(obj)) {
        if (value !== null && typeof value === "object") {
            deepFreeze(value);
        }
    }

    return obj;
}


// Test
const user = {
    name: "Peter",
    address: {
        city: "Ibadan",
        country: "Nigeria"
    }
};

deepFreeze(user);

console.log(Object.isFrozen(user)); 
// true

console.log(Object.isFrozen(user.address)); 
// true