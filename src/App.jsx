import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import { Suspense } from "react";

const supportPromise = () => fetch("/data.json").then((res) => res.json());

function App() {
  const promise = supportPromise();
  // console.log(promise);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={"Loading...."}>
          <CardContainer promise={promise}></CardContainer>
        </Suspense>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
