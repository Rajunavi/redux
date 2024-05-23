import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {

const [data, setData] = useState([])

const fetchData = async() => {
    const res = await axios.get(url)
    const val = res.data
    setData(val)
}

useEffect(() => {
    fetchData();
}, [])

return data;

  
}

export default useFetch
