# `S1W2D1`

## Nested Loops
```javascript
//type and run code below and analyze the output
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```
---
`Pairs In Arrays`
```javascript
//type and run code below and analyze the output
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```
![](https://i.imgur.com/VQ7NOLi.png)

---

`Unique Pairs In Arrays`

```javascript
//type and run code below and analyze the output
let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
```

![](https://i.imgur.com/ftyoktg.png)
