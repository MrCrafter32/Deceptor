export async function fetchEvents() {
  const res = await fetch("http://localhost:8000/api/v1/events", {
    headers: {
      Authorization: "Bearer api_key1"
    },
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to fetch events");

  return res.json();
}

export async function fetchNodes() {
  const res = await fetch("http://localhost:8000/api/v1/nodes", {
    headers: {
      Authorization: "Bearer api_key1"
    },
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to fetch nodes");
  return res.json();
}

export async function fetchEventsbyQuery(params?: Record<string, string>) {
  const query = params
    ? "?" + new URLSearchParams(params).toString()
    : "";

  const res = await fetch(`http://localhost:8000/api/v1/events${query}`, {
    headers: {
      Authorization: "Bearer api_key1"
    },
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}
