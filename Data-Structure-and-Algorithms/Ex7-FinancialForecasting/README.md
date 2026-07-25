# Exercise 7 - Financial Forecasting using Recursion

## Objective

Develop a financial forecasting tool that predicts the future value of an investment using a recursive algorithm.

---

# Theory

## What is Recursion?

Recursion is a programming technique in which a method calls itself to solve a problem. Instead of solving the entire problem at once, recursion breaks it into smaller subproblems until a stopping condition, called the **base case**, is reached.

A recursive solution consists of two parts:

1. **Base Case**
   - The condition that stops the recursive calls.
   - Prevents infinite recursion.

2. **Recursive Case**
   - The method calls itself with a smaller or simpler input.
   - Gradually moves towards the base case.

General Structure:

```java
if(baseCase)
    return answer;

return recursiveMethod(smallerProblem);
```

---

## Why is Recursion Useful?

Recursion simplifies problems that can naturally be divided into smaller subproblems.

It is commonly used in:

- Tree Traversal
- Graph Traversal
- Binary Search
- Merge Sort
- Quick Sort
- Factorial Calculation
- Fibonacci Series
- Directory/File Traversal

Instead of writing complex loops, recursion often produces cleaner and easier-to-understand code.

---

## Financial Forecasting

Financial forecasting is the process of estimating future financial values based on historical data and expected growth.

If an investment grows at a fixed rate every year, the value after several years can be calculated by repeatedly applying the annual growth rate.

Example:

Initial Investment = ₹10,000

Growth Rate = 10%

Year 1

10000 × 1.10 = 11000

Year 2

11000 × 1.10 = 12100

Year 3

12100 × 1.10 = 13310

The recursive solution performs this calculation automatically until the required number of years is completed.

---

# Recursive Approach Used

The recursive method receives:

- Current Value
- Growth Rate
- Number of Years

Algorithm:

1. If years become 0, return the current value.
2. Otherwise,
   - Increase the value using the growth rate.
   - Reduce the number of years by 1.
   - Call the same method again.

This process continues until the base case is reached.

---

# Time Complexity Analysis

Each recursive call processes one year.

For **n** years,

Number of recursive calls = n

Therefore,

**Time Complexity**

```
O(n)
```

because one recursive call is made for every year.

**Space Complexity**

```
O(n)
```

because every recursive call occupies one position in the function call stack.

---

# Optimization

Although recursion is simple and easy to understand, it is not always the most efficient solution.

Some optimization techniques include:

### 1. Iterative Approach

Instead of recursive calls, a loop can be used.

Advantages:

- No recursion overhead
- Space Complexity becomes O(1)
- Faster execution

---

### 2. Memoization

Memoization stores previously computed results and reuses them instead of recomputing.

Advantages:

- Avoids repeated calculations
- Improves performance for problems with overlapping subproblems

---

### 3. Mathematical Formula

For financial forecasting, the future value can be calculated directly using the compound growth formula:

```
Future Value = Current Value × (1 + Growth Rate)^Years
```

This avoids recursion completely and is the most efficient solution for this specific problem.

---

# Files

- FinancialForecast.java
- ForecastTest.java

---

# Sample Output

```
Current Value : 10000.00
Growth Rate   : 10%
Years         : 5
Future Value  : 16105.10
```

---

# Conclusion

The recursive solution successfully predicts the future value by repeatedly applying the annual growth rate until the specified number of years is completed.

While recursion makes the implementation simple and easy to understand, iterative methods or the compound growth formula are more efficient for large inputs because they reduce memory usage and execution time.