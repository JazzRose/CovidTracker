import React, { useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
 
const Chart = () => {

  const [dailyData, setDailyData] = useState ({})

  useEffect(() => {
      const fetchAPI = async() =>
    {
      setDailyData(await fetchDailyData())
    }
    fetchAPI()
  })]

  const lineCHart = ()

  return (
    <div>
      <h1>chart</h1>
    </div>
  )
}

export default Chart
