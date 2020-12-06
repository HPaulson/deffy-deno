## Deno port of [IonicaBizau/deffy][nodeurl]

[![deffy](http://i.imgur.com/k1hlQxA.png)](#)

# deffy

> Small and fast library to set default values.

## :clipboard: Example
```ts
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

```
## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

## :memo: Documentation


### `Deffy(input, def, options)`
Computes a final value by providing the input and default values.

#### Params

- **Anything** `input`: The input value.
- **Anything|Function** `def`: The default value or a function getting the input value as first argument.
- **Object|Boolean** `options`: The `empty` value or an object containing the following fields:

 - `empty` (Boolean): Handles the input value as empty field (`input || default`). Default is `false`.

#### Return
- **Anything** The computed value.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## :scroll: License

[MIT][license] © [Ionică Bizău][website]
[MIT][license] © [Hunter Paulson][github]




[nodeurl]: https://github.com/IonicaBizau/deffy
[github]: https://github.com/HPaulson
[license]: /LICENSE
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
