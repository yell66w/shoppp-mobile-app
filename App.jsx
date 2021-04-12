import React from "react";
import { useFonts } from "expo-font";
import Navigator from "./routes/Navigator";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <Navigator />;
}
