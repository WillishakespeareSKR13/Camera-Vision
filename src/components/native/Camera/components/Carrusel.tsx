import { Image, StyleSheet, Text, View } from "react-native";
import { RC } from "../../../../types/react";
import { useAtomValue } from "jotai";
import { LastTakenPhotoAtom, PhotoAtom } from "../jotai/photos";
import Valid from "../../../helpers/Valid";

export const CameraCarrusel: RC = () => {
  const photos = useAtomValue(PhotoAtom);
  const lastTakenPhotos = useAtomValue(LastTakenPhotoAtom);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Valid isValid={photos.length > 3}>
          <View
            style={{
              position: "absolute",
              bottom: -10,
              right: 20,
              backgroundColor: "white",
              width: 26,
              height: 26,
              borderRadius: 15,
              zIndex: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {photos.length}
            </Text>
          </View>
        </Valid>
        {lastTakenPhotos.map((photo, index) =>
          photo ? (
            <Image
              key={photo}
              style={[
                styles.image,
                index > 0 && styles.backImage,
                {
                  zIndex: lastTakenPhotos.length - index,

                  transform: [
                    { translateX: index * 15 },
                    { rotate: `${index * 20}deg` },
                  ],
                },
              ]}
              source={{ uri: photo }}
            />
          ) : (
            <View key={index} style={styles.image} />
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    gap: 10,
    bottom: 40,
    left: 40,
  },
  wrapper: {
    position: "relative",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 40,
    height: 60,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "black",
  },
  backImage: {
    position: "absolute",
    backgroundColor: "blue",
  },
});
