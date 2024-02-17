import { StyleSheet, Text, View } from "react-native";
import { RC } from "../../../../types/react";

type Props = {};

export const CameraNoDevice: RC = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>The device has no camera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
