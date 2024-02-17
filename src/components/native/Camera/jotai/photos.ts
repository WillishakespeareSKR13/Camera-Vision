import { atom } from "jotai";

export const PhotoAtom = atom<string[]>([]);

export const LastTakenPhotoAtom = atom((get) => {
  if (get(PhotoAtom).length === 0) return [];
  const photos = get(PhotoAtom);
  return photos.slice(-3);
});
