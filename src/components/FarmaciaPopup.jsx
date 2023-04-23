import "./FarmaciaPopupStyle.css"

function FarmaciaPopup ( {farmacia} ) {
  return ( 
    <div>
      {Object.keys(farmacia).map((key, index) => {
        if (farmacia[key] && key !== "latitude" && key !== "longitude") {
        return (
          <div key={index}>
            <p>
              {key}: {farmacia[key]}
            </p>
          </div>
        )
      }
      })}
    </div>
   );
}

export default FarmaciaPopup ;