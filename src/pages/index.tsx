import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import Standard from "./standard";
import PersonalInfo from "./personalInfo";
import EsigenzeFormative from "./esigenzeFormative";
import GestioneStandard from "./gestioneStandard";
import Machine from "./machine";

function BasePage() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Standard />} />
        <Route path="standard" element={<Standard />} />
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="esigenze-formative" element={<EsigenzeFormative />} />
        <Route path="gestione-standard" element={<GestioneStandard />} />
        <Route path="machine" element={<Machine />} />
      </Route>
    </Routes>
  );
}

export default BasePage;
