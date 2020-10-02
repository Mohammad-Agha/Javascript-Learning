# ES5 & ES6 Changes

Make sure you open your console in your developers tool of your browser.

### var vs. let

* Variable Declaration

    * When using 'var' you can easily overwrite a variable without any error

    * Maybe when you have a small application this wont be an issue, but as your code becomes larger and larger you might overwrite a predefined variable by mistake without an error. This could be problematic and really hard to debug.

    * 'let' will throw an error directly if the variable is declared again

* Scope

    * When declaring a variable with 'var' it will be declared globally or locally if its declared inside a function

    * 'let' behaves the same as 'var' but with extra features

    * When using 'let' the scope is limited to the place its declared in whether inside a block, statement, or expression. 

* Hoisting

    * Variables with 'var' will be initialized to undefined before the code is run

    * While with 'let' using the variable before initialization is reference error

* Creating Global Object Property

    * 'var' will be a part of the global window object unlike 'let'

### Declaring Immutable Variable with const Keyword

* 'const' has the same cool features as 'let'

* Additionally 'const' variables will be read-only

### Prevent Object Mutation

* You can use the Object.freeze() on certain objects

* Any try to change to values of that object will throw an error

### Arrow Functions

* When you have no function body and just a return value you can omit the return keyword

* When you have one parameter you can omit the parenthesis

* When you have a single statement inside your function you can omit the curly braces

* You can set default values to your functions in case no arguments are passed when calling the function

### Rest Operator With Function Parameters

* Will give you more flexibility when working with situations where you need to have dynamic parameters usage in functions

* We are able to get a list of arguments into an array

### Spread Operator for Arrays

* It let us unpack elements in an array to single arguments

### Destructing

* Is a special syntax for more neat values assignment

### Template Literals

* Allows you to create multi-line strings
* Allows you to use string interpolation features
* More neat object literal code

### Declarative Functions

* You can omit the 'function' keyword and colon when defining functions in objects

### Classes

You can check the folder in the previous directory called JS-OOP it contains this topic

### Sharing Code Along Javascript Files

* We use import and export

* If you want to share a javascript file to be accessed with another files, don't forget to add type="module" attribute to the script tag in HTML

* If you have only one value to export use 'export default'

* You cannot use export default with 'var', 'let', and 'const'


### Promises

Will make a dedicated folder for promises as they have a lot of usages and case by case scenarios