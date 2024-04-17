# Practice: Custom Hook

In this practice you will learn how to create a custom hook in React.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Project breakdown

Hooks are just functions in React that start with "use" and can only be used in
function components. In the starter, notice that the __src__ directory
contains a __hooks__ directory and a __utils__ directory. In the __utils__
directory, you will find a __validations.js__ file that exports
`textInputValidators`. In the __hooks__ directory, you'll find the
__textInput.js__ file, which exports a `useTextInput` custom hook. That's what
you'll be writing in this exercise.

## Update `Form` component

First, you will update the `Form` component to use the custom hook that is being
exported from __src/hooks/textInput.js__. In __src/components/Form.jsx__, you
will find the `Form` component. In this component, you will replace the logic
that is happening with the `useState` hook and the array methods above the
`return` statement with the custom hook. In other words, you will move all of
this logic to the custom hook.

Comment out the lines with the `useState` and array methods that are above the
`return` statement. (You can delete these lines in a moment once you have pasted
them into your hook.) At the top of this file, `import` the `useTextInput` hook,
and remove the import for the `useState` hook. Inside the component, above the
`return`, invoke the custom hook, and set it equal to a destructured array, with
the values `name`, `setName`, and `nameErrors` in that order. Pass the custom
hook an argument of an object literal with a key of `validations` that points to
the `textInputValidators` that is being imported at the top of the file.

```js
  const [name, setName, nameErrors] = useTextInput({
    validations: textInputValidators
  });
```

## Write the custom hook

Because this custom hook will encapsulate some of the properties of a `useState`
hook, import the `useState` hook from the `react` package at the top of the
__src/hooks/textInput.js__ file. In the `useTextInput` function, pass in a
parameter of an object literal with keys of `validations` and `defaultValue`,
and set them equal to an empty array literal and an empty string literal,
respectively.

The function definition should look like this:

```js
  export const useTextInput = ({ validations = [], defaultValue = '' }) => {};
```

In the body of the hook, invoke the `useState` hook and pass it the
`defaultValue` variable as the only argument, then set it equal to a
destructured array with the values `value` and `setValue`. (`value` and
`setValue` are meant to be generic so that this hook is reusable for multiple
text input fields.)

Paste in the three lines with the array methods from the `Form` component and
modify them to use the `value` variable instead of the `name` variable from
earlier. Change the `nameErrors` variable to be `errors` instead to make it
generic as well.

After the array methods `return` an array with `value`, `setValue`, and `errors`
in that order, so that it matches what we expected in the `Form` component.

Test out the form in the browser. Does the same functionality exist?

Finally, move the function that is being used in the `onChange` event handler in
the `Form` component into the custom hook. Then, instead of returning the
`setValue` setter function that comes directly from the `useState` call, return
an event handler version to further encapsulate the logic within the hook.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Move logic away from a component and into a custom hook
2. Use other hooks in a custom hook
