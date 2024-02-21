// define class which insersation a value with no duplicates
// removing a value, get random value that is already inserted 

class UniqueValuesContainer {
    constructor() {
        this.unique_values = new Set();
    }
    insert_value(value) {
        if (!this.unique_values.has(value)) {
            this.unique_values.add(value);
            console.log(`Value ${value} inserted successfully.`);
        }
    }
    remove_value(value) {
        if (this.unique_values.has(value)) {
            this.unique_values.delete(value);
            console.log(`Value ${value} removed successfully.`);
        } else {
            console.log(`Value ${value} not found.`);
        }
    }
    get_random_value() {
        if (this.unique_values.size > 0) {
            const random_value = Array.from(this.unique_values)[Math.floor(Math.random() * this.unique_values.size)];
            console.log(`Random value: ${random_value}`);
            return random_value;
        } else {
            console.log("Container is empty. No values to retrieve.");
            return null;
        }
    }
}

const container = new UniqueValuesContainer();
container.insert_value(42);
container.insert_value(123);
container.insert_value(42);
container.get_random_value();
console.log(container)
/*
container.get_random_value();
container.remove_value(123);
container.remove_value(999);
container.get_random_value();
*/
