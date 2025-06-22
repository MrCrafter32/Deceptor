// app/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchEvents, fetchEventsbyQuery } from "@/lib/api";
import EventCard from "@/components/EventCard";
import EventFilter from "@/components/EventFilter";

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    fetchEventsbyQuery(params).then(setEvents).catch(console.error);
  }, [searchParams]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">📊 Event Log</h1>
      <EventFilter />

      {events.length === 0 ? (
        <p className="text-sm text-zinc-500">No events match the filter.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event: any) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
