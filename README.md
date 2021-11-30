# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pos03142ap/lotide`

**Require it:**

`const _ = require('@pos03142ap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected`: Asserts actual && expected and returns a pass if equal and fail if not equal
* `assertArraysEqual(actual, expected)`: Asserts actual && expected arrays and returns a pass if equal and fail if not equal
* `assertObjectsEqual(actual, expected)`: Asserts actual && expected objects and returns a pass if equal and fail if not equal
* `countLetters(str)`: returns the number of letters in a string
* `countOnly(allItems, itemsToCount)`: returns the number of letters in items in the object
* `eqArrays(arr1, arr2)`: returns a boolean whether arr1 equals arr2
* `eqObjects(object1, object2)`: returns a boolean whether object1 equals object2
* `findKey(obj, callback)`: finds and returns the key of the object

* `findKeyByValue(obj, name)`: finds and returns the key of the object using the name properties
* `head(array)`: returns the head (first) of the array
* `letterPositions(sentence)`: returns the index position of the letter in the given array
* `map(array, callback)`: maps the given array depending on its callback functions
* `middle(arr)`: returns the middle of the array
* `tail(array)`: returns the tail (last) of the array
* `takeUntil(array, callback)`: returns an array depending on its callback functions
* `without = function(arr1, arr2)`: returns an arr1 without arr2 values
