import { useSetAtom } from "jotai";
import { PhotoAtom } from "../jotai/photos";
import { CameraRef } from "../types/ref";

export const useTakePhoto = (props: CameraRef) => {
  const { camera } = props;
  const setPhotos = useSetAtom(PhotoAtom);

  const takePhoto = () => {
    camera.current
      ?.takePhoto({
        qualityPrioritization: "speed",
        flash: "auto",
        enableShutterSound: false,
        enableAutoStabilization: false,
      })
      .then((file) => {
        if (!file) return;
        const url = `file://${file.path}`;
        setPhotos((prev) => [...prev, url]);
      });
  };
  return {
    takePhoto,
  };
};
