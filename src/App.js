import { useDispatch, useSelector } from "react-redux";
import "./index.css"
import { fetchInventoryFailure, fetchInventoryRequest, fetchInventorySuccess } from "./store/actions/inventoryActions";
import { fetchInventoryData } from "./services/inventory";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
function App() {
  const dispatch = useDispatch();
  const getInventroyData = async () => {
    try {
      dispatch(fetchInventoryRequest());
      const response = await fetchInventoryData();
      dispatch(fetchInventorySuccess(response));
    } catch (err) {
      dispatch(fetchInventoryFailure(err));
    }
  };

  useEffect(() => {
    getInventroyData();
  }, []);

  return (
  <>
  <NavBar/>
  </>
  );
}

export default App;
