import React from "react";
import { trainings } from './Templates/Main/Main';
import { nameButton } from './Templates/Main/ComponentMain/TrainingCard';
import './NameNextPage.css';
import { Box, styled } from "@mui/system";


const NameNextWrapper =styled(Box)(() => ({
  color: 'white',
  padding: '20px',
  display:'flex',
  flexDirection: 'column',
    alignItems: 'center',

}));

export default function NameNextPage() {
  let data = null;

  
    trainings.map((i) => {
      console.log(i);
      if (i.name === nameButton) {
        data = i;
      }
    });
  

  return (

    <NameNextWrapper>
      
      <h1>{data.name}</h1>
      <h2>{data.info}</h2>
      <img style={{ width: "50%"}} src={data.image} alt={data.name} />
      <h2>{data.fullInfo}</h2>
    </NameNextWrapper>
  );
}
