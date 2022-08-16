import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'


const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
      return ' Loading...'
    }

    
  return (
    <div classname = {styles.container}>
      <Grid container spacing ={3} justifyContent= "center">
        <Grid item componennt = {Card}>
          <CardContent>
          <Typography color = "textSecondary" gutterBottom>Infected</Typography>
          <Typography varaint = "h5">
            <CountUp start= {0} end={confirmed.value} duration = {2.5} separator = ","/>
          </Typography>
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Number of Active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item componennt = {Card}>
          <CardContent>
          <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
          <Typography varaint = "h5">
            <CountUp start= {0} end={recovered.value} duration = {2.5} separator = ","/>
            </Typography>
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Number of Recovered</Typography>
          </CardContent>
        </Grid>
        <Grid item componennt = {Card}>
          <CardContent>
          <Typography color = "textSecondary" gutterBottom>Infected</Typography>
          <Typography varaint = "h5">
            <CountUp start= {0} end={deaths.value} duration = {2.5} separator = ","/>
          </Typography>
          <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
