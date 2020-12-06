// Dependencies
import {Typpy} from "https://deno.land/x/typpy/lib/typpy.ts"


function Deffy(input: any, def: Function | any, options?: boolean | {empty: boolean}): any {

    // Default is a function
    if (typeof def === "function") {
        return def(input);
    }
    //@ts-ignore Will never be {empry: {empty: boolean}} (as TS things could occur) due to Ternary
    let parsedOptions: {empty: boolean} = Typpy(options) === "boolean" ? {
        empty: options
    } : {
        empty: false
    };


    // Handle empty
    if (parsedOptions.empty) {
        return input || def;
    }

    // Return input
    if (Typpy(input) === Typpy(def)) {
        return input;
    }

    // Return the default
    return def;
}

export {Deffy}
