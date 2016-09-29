var args = process.argv.slice(2);

console.log(args);

var isAllNums = args.every((elem) => {
    return !isNaN(+elem);
});

var result = isAllNums ? 0: '';

args.forEach((elem) => {
    result += (isAllNums ? +elem : elem);
});

console.log(result);