"use client"
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { collection, getDocs } from "firebase/firestore";
import db from '@/Components/firebase';

const Page = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "cities"));
                const data = [];
                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    data.push({
                        timestamp: docData.timestamp.toDate(), // Convert Firestore timestamp to JavaScript Date object
                        age: parseFloat(docData.age), // Convert to number
                        heartRate: parseFloat(docData.heart_rate_per_munite),
                        height: parseFloat(docData.height),
                        weight: parseFloat(docData.weight),
                        bodyFatPercentage: parseFloat(docData.body_fat_percentage),
                        muscleMass: parseFloat(docData.muscle_mass),
                        medicalHistory: docData.medicalHistory,
                        medication: docData.medication,
                        medicalCondition: docData.medical_condition,
                        snoring: docData.snoring,
                        calorieIntake: parseFloat(docData.calorieIntake),
                        dailyWaterIntake: parseFloat(docData.daily_water_intake),
                        bloodOxygenLevel: parseFloat(docData.blood_oxygen_level),
                        activityLevel: parseFloat(docData.activity_level),
                        weightGoal: parseFloat(docData.weightGoal),
                        targetWeight: parseFloat(docData.targetWeight),
                        fitnessGoals: parseFloat(docData.fitnessGoals),
                        healthImprovements: parseFloat(docData.healthImprovements),
                        alcohol: docData.alcohol,
                        wakeups: parseFloat(docData.wakeups),
                        smoker: docData.smoker,
                        sleepDuration: parseFloat(docData.sleepDuration),
                        ecg: docData.ecg,
                    });
                });
                setChartData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className=' mt-40 ml-72 flex justify-between align-middle'>
            <div className='flex justify-center align-middle items-center'>
                <BarChart
                    width={900}
                    height={400}
                    data={chartData}
                    // margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    className='flex justify-center align-middle items-center'
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="height" fill="#8884d8" barSize={30} />
                    <Bar dataKey="weight" fill="#82ca9d" barSize={30} />
                    <Bar dataKey="heartRate" fill="#ffc658" barSize={30} />
                    <Bar dataKey="targetWeight" fill="#283c63" barSize={30} />
                    <Bar dataKey="dailyWaterIntake" fill="#1b4332" barSize={30} />
                    <Bar dataKey="targetWeight" fill="#ffdc6b" barSize={30} />
                </BarChart>
            </div>
            
        </div>
    );
};

export default Page;
