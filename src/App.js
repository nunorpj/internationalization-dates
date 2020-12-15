import React from "react";
import ChangeLanguageBtn from "./components/ChangeLanguageBtn"
import Title from "./components/Title"
import DateComponent from "./components/DateComponent"
import './config/i18n'

const style={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const App = () => {

  return <div style={style}>
          <Title />
          <ChangeLanguageBtn />
          <DateComponent />
        </div>
};

export default App;
