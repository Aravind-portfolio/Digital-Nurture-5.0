# Exercise 2 - E-commerce Platform Search Function

## Objective

Implement Linear Search and Binary Search for searching products in an e-commerce platform.

---

## Theory

### What is Big O Notation?

Big O Notation measures the time complexity of an algorithm. It shows how the execution time increases as the input size increases.

### Search Cases

**Best Case**
- The element is found immediately.
- Time Complexity:
  - Linear Search: O(1)
  - Binary Search: O(1)

**Average Case**
- The element is found after checking some elements.
- Time Complexity:
  - Linear Search: O(n)
  - Binary Search: O(log n)

**Worst Case**
- The element is the last element or not present.
- Time Complexity:
  - Linear Search: O(n)
  - Binary Search: O(log n)

---

## Time Complexity Comparison

| Algorithm | Best | Average | Worst |
|-----------|------|---------|-------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

---

## Conclusion

Binary Search is more suitable for large e-commerce platforms because it searches much faster than Linear Search. However, the data must be sorted before performing Binary Search.

---

## Files

- Product.java
- Search.java
- SearchTest.java

---

## Output

Linear Search:
103 Watch Accessories

Binary Search:
103 Watch Accessories
