import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTakePhoto } from "../hooks/useTakePhoto";
import { CameraRef } from "../types/ref";

export const RecordButton = (props: CameraRef) => {
  const { takePhoto } = useTakePhoto(props);

  return (
    <TouchableOpacity onPress={takePhoto} style={styles.container}>
      <View style={styles.center} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#b8b8b8d9",
    alignSelf: "center",
    zIndex: 100,
    padding: 8,
  },
  center: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "white",
  },
});
