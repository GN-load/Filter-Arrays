const func = (a, b) => {
    const arr = a.split(' ');
    const result = arr.filter(arr => arr.length > 0);
    console.log(result)
    console.log(result.length * b)
};
func('        fjfhfh fhfh     r h     f fr hrfhrhr     hr rr    ', 5)
