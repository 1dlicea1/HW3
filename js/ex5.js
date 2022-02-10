console.log("ex5");

const number = (prompt('Enter an number to print multiplication table for: '));

for(let i = 0; i <= 10; i++) {
    const result = i * number;

    console.log(`${number} X ${i} = ${result}`);
}