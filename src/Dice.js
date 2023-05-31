
 const generateClassName = diceNum => {
    switch (diceNum) {
      case 1:
        return 'one-rolled'
      case 2:
        return 'two-rolled'
      case 3:
        return 'three-rolled'
      case 4:
        return 'four-rolled'
      case 5:
        return 'five-rolled'
      case 6:
        return 'six-rolled'
      default:
        return
    }
  }

function Dice({diceNumber }){

    console.log(generateClassName(diceNumber))

return (<div
    className={`dice-square ${generateClassName(diceNumber)}`}
   >
    {new Array(diceNumber)
      ?.fill(Number(diceNumber))
      .map((val, idx) => (
        <span
          className={`dice-dot dot-${val}${idx + 1}`}
          key={idx}></span>
      ))}
  </div>)




}





export default Dice