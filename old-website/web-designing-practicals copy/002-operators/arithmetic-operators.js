/*
    +
        - If numbmers, it is used for addition
        - If this is applied on strings, it is used for concatenation
        - If this is applied on a string and a number, it is used for concatenation
    -
    *
    /

    +=
        i += 100
        i = i + 100

    -=
        i -= 5
        i = i - 5

    *=
        i *= 5
        i = i * 5

    /=
        i /= 6
        i = i / 6

    **  - exponent

    i++
    ++i
        i++
        i += 1
        i = i + 1

    i++ 
        - First give me the current value of i and
        - add 1 to it and 
        - store it in i
    ++i
        - First add 1 to it. Store it in i
        - and then give me the value of i

    i--
    --i
        i--
        i -= 1
        i = i - 1
    
    i--
        - First give me the current value of i and
        - subtract 1 from it and 
        - store it in i
    --i
        - First subtract 1 from it
        - store it in i
        - give me the value of i
*/

let i = 0;
// 0

i = i + 10;
i += 10;
// 10

i = i - 5;
i -= 5;
//5

i = i * 5;
i *= 5;
// 25

i = i / 5;
i /= 5;
// 5