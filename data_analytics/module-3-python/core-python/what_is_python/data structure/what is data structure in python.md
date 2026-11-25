## What is a Data Structure in Python?

A **data structure** is a way of organizing, storing, and managing data in a program so that it can be used efficiently.

Python provides several built-in data structures:

- **List**: An ordered and mutable collection of items.
- **Tuple**: An ordered and immutable collection of items.
- **String**: An ordered and immutable sequence of characters.
- **Set**: An unordered collection containing only unique items.
- **Dictionary**: A collection of key-value pairs.

### 1. List

A list stores multiple values in a specific order. Lists are mutable, so we can change, add, or remove values.

```python
numbers = [10, 20, 30, 40]

numbers.append(50)
print(numbers)
```

Output:

```text
[10, 20, 30, 40, 50]
```

### 2. Tuple

A tuple is similar to a list, but tuples are immutable. Once created, their values cannot be changed.

```python
colors = ("red", "green", "blue")
print(colors)
```

Output:

```text
('red', 'green', 'blue')
```

### 3. String

A string stores a sequence of characters. Strings are immutable, so their characters cannot be changed after creation.

```python
name = "Python"

print(name)
print(name[0])
print(name.upper())
```

Output:

```text
Python
P
PYTHON
```

### 4. Set

A set stores unique values and does not keep a fixed order.

```python
numbers = {10, 20, 20, 30}
print(numbers)
```

Output:

```text
{10, 20, 30}
```

### 5. Dictionary

A dictionary stores data as key-value pairs. It is useful when values need to be identified by names or keys.

```python
student = {
    "name": "Vaidehi",
    "age": 20,
    "course": "Python"
}

print(student["name"])
```

Output:

```text
Vaidehi
```

## Comparison

| Data Structure | Ordered | Mutable | Duplicates Allowed |
|---|---|---|---|
| List | Yes | Yes | Yes |
| Tuple | Yes | No | Yes |
| String | Yes | No | Yes |
| Set | No | Yes | No |
| Dictionary | Yes | Yes | Keys: No, Values: Yes |

## Summary

Data structures help programmers store and organize data in an efficient and meaningful way. Python's common built-in data structures are list, tuple, string, set, and dictionary.