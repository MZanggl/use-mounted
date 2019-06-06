> `npm install use-mounted`

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
import useMounted from 'use-mounted'

useMounted(async () => {
    // await fetch('endpoint')
})
```