import { View, Touchable } from "@stellaria/pulsar";
import { styles } from "./styles";

const Page = () => {
  return (
    <View style={styles.container}>
      <Touchable text="Press me" />
      {/* <PermissionCamera>
        <NativeCamera />
      </PermissionCamera> */}
    </View>
  );
};

export default Page;
