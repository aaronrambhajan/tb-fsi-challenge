# TouchBistro Full Stack Challenge  
## Overview  
Create a web app consisting of:
- Frontend using anything (React preferred)  
- `Node.js` backend using `express`  
  
The challenge is being assessed on:  
- Code style  
- Working functionality  
- Modern JS (ES6) use  
- Test practises  

## Backend
Set up an `express` server with *one* route. It should execute the following and return its output:  

### Function
Given an upper limit of `n`, find the _median prime number(s)_ of the _set of prime numbers_ less than `n`.  

### Example
Let `P` be the set of prime numbers in range `(x)`.
Let `M` be the set of medians in the numbers `(y)`.
- If `n` = 10, `P(10)` = `[2, 3, 5, 7]`, `M(P(10))` = `[3, 5]`.  
- If `n` = 18, `P(18)` = `[2, 3, 5, 7, 11, 13, 17]`, `M(P(18))` = `[7]`.  

### Hint
See: [Sieve of Eratosthenes algorithm](), especially for when `n > 10,000`.  

## Frontend
Users can _input a number_ and receive the result of the above function (or _error_).  

## Testing
Include appropriate tests (as you define them) in both frontend and backend components.