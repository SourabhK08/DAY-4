function difference(number) {
    const difference = Math.abs(number - 13);

    if (number > 13)
    {
        return 2 * difference;
    }
    else
    {
        return difference;
    }
}

console.log(difference(15));    // OUTPUT is 4 because 15-13 = 2 , doubles the differnce