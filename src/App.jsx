import { useState } from 'react';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Footer from './components/Footer';
import Front from './components/Front';
import Category from './components/Category';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App(props) {

  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    setIsStart(true);
  }

  return (
    <div className="container">

      <div className="content-wrapper">

        <div className="side-content">

          <Marquee />

        </div>




          <div className="center-content">

          <SimpleBar  forceVisible="y" autoHide={false} style={{ maxHeight: '100vh' }}>

            <Header />
            
            <main className="main-content">

      
              {
                isStart ? (
                  <Category />
                ) : (
                  <Front handleStart={handleStart} />
                )
              }
            </main>


            <Footer />
            
          </SimpleBar>

          </div>



        <div className="side-content">

          <Marquee />

          </div>

      </div>

    </div>
  )
}

export default App;
