# Typescript notes

## What is typescript?
- programming lang to address the shortcomings of JS
- built on top of JS
- help build more robust code.
- to be used on medium/large projects, whereas JS is simple/small projects

### PROs:
- static typing: cant change variable type ex string -> number
- code completion
- refactoring
- shorthand notations

TLDR: javascript, but with type checking

### CONs:
- gotta compile .ts -> .js (transpliation)

## Setting up Typescript
In terminal:
`npm i -g typescript`
`-g` is a flag that installs the package globally. If permission error, add prefix `sudo`.

To verify that it's installed:
`tsc -v`
`-v` is flag that checks version.

## Setting up to compile .ts to .js
To avoid older syntax when compiling, create config files to tell TS to compile in ES6.

In terminal of your root folder:
`tsc --init`
Which creates a config file `tsconfig.json` in your project folder. Also will tell you in the terminal the settings that's been enabled with it. There's a bunch of settings with its description.

### Few config settings to note
- `"target": "ES2016" `: Which version of javascript the typescript complier is going to generate. Default is ES2016, which is usually the safest(?), since all browsers support it. Press `ctrl+space` to see different options.
-`"module": "commonjs"`
-`"rootDir": "./src"`: by convention, source code (.ts code file) should be in a seperate folder called src. 
!(./src/assets/file-structure.png)
-`"outDir": "./dist"`: the directory that contains our js files (finishedcomplied code). Usually, it's in a folder called `dist`.
-`"removeComments": "true"`: just removes the comments in the .ts when we compile to .js
-`"noEmitOnError": "true"`: when this is turned on, the complier will stop compiling when there is an error in our code (usually it's compiled anyways, we'd want the opposite of that lol)

## Finally, let's compile
In your project terminal
`tsc`
Since we've did the set up in the config file, we can omit writing `tsc index.ts` or any other of the sort.
