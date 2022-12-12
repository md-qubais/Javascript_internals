const memoize = targetFn => {
    const cache = {};//this object will be stored in closure and will be avalilable for every call of memoized
    return (args) => {
        return cache[args] ?? (cache[args] = targetFn(args))
    }
}

function isPrime(num) {
    const max = Math.sqrt(num);
    for (let div = 2; div <= max; div++)
        if (num % div == 0) return false;
    return true;
}

const memoized = memoize(isPrime);
console.log(memoized(9999, 1000));
console.log(memoized(9999));
