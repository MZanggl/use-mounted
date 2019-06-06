Converts 

```javascript
useEffect(() => {
    async fetchData() {
        // await fetch('endpoint')
    }

    fetchData()
}, [])
```

to

```javascript
useMounted(async () => {
    // await fetch('endpoint')
})
```