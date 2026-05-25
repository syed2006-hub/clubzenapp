import { db } from "./firebaseAdmin";
import { Event } from "../app/types/event";

export async function getEvent(id: string): Promise<Event | null> {
  const snap = await db.collection("events").doc(id).get();

  if (!snap.exists) return null;

  const data = snap.data();

  return {
    id: snap.id,
    eventName: data?.eventName ?? "",
    description: data?.description ?? "",
    thumbnail: data?.thumbnail ?? "",
    place: data?.place ?? "",
  };
}