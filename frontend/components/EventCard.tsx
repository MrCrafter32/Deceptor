export default function EventCard({ event }: { event: any }) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-sm bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-zinc-600 dark:text-zinc-400">Node: {event.node_id}</span>
        <span className="text-zinc-400">{new Date(event.timestamp).toLocaleString()}</span>
      </div>
      <div className="mb-1 text-base">
        <span className="font-semibold">Service:</span> {event.service}
      </div>
      <div className="mb-1">
        <span className="font-semibold">Action:</span> {event.action}
      </div>
      <div>
        <span className="font-semibold text-red-500">MITRE:</span> {event.mitre_tag}
      </div>
    </div>
  );
}
