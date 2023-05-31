import React from "react";
import "./App.css";
import Dice from "./Dice";

const App = () => {
  const [dices, setDices] = React.useState('')
   const [diceArray, setDiceArray] = React.useState([])

const MIN_DICE = 1;
const MAX_DICE = 6;
 
   const handleDiceFormSubmit = e => {
     e.preventDefault()
     const newDiceArray = new Array(Number(dices)).fill(MIN_DICE)
     const newDices = newDiceArray.map(value=> value * Math.ceil(Math.random() * MAX_DICE )  )
     setDiceArray(newDices)
   }
 

   return (
     <div className='App'>
       <div className='wrapper'>
         <form
           className='number-of-dices'
           onSubmit={handleDiceFormSubmit}>
           <label htmlFor='dice-input' className='dice-input-label'>
             Number of dice
           </label>
           <input
             id='dice-input'
             type='number'
             onChange={e => setDices(e.target.value)}
             min={1}
             value={dices}
             max={99}
             className='dice-input'
             required
           />
           <button className='btn-roll-dice'>Roll</button>
         </form>
 
         <section className='dice-squares'>
           {diceArray?.map((diceNum, index) => (
             <Dice diceNumber={diceNum} key={index}/>
           ))}
         </section>
       </div>
     </div>
   )
 }
 export default App;
