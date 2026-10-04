function validateSchema(obj, schema) {
    const errors = [];

    for (const key of Object.keys(schema)) {
        const expectedType = schema[key];

        // Check if the key exists
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            errors.push(`Missing property: ${key}`);
            continue;
        }

        // Check the type
        const actualType = typeof obj[key];

        if (actualType !== expectedType) {
            errors.push(
                `Invalid type for ${key}: expected ${expectedType}, got ${actualType}`
            );
        }
    }

    return errors;
}


// Test
const person = {
    name: "Peter",
    age: 25,
    email: "peter@example.com"
};

const schema = {
    name: "string",
    age: "number",
    email: "string"
};

console.log(validateSchema(person, schema));