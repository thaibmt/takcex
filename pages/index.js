// import styles from '../../styles/Home.module.css'
import HeaderTikCex from "../components/tikcex/Header";
import BodyTikcex from "../components/tikcex/Body";
import Footer from "../components/tikcex/Footer";
import CustomHead from "../components/shared/CustomHead";
import styles from "./tikcex/styles/tikcex.module.css";
import Sidebar from "../components/tikcex/Sidebar";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <CustomHead />
      <main id={styles.landing}>
        <HeaderTikCex />
        <Sidebar />
        <BodyTikcex />
        <Footer />
        <ToastContainer />
      </main>
    </>
  );
}
