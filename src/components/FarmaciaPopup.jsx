import "./FarmaciaPopupStyle.css"

function FarmaciaPopup ( {farmacia} ) {
  return ( 
    <div>
      {Object.keys(farmacia).map((key, index) => {
        if (farmacia[key] && key !== "latitude" && key !== "longitude" && key !== "id") {
        return (
          <div key={index}>
            <span style={{textTransform: "capitalize", fontWeight: "bold"}}>{key.replace(/([a-z])([A-Z])/g, `$1 $2`)}</span><span>: {farmacia[key]}</span>
          </div>
        )
      }
      })}
    </div>
   );
}

export default FarmaciaPopup ;