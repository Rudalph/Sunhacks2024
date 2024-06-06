"use client"
import React, { useState, useEffect } from 'react';
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/Components/ui/drawer";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from '@/Components/firebase';
import axios from 'axios'; // Import Axios
import { BsFillClipboardDataFill } from "react-icons/bs";

const formatRecommendations = (recomendations) => {
  return recomendations.split('\n\n').map((section, index) => {
    const lines = section.split('\n');
    const title = lines[0].replace(/\*\*/g, ''); // Remove asterisks
    const items = lines.slice(1).map((item, i) => {
      return item.replace(/\* /g, ''); // Remove asterisks
    });
    const formattedItems = items.map((item, i) => {
      return `* ${item}`;
    }).join('\n');

    return (
      <div key={index}>
        <strong>{title}</strong>
        <br />
        {formattedItems}
      </div>
    );
  });
};

const Page = () => {
  const [recomendation, setRecomendation] = useState('')
  useEffect(() => {
    console.log("Recommendations:", recomendation);
  }, [recomendation]);


  const [score, setScore] = useState('');
  const [mood, setMood] = useState('');
  const [stress, setStress] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    heart_rate_per_munite: '',
    height: '',
    weight: '',
    body_fat_percentage: '',
    muscle_mass: '',
    medicalHistory: '',
    medication: '',
    medical_condition: '',
    snoring: '',
    calorieIntake: '',
    daily_water_intake: '',
    blood_oxygen_level: '',
    activity_level: '',
    weightGoal: '',
    targetWeight: '',
    fitnessGoals: '',
    healthImprovements: '',
    alcohol: '',
    wakeups: '',
    smoker: '',
    sleepDuration: '',
    ecg: 'normal'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    console.log(formData);

    try {
      const formDataWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "cities"), formDataWithTimestamp);
      alert("Document written with ID: " + docRef.id);

      const filteredData = {
        Age: formData.age,
        Gender: formData.gender,
        Weight: formData.weight,
        Height: formData.height,
        Medical_Conditions: formData.medical_condition,
        Medication: formData.medication,
        Smoker: formData.smoker,
        Alcohol_Consumption: formData.alcohol,
        Sleep_Duration: formData.sleepDuration,
        Wakeups: formData.wakeups,
        Snoring: formData.snoring,
        Heart_Rate: formData.heart_rate_per_munite,
        Blood_Oxygen_Level: formData.blood_oxygen_level,
        ECG: formData.ecg,
        Calories_Intake: formData.calorieIntake,
        Water_Intake: formData.daily_water_intake,
        Stress_Level: "low",
        Mood: "neutral",
        Body_Fat_Percentage: formData.body_fat_percentage,
        Muscle_Mass: formData.muscle_mass,
      };

      const response = await fetch('https://score-calculation-api-sunhacks.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredData),
      });

      const data = await response.json();
      console.log(data.health_score);
      setScore(data.health_score);
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const { health_score, weightGoal, targetWeight, fitnessGoals, healthImprovements } = formData;

      const dataToSend = {
        health_score,
        weightGoal,
        targetWeight,
        fitnessGoals,
        healthImprovements
      };

      // Use axios.post instead of fetch
      const response = await axios.post('https://recomendations-gemeni-api-sunhacks.onrender.com/', dataToSend);
      const data = response.data;
      console.log(data.recommendations); // Log the recommendations received from Flask
      setRecomendation(formatRecommendations(data.recommendations));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [dominantEmotion, setDominantEmotion] = useState(null);

  const handleEmotionClick = async () => {
    try {
      const response = await fetch('http://localhost:5001/analyze', {
        method: 'POST',
      });

      const data = await response.json();
      const emotion = data.dominant_emotion;

      setDominantEmotion(emotion);

      if (emotion === 'neutral') {
        setMood('neutral');
        setStress('moderate');
        console.log("Rudalph");
      } else if (emotion === 'happy') {
        setMood('happy');
        setStress('moderate');
        console.log("Shruti");
      } else {
        setMood('sad');
        setStress('high');
        console.log("Simona");
      }

      console.log("Dominant Emotion:", emotion);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log("Mood:", mood);
    console.log("Stress:", stress);
  }, [mood, stress]);

  return (
    <div>
      <div className='fixed bottom-0 left-0 z-50'>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn drawer-button bg-transparent shadow-none"><BsFillClipboardDataFill size={20} className='text-[#10847E]' /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a><strong className='p-3'>1.  0 to 20 Poor Health</strong></a></li>
              <li><a><strong className='p-3'>2.  21 to 40 Fair Health</strong></a></li>
              <li><a><strong className='p-3'>3.  41 to 60 Good Health</strong></a></li>
              <li><a><strong className='p-3'>4.  61 to 80 Very Good Health</strong></a></li>
              <li><a><strong className='p-3'>5.  81 to 100 Excllent Health</strong></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-40 flex justify-evenly'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Basic Information</strong></h2>
            <div className='p-5'>
              <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
              <br />
              <Input type="number" name="age" placeholder="Age" onChange={handleChange} />
              <br />
              <Input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
              <br />
              <Input type="number" name="heart_rate_per_munite" placeholder="Heart Rate Per Minute" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Physical Attributes</strong></h2>
            <div className='p-5'>
              <Input type="number" name="height" placeholder="Height" onChange={handleChange} />
              <br />
              <Input type="number" name="weight" placeholder="Weight" onChange={handleChange} />
              <br />
              <Input type="number" name="body_fat_percentage" placeholder="Body Fat Percentage" onChange={handleChange} />
              <br />
              <Input type="number" name="muscle_mass" placeholder="Muscle Mass" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Medical History</strong></h2>
            <div className='p-5'>
              <Input id="picture" type="file" />
              <br />
              <Input type="text" name="medication" placeholder="Medication: Yes/No" onChange={handleChange} />
              <br />
              <Input type="text" name="medical_condition" placeholder="Medical Condition: Diabtes/Hypertension/None" onChange={handleChange} />
              <br />
              <Input type="text" name="snoring" placeholder="Snoring:Yes/No" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 mb-10 flex justify-evenly'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Diatery Habits</strong></h2>
            <div className='p-5'>
              <Input type="number" name="calorieIntake" placeholder="Calori Intake" onChange={handleChange} />
              <br />
              <Input type="number" name="daily_water_intake" placeholder="Daily Water Intake" onChange={handleChange} />
              <br />
              <Input type="text" name="blood_oxygen_level" placeholder="Blood Oxygen Level" onChange={handleChange} />
              <br />
              <Input type="number" name="activity_level" placeholder="Activity Level" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Health Goals</strong></h2>
            <div className='p-5'>
              <Input type="number" name="weightGoal" placeholder="Weight Loss/Gain/Maintain" onChange={handleChange} />
              <br />
              <Input type="number" name="targetWeight" placeholder="Target Weight" onChange={handleChange} />
              <br />
              <Input type="number" name="fitnessGoals" placeholder="Fintness Goals" onChange={handleChange} />
              <br />
              <Input type="number" name="healthImprovements" placeholder="Health Improvements" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5 rounded-sm">
          <div className="card-body m-5">
            <h2 className="card-title"><strong>Life Style Factor</strong></h2>
            <div className='p-5'>
              <Input type="text" name="alcohol" placeholder="Alcohol:Heavy/Moderate/None" onChange={handleChange} />
              <br />
              <Input type="number" name="wakeups" placeholder="Wakeups" onChange={handleChange} />
              <br />
              <Input type="text" name="smoker" placeholder="Smoker:Yes/No" onChange={handleChange} />
              <br />
              <Input type="text" name="sleepDuration" placeholder="Sleep Duration" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly mb-10">
        <Button className="bg-[#10847E]" onClick={handleSubmit}>Submit</Button>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="bg-[#10847E]">Recomendations</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full">
              <DrawerHeader>
                <DrawerTitle className="flex justify-center align-middle items-center"><strong>Recomendations</strong></DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <div className="p-5">
                {recomendation}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Button className="bg-[#10847E]" onClick={handleEmotionClick}>Emotion</Button>
        <AlertDialog>
          <AlertDialogTrigger>Score</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Below Mentioned is Your Health Score</AlertDialogTitle>
              <AlertDialogDescription>
                {score}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Page;

