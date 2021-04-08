/*
    Resutls in true / false

    ! - not
        - Negates
        - !true = false
        - !false = true
        - !(true && false) = true
        - !!false = false
        - !!!false = true
        - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!false = false
        - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!false = true

    && - and
        - If both of the expressions should be true for whole expression to be true
        - If either of them is false then whole expression becomes false

        - true && true = true
        - true && false = false
        - false && true = false
        - false && false = false

    || - or
        - If either of the expressions is true then whole expression is true
        - If none of them are true, then whole expression is false
        
        - true || true = true
        - false || true = true
        - true || false = true
        - false || false = false

*/

// if sai completes either of computer course or math course he can do minecraft
let isSaiFinishedComputerCourse = true;
let isSaiFinishedMathCourse = false;

let isSaiDoingMinecraft = isSaiFinishedComputerCourse || isSaiFinishedMathCourse;

console.log(!true)
// false

console.log(true && false)
// 