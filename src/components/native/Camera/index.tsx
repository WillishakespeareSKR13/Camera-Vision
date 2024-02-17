import { StyleSheet, View } from "react-native";
import { RC } from "../../../types/react";
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
} from "react-native-vision-camera";
import { CameraNoDevice } from "./components/NoDevice";
import { useRef } from "react";
import { CameraCarrusel } from "./components/Carrusel";
import { RecordButton } from "./components/Record";

export const NativeCamera: RC = () => {
  const camera = useRef<Camera>(null);

  const device = useCameraDevice("back", {
    physicalDevices: ["wide-angle-camera"],
  });

  const format = useCameraFormat(device, [
    {
      fps: 60,
    },
  ]);

  if (device === undefined) return <CameraNoDevice />;

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        isActive={true}
        photo={true}
        format={format}
        device={device}
        zoom={0}
      />
      <CameraCarrusel />
      <RecordButton camera={camera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    width: "100%",
    flex: 1,
  },
});
