import { View, Touchable } from "@stellaria/pulsar";
import { styles } from "./styles";

const Page = () => {
  return (
    <View style={styles.container}>
      <Touchable text="Press me" />
    </View>
  );
};

export default Page;
