// Dependencies
import {Deffy} from "https://deno.land/x/deffy/lib/typpy.ts"

console.log(Deffy(undefined, "Hello World"));
// => "Hello World"

console.log(Deffy("Hello World", 42));
// => 42

console.log(Deffy("Hello", "World"));
// => "Hello"

console.log(Deffy("", "World", true));
// => "World"

console.log(Deffy("", "World"));
// => ""

console.log(Deffy("foo", function (input: string) {
    return input === "foo" ? "bar" : "foo";
}));
// => "bar"
