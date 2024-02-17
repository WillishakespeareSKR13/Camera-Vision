import { Button, StyleSheet, Text, View } from "react-native";
import {
  useCameraPermission,
  useMicrophonePermission,
} from "react-native-vision-camera";
import { RC } from "../../types/react";
import Valid from "../helpers/Valid";

type Props = {};

export const PermissionCamera: RC = (props) => {
  const { children } = props;
  const permissionCamera = useCameraPermission();
  const permissionMicrofone = useMicrophonePermission();

  const setPermission = async () => {
    const camera = await permissionCamera.requestPermission();
    const microfone = await permissionMicrofone.requestPermission();
    // do if(camera && microfone) ... send Alert
    // or validate if the user has granted the permissions
  };

  const hasPermission =
    permissionCamera.hasPermission && permissionMicrofone.hasPermission;

  return (
    <View style={styles.container}>
      <Valid isValid={hasPermission}>{children}</Valid>
      <Valid isValid={!hasPermission}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            The Camera permission is not granted. Please grant the permission to
            use the camera.
          </Text>
          <Button title="Request Permission" onPress={setPermission} />
        </View>
      </Valid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
