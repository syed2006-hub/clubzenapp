import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Event } from "../app/types/event";

export async function getEvent(id: string): Promise<Event | null> {
  const ref = doc(db, "events", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    id: snap.id,
    eventName: data.eventName,
    description: data.description,
    thumbnail: data.thumbnail,
    place: data.place,
  };
} 