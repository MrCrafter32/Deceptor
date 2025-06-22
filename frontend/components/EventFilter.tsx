"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EventFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [node, setNode] = useState(searchParams.get("node_id") || "");
  const [service, setService] = useState(searchParams.get("service") || "");
  const [mitre, setMitre] = useState(searchParams.get("mitre_tag") || "");

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (node) params.set("node_id", node);
    if (service) params.set("service", service);
    if (mitre) params.set("mitre_tag", mitre);

    router.push("?" + params.toString());
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
      <input
        value={node}
        onChange={(e) => setNode(e.target.value)}
        placeholder="Node ID"
        className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2 rounded"
      />
      <input
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Service (e.g. ssh)"
        className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2 rounded"
      />
      <input
        value={mitre}
        onChange={(e) => setMitre(e.target.value)}
        placeholder="MITRE Tag"
        className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2 rounded"
      />
      <button
        onClick={handleFilter}
        className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black px-4 py-2 rounded shadow hover:scale-105 transition"
      >
        Filter
      </button>
    </div>
  );
}
