import React, { useEffect, useState } from 'react';
import TrainingCard from './ComponentMain/TrainingCard';
// import { classes } from '../../../api';
// можно переименовывать переменные import
import { classes as newClasses } from '../../../api';
import './Main.css';

export default function Trains() {
  const [trainingsData, setClasses] = useState([]);
  // const info = '555';
  useEffect(() => {
    (async () => {
      try {
        const { data } = await newClasses.fetch();
        // const { data } = await newClasses(info).fetch();
        setClasses(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const newTrainings = JSON.stringify(trainingsData);
  localStorage.setItem('newTrainings', newTrainings);
  localStorage.setItem('searchLocal', newTrainings);

  return (
    <div className='training_card_wrapper'>
      {trainingsData.map((training) => (
        <TrainingCard
          trainingName={training.name}
          imageSrc={training.image}
          info={training.fullInfo}
          key={training.id}
        />
      ))}
    </div>
  );
}
