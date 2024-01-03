import React,{useState,useEffect} from 'react';
import { MapContainer,TileLayer,Polygon} from 'react-leaflet';
import { statesData } from './data';
import 'leaflet/dist/leaflet.css';

export const Game = () => {
  const center= [38.103336587639866, -98.94730257149902];
  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  let [score,setScore]=useState(0);
  let [states,setStates]=useState([]);
  let [queue,setQueue]=useState(0);
  let [currentState,setCurrentState]=useState('');

  useEffect(()=>{
    startGame();
  },[]);

  function startGame(){
    let newGameStates=shuffle(usStates);
    setStates(newGameStates);
    setCurrentState(newGameStates[0]);
    // console.log(newGameStates);
    //implement here
  }

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  function checkAnswer(state){
      setQueue((prev)=>prev+1);
    if(state.properties.name==currentState){
        setScore((prev)=>prev+1);
        if(queue!=states.length){
            setCurrentState(states[queue]);
        }else{
            endGame();
        }
        return true
    } 
    setCurrentState(states[queue]);
    return false;
  }

  function endGame(){
    console.log("you final score is", score);
  }
  return (
    <div className='relative'>
      <MapContainer center={center} zoom={4.75} style={{width:"100vw",height:"100vh"}}>
        <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=goXpO5R76k7VtnaD73kI'attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'></TileLayer>
        {
          statesData.features.map((state)=>{
            const coordinates= state.geometry.coordinates[0].map((item)=>[item[1],item[0]])
            return <Polygon pathOptions={{
              fillColor:"#EF233C",
              fillOpacity:0.7,
              weight:2,
              opacity:1,
              dashArray:3,
              color:"white"
            }} 
            positions={coordinates}
            eventHandlers={{
              mouseover:(e)=>{
                const layer=e.target;
                layer.setStyle({
                  fillOpacity:5,
                  weight:5,
                  dashArray:"3",
                  color:'#D90429'
                })
              },
              mouseout:(e)=>{
                const layer=e.target;
                layer.setStyle({
                  fillOpacity:0.7,
                  weight:2,
                  dashArray:"3",
                  color:'white'
                })
              },
              click:(e)=>{
                console.log(state.properties.name);
                let flag=checkAnswer(state);
                // console.log(flag)
                const layer=e.target;
                
                layer.setStyle({
                    fillColor:flag?"green":"red",
                    fillOpacity:0.7,
                    weight:2,
                    dashArray:"3",
                    color:'white'
                })
              }
            }}
            />
          })
        }
      </MapContainer>
      <div className='absolute bg-white px-8 py-4 rounded-lg z-50 bottom-8 left-8 w-fit font-semibold shadow' style={{zIndex:5000}}>
        Score : {score}
        {currentState? <h1 className='mb-2'>You have to find <strong>{currentState}</strong></h1>: ""}
        <button className='border px-4 py-2'>Skip</button>
      </div>
  </div>
  )
}

export default Game
