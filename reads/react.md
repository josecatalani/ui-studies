# React.js

### Principles for structuring state

- **group related state**. if you always update two or more state variables at the same time, consider merging them into a single state variable.
- **avoid contradictions in state:**. When the state is structured in a way that several pieces of state may contradict and "disagree" with each other, you leave room for mistakes. Try to avoid this.
- **avoid duplication in state**. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
- **Avoid deeply nested state**. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

As the following examples:
**group related state**

```jsx
// ok
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// better
const [position, setPosition] = useState({ x: 0, y: 0 });
```

**avoid contradictions in state**

```jsx
// bad
const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);

// better
const [status, setStatus] = useState("typing");
const isSending = status === "sending";
const isSent = status === "sent";
```

**avoid redundant state**

```jsx
// bad
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");
setFullName(firstName + " " + lastName);

// better
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const fullName = firstName + " " + lastName;
```

**avoid duplication in state**

```jsx
const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

// bad
const [items, setItems] = useState(initialItems);
const [selectedItem, setSelectedItem] = useState(items[0]);
// if items[0] changes we won't be able to see the change.

// better
const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0);

const selectedItem = items.find((item) => item.id === selectedId);
```

**Avoid deeply nested state**

```jsx
// bad
export const initialTravelPlan = {
  id: 0,
  title: "(Root)",
  childPlaces: [
    {
      id: 1,
      title: "Earth",
      childPlaces: [
        {
          id: 2,
          title: "Africa",
          childPlaces: [
            {
              // ...
            },
          ], // ...
        },
      ], // ...
    },
  ], // ...
};

// better
export const initialTravelPlan = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 42, 46],
  },
  1: {
    id: 1,
    title: "Earth",
    childIds: [2, 10, 19, 26, 34],
  },
  2: {
    id: 2,
    title: "Africa",
    childIds: [3, 4, 5, 6, 7, 8, 9],
  },
  3: {
    id: 3,
    title: "Botswana",
    childIds: [],
  },
  // ...
};
```

### Don't mirror props in state

Avoid using a prop as default state value, like this:

```jsx
function Message({ messageColor }) {
    const [color, setColor] = useState(messageColor);
```

The problem is that if the parent component passes a different value of `messageColor` later, the color **_state variable_ would not be updated!**. The state is only initialized during the first render.

This is why "mirroring" some prop in a state variable can lead to confusion. Instead, use the `messageColor` prop directly in your code. If you want to give it a shorter name, use a constant:

```jsx
function Message({ messageColor }) {
    const color = messageColor;
```

"Mirroring" props into state only makes sense when you want to ignore all updates for a specific prop. By convention, start the prop name with `initial` or `default` to clarify that its new values are ignored.