import { useState } from "react";
import { GeneratedText } from "./Components/GeneratedText";
import { Input } from "./Components/Input";
import { CopyBtn } from "./Components/CopyBtn";
import axios from 'axios';
import "./App.css";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function App() {
  let [params, setParams] = useState({
    inputValue: 5,
    type: "paragraphs",
  });
  let [copyText, setCopyText] = useState("Copy to Clipboard");

  let [result, setResult] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ]);
  
  function changeCopyText() {
    setCopyText("Copied");
    navigator.clipboard.writeText(result)

    setTimeout(() => {
      setCopyText("Copy to Clipboard");
    }, 1200);
  }
  function handleLoremRequest(e) {
    e.preventDefault();
    const env = import.meta.env.VITE_ENV_IP;
    const ApiRequest = axios.get( `${env}?${params.type}=${params.inputValue}`);

    ApiRequest.then((response) => {
        // Handle the first response data
        const responseData = response.data.response;
        setResult(responseData);
        return responseData;
    })
  }

  const handleChange = (e) => {
    setParams({ ...params, inputValue: e.target.value });
  };
  const handleChangeType = (e) => {
    setParams({ ...params, type: e.target.value });
  };





  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="website-title">
            <h1 className="text-uppercase fw-light">Lorem Ipsum Text Generator</h1>
            <p className="under-text">Generate fast dummy text for you project.</p>

            </div>
            <div className="form-group">
              <Input
                inputType={"number"}
                amount={params.inputValue}
                onInputChange={handleChange}
              />
              <Input
                inputType={"select"}
                amount={params.type}
                onInputChange={handleChangeType}
              />
              <Input inputType={"submit"} onInputChange={handleLoremRequest} />
              <CopyBtn onInputChange={changeCopyText} textValue={copyText} />
            </div>
            <GeneratedText genText={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;