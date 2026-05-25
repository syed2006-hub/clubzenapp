import { getEvent } from "@/lib/events";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// 🔥 FIX: await params FIRST
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log("hellow")
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.eventName,
    description: event.description,
    openGraph: {
      title: event.eventName,
      description: event.description,
      url: `https://clubzenapp.vercel.app/event/${id}`,
      images: [
        {
          url: event.thumbnail,
        },
      ],

      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{event.eventName}</h1>
      <p>{event.description}</p>
      <img src={event.thumbnail} width="400" />
    </div>
  );
}