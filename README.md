> `npm install use-mounted`

Converts 

```javascript
useEffect(() => {
    const fetchData = async () => {
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