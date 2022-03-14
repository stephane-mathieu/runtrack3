var numbers = [
    87,
    58,
    46,
    72,
    11,
    47,
    96,
    122,
    333,
    111,
    222,
    444,
    555,
    666,
    777,
    888,
    999,
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