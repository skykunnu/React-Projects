# React

- Node modules are the heart of react files.

- React was developed to reduce number of DOM Operations.

- React is a component based js framework. 

- In SPA (Single Page Application) only content that user needs to be updated gets loaded not the entire page/website.


# Library

- In library you are in the control of the flow of the application and you call the library functions when needed.

- It provides specific functionality. 

- It offers more flexibility because you can pick and choose which libraries to use without adhering to a strict structure. 

ex- React

# SPA (Single Page Application)

SPA is a web application that loads and updates contents dynamically without refreshing entire page. 

# Basic React Project requirements

- Node modules are the heart of react files.

- package.json tells us about the tools and their versions that are necessary for the react file. 

- package-lock.json is an extended version of package.json. 

- gitignore and readme are important only for github not for react. 

- eslint file tells us about errors in the program.

























# Why vite?

Vite is a modern frontend build tool that is much faster than webpack for creating react app. 

- features it provide are:-

1. Super fast development server, uses ES modules (import/export different files) to serve files directly to the browser.

2.  Faster HMR (Hot module representation) means when you make changes in a file, only that module is updated, not the entire app. 

3. simple configuration. 

4. vite processes only the files that change, making it much faster. 


# What is webpack?

-  It is a package bundler for js app. it compiles, bundles, and optimizes multiple files (js, css, images etc) into a single or smaller set of output files for improved performance and efficiency. 

- HMR (Hot module replacement):- It is a feature in modern web dev tools like webpack, vite or parcel that allows modules (eg: Js, CSS) to be updated in a running application without a full page reload. 




# NPM vs NPX vs Yarn

- Both npm and npx are Command line tools that comes with node.js

- NPM is node package manager, installed globally to manage package/ dependencies. 

- npx runs packages temporarily without installing them globally. 

- Yarn is similar to npm with only difference that is it installs packages in parallel.

# What is the importance of package-json file? 

It is basically an engine of any web application. Without this you cannot run your application.  

- package-json file tells you certain details about your project such as


1. ⁡⁣⁣⁢Project-metadata⁡ means telling you about your project name, version, description, author, license etc.

2. ⁡⁣⁣⁢Dependency management ⁡means keep track of all packages your project needs to function. 

3. ⁡⁣⁣⁢Custom Scripts⁡ means defining automation scripts for running common task like starting a server, running tests, or building a project. 

4. ⁡⁣⁣⁢Helps in publishing packages⁡.

# What is ESLint ?

- It is a static code analysis tool used to identify and fix problems/errors  in js code. 


# React is often described as a declarative library because it allows developers to describe what the UI should look like for a given state, rather than specifying how to achieve that state imperatively.

imperative - khud ka khud karna (independent)

declarative - khud ka kaam dusro se karwana (dependent). you define the target HTML structure & UI - not the steps to get there. 

# React comes in two parts - react and react-DOM

# 4 Ways of creating react project 

-> CRA (create-react-app)
-> VITE
-> CDN 
-> Manual (npm init)


# Babel - It is a transpiler which converts jsx code into html code so that old browser can understood the code.

# JSX(Javascript XML) - JSX is a syntax Extension (ie a js file can be extended into jsx) meaning I can do whatever things in jsx that I can do in js. 

-> JSX was created by facebook for react only. 

-> JSX prevents XSS attacks. 

-> In JSX you can pass style as an object. 

-> Rules of writing JSX

-> We cannot return multiple elements. if we want to do so wrap it under div or fragments. when jsx converts into js it converts into function call, 

-> JSX uses cameCasing. 

-> JSX uses className reason to avoid naming conflict. 

-> In JSX you have to explicitly close the tags. 

-> JSX is used to describe & create HTML elements in JS in a declarative way.  

-> JSX is not supported by browsers. 


# What is a component in react ? 

->  A component is a function that returns an UI element. 

-> react recommends to write the first letter of function name in caps because it helps react to differentiate between html elements and custom-components.

-> Different components handles different data and logic. 


# What is Built-in Components & Custom Components.

- Built-in Components:- It's name starts with lowercase character. 

-> Only valid, officially defined HTML elements are allowed. 

-> Are rendered as DOM nodes by react. 

- Custom Components:- It's name starts with uppercase character.

-> Defined by us 'wraps' built-in or other custom components. 

-> react traverses the component tree until it has only built-in components left.  



# Static Content & Dynamic Content

- Static Content:- Content that's hardcoded into the jsx code. 
* Can't change at runtime. 
* <h1>Hello World!</h1>

- Dynamic Content:- Logic that produces the actual value is added to jsx. 

* Content/value is derived at runtime. 
* <h1>{username}<h1>


# useRef() hook

- It is nothing but say react way of doing getElementById().

# What is render?

- calling your component with updated value. 
and returns VDOM (virtual DOM).

# What is useState()?

- 






