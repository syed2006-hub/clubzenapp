import { getEvent } from "@/lib/events";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// ✅ THIS is what WhatsApp reads
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params.id);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  const url = `https://clubzenapp.vercel.app/event/${params.id}`;

  return {
    title: event.eventName,
    description: event.description,

    openGraph: {
      title: event.eventName,
      description: event.description,
      url,
      type: "website",
      images: [
        {
          url: event.thumbnail, // MUST be PUBLIC HTTPS IMAGE
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: event.eventName,
      description: event.description,
      images: [event.thumbnail],
    },
  };
}

// ✅ Page UI (NOT used by WhatsApp bots, only humans)
export default async function Page({ params }: Props) {
  const event = await getEvent(params.id);

  if (!event) return <div>Event not found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{event.eventName}</h1>
      <p>{event.description}</p>
      <img src={event.thumbnail} width="400" />
    </div>
  );
}