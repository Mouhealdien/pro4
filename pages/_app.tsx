import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "../providers/AuthProvider";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
