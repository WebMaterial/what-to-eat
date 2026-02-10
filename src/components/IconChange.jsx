import { useState, useEffect } from 'react';

const ICON_DATA = ['🍳','🥘','🍲','🥣','🍱','🍚','🍙','🍘','🍜','🍝','🍛','🍣','🍤','🍥','🍢','🍡','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥟','🥙','🧆','🥞','🧇','🍰','🧁','🍮','🍪','🍩','🍫','🍬','🍭','🍦','🍨','🍧','🍯','🥚','🧀','🥩','🍗','🍖','🧂','🧈']

const IconChange = () => {

  const [icons, setIcons] = useState(ICON_DATA[0]);

  const iconGenerate = () => {
    setIcons(ICON_DATA[Math.floor(Math.random() * ICON_DATA.length)]);
  }

  useEffect(() => {
    const id = setInterval(iconGenerate, 2000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="icon-wrapper" style={{padding: '24px 0'}}>
      <div className="icon-text">
        <span>
          {icons}
          </span>
      </div>
    </div>
  );
};

export default IconChange;