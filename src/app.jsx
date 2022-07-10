import { useRef } from "react";
import "./app.css";

function App({ cors }) {
  const resultRef = useRef();

  const handleCorsSuccess = (result) => {
    console.log(result);
    resultRef.current.innerHTML = result;
  };

  const handleCorsError = (error) => {
    console.error(error);
    resultRef.current.innerHTML = "ERROR";
  };

  const onGetClick = () => {
    cors
      .get()
      .then((result) => handleCorsSuccess(result))
      .catch((error) => handleCorsError(error));
  };

  const onPostClick = () => {
    cors
      .post()
      .then((result) => handleCorsSuccess(result))
      .catch((error) => handleCorsError(error));
  };

  const onPatchClick = () => {
    cors
      .patch()
      .then((result) => handleCorsSuccess(result))
      .catch((error) => handleCorsError(error));
  };

  const onDeleteClick = () => {
    cors
      .delete()
      .then((result) => handleCorsSuccess(result))
      .catch((error) => handleCorsError(error));
  };

  return (
    <>
      <button onClick={onGetClick}>GET</button>
      <button onClick={onPostClick}>POST</button>
      <button onClick={onPatchClick}>PATCH</button>
      <button onClick={onDeleteClick}>DELETE</button>
      <p ref={resultRef}>Hello</p>
    </>
  );
}

export default App;
