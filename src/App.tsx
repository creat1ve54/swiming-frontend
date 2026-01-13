import React, { useEffect } from "react";
import AppRoutes from "./routes/Routes";
import { tournamentNameThunk } from "./redux/tournamentName/tournamentNameSlice";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tournamentNameThunk());
  }, []);


  return (
    <div className="app">
      {/* <Header /> */}
      <div className="app__body">
        <AppRoutes />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
