import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "./StyleCards.module.css"

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function Cards ({nameProject, description, link,tools=[]}){
    return(
        <Card sx={{ MaxWidth:330, height:393, paddingX:1, paddingTop:2 }} className={`${styles.card}`} >
        <CardMedia
          component="img"
          alt={nameProject}
          image="/static/images/cards/contemplative-reptile.jpg"
          sx={{width:"100%", Height:180, objectFit: 'cover'}}
        />
        <CardContent className=''>
          <Typography  className='font-text text-xl'>
          {nameProject}
          </Typography>

          <CardContent  className='font-text flex flex-wrap gap-2 w-full'>
          {tools.map((tool)=> 
            <Typography key={tool} className='flex justify-center flex-row font-title rounded-lg border border-[#f97416] p-1'>{tool}</Typography>
          )}
         
          </CardContent>

          

        </CardContent>

      </Card>
    )
}