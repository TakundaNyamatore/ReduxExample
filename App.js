import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store.js";
import Counter from "./src/screen/Counter.js";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
