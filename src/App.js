import { useDispatch } from "react-redux";
import "./index.css"
import { fetchInventoryFailure, fetchInventoryRequest, fetchInventorySuccess } from "./store/actions/inventoryActions";
import { fetchInventoryData } from "./services/inventory";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
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
  }, [getInventroyData]);

  return (
  <Dashboard/>
  );
}

export default App;
