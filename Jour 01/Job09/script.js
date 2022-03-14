var numbers = [
    8,
    6,
    50,
    80,
    15,
    42,
    90,
    120,
    300,
    110,
    555,
    333,
    854,
    145,
    753,
    951,
    159,
];

function tri(numbers, order) {
    if (order == "ASC") {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

    } else if (order == "DESC") {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] < numbers[j + 1]) {
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }
    return numbers;
}



console.log(tri(numbers, "ASC"));