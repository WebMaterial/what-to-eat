const marqueeContent = '🍽️ MESIDOKO';
const items = Array.from({ length: 10 })

const Marquee = () => {


  return (
    <div className="marquee">
      <div className="marquee-content">

        {[...items, ...items].map((_,i) => {
          return (
            <span key={`marquee-${i}`}>{marqueeContent}</span>
          )
        })}

      </div>
    </div>
  )
};

export default Marquee;