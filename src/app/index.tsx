import { View } from "react-native";
import { styles } from "./styles";
import { PermissionCamera } from "../components/permissions/Camera";
import { NativeCamera } from "../components/native/Camera";

const Page = () => {
  return (
    <View style={styles.container}>
      <PermissionCamera>
        <NativeCamera />
      </PermissionCamera>
    </View>
  );
};

export default Page;
