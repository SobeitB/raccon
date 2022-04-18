import { useState, useCallback } from "react";

import Hedaer from './components/header/header';
import Main from './components/main/main';
import AboutUs from './components/aboutUs/aboutUs';
import RoadMap from './components/roadMap/roadMap';
import Market from './components/market/market';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';

function App() {
  const [contract, setContract] = useState<any>(false);
  const [error, setErrors] = useState<false | string>(false);
  const [component, setComponent] = useState<string>('');

  const onError = useCallback((name: string) => {
    setErrors(name)
  }, [error, setErrors])

  return (
    <div>
      {error &&
        <div className="bodyError" onClick={() => {setErrors(false)}}>
          <div className="contError">
            {error}
          </div>
        </div>
      }

      <Hedaer 
        setContract={setContract}
        setComponent={setComponent}
      />

      <Main 
        setComponent={setComponent}
      />

      <AboutUs 
        setComponent={setComponent}
        component={component}
      />
      
      <Market
        setComponent={setComponent}
        component={component}
        contract={contract}
        setErrors={onError}
      />
      
      <RoadMap 
        setComponent={setComponent}
        component={component}
      />
      
      <Faq 
        setComponent={setComponent}
        component={component}
      />

      <Footer />
    </div>
  );
}

export default App;
