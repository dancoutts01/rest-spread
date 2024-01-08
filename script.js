
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments) 

const mergeObjects = (object1, object2) => ({...object1, ...object2})

const doubleAndReturnArgs = (array, ...rest) => [...array, ...rest.map(val => val * 2)]

// slice and dice
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

const extent = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = value;
    return newObject;
}

const removeKey = (obj, key) => {
    let newObj = {...obj} ;
    delete newObj.key;
}

const combine = (obj1, obj2) => {
    let newObject = {...obj1, ...obj2}
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
}