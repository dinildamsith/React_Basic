import "./App.css";
// methn BrowsRouter eken kiyane api ape application ekat Routing use karnwa kiyala.BrowserRouter eka tama react router dom eke tiyen root componenet eka
// Routes eken kiyane Routes List ekak add karganwa kiyala
// Route eken kiyane singel route ekak add kargnwa kiyala
import { BrowserRouter, Route, Routes } from "react-router-dom"; 


import UrlParameterTestPage from "./pages/urlParameterTest";
import NaveBar from "./components/nav";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* ---------Routes----------
        < Routes > kiyana eka React Router v6 ekdi hadunwala dila tiyene.ita kalin e wenuwat tibee < Swin dtch > kiyana eka
      */}
        <Routes>
          {/* ------------Route----------
              // < Route > Use karne root url path eki component athra  mapping kargana 
             //  path="/" path eka use karne ethnt ethn tiyen path eka url ekt same da check kargan wagy
            //   element={<HomePage />} ehem same nm HomePage kiyana component eka lode karn eka wene.
          */}
          <Route path="/" element={<NaveBar/>} />  
          <Route path="/urlParameterTest/:parm" element={<UrlParameterTestPage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
