# sinae

A light-weight testing framework. Made using pure JavaScript.

## User Stories

```
As a Maker,
So I can group all my tests,
It should have a way to group tests under a main title

As a Maker,
So I can see what the test is about,
It should have a way to title tests

As a Maker,
So I can test my code is working correctly,
It should have a way to evaluate values

As a Maker,
So I can check my tests,
It should print out to the console if they pass or fail

As a Maker,
So I can check what wrong with my test,
It should print out what was expected and what actually happened

As a Maker,
So I can test my software is working correctly,
It should have a way to evaluate values in different ways

As a Maker,
So I can read the console output easily,
It should indent the output
```

## Instructions

### Installation

```bash
 npm install -D sinae
```

```bash
 yarn add -D sinae
```

### Usage

Require the framework in your test file:

```javascript
const sinae = require('sinae')

// add required functionality (see API)
const describe = sinae.describe
const it = sinae.it
const expect = sinae.expect
```

## API

### `describe(description: String, fn: Function)`

Creates a block that groups several tests together.

- `description`: identifies the group of tests in the console.
- `fn`function decleration, inside which you can further organise your test suite using `describe` blocks, or, set up a test inside an `it` block.

### `it(description: String, fn: Function)`

Creates a block where you can set up and run your test.

- `description`: identifies the test in the console
- `fn`: function decleration, inside which the test is set up and an expectation is defined

### `expect(value: any).<matcher>(condition: any)`

Stores a value, which is passed onto a matcher for evaluation.

- `value`: the variable, returned value, or object passed in for evaluation
- `condition`: the expectation the `value` will be compared to 

### Matchers

#### Equality

- `toEqual`: returns true if equal
- `toNotEqual`: returns true if not equal
- `toBe`: returns true if strictly equal
- `toNotBe`: returns true if strictly not equal
- `toContain`: returns true if an array contains `condition` one level deep
- `toContain`: returns true if an array doesn't contain `condition` one level deep

## Style

Logs inside `describe` and `it` blocks are indented:

```bash
Makers
  #culture
    has an awesome culture
```

Passing tests are green and failing tests are red. Failing tests display what was expected and what was received:

```
Programming Languages
  Python rocks // green output
  JavaScript is better than Ruby // red output
    
    Expected: true
    Got: false
    
```

