
import { isUdf, isObject, isFunction, makeObj } from "./type.js";

function makeFilledArray(length, element) {
    const generate = isFunction(element);

    const a = [];

    for (let i = 0; i < length; ++i) {
        a[i] = generate ? element(i) : element;
    }

    return a;
}

// Pushes every element in b onto a.
const concat = (a, b) => {
    for (let i = 0; i < b.length; ++i) {
        a.push(b[i]);
    }
};

// Pushes a slice of b onto a.
const concatSlice = (a, b, startIndex, sliceLength) => {
    if (startIndex < 0 ||
        sliceLength < 0 ||
        b.length < startIndex + sliceLength) {
        throw new Error("Invalid slice.");
    }

    for (let i = 0; i < sliceLength; ++i) {
        const j = startIndex + i;
        a.push(b[j]);
    }
}

/**
 * Initializes an options argument with defaults
 * for options not supplied.
 */
function initOptions(options, defaults) {
    if (isUdf(options)) {
        options = makeObj();
    } else if (!isObject(options)) {
        throw new Error("Invalid argument.")
    }

    return Object.assign(defaults, options);
}

export {
    makeFilledArray,
    concat, concatSlice,
    initOptions
};
