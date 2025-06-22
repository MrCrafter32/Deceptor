
export default function NodeCard({ node }: { node: any }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow-sm">
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          🖥️ {node.node_id}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{node.type || "generic"}</p>
      </div>

      {node.location && (
        <p className="text-sm mb-1">
          <strong>Location:</strong> {node.location}
        </p>
      )}

      <p className="text-sm mb-1">
        <strong>Registered:</strong>{" "}
        {new Date(node.registered_at).toLocaleString()}
      </p>

      <p className="text-sm">
        <strong>Last Seen:</strong>{" "}
        {node.last_seen ? new Date(node.last_seen).toLocaleString() : "Never"}
      </p>
    </div>
  );
}