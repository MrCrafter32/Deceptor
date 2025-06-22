import { fetchNodes } from "@/lib/api";
import NodeCard from "@/components/NodeCard";

export default async function NodesPage() {
  const nodes = await fetchNodes();

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Registered Nodes</h1>

      {nodes.length === 0 ? (
        <p className="text-sm text-zinc-500">No nodes registered yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nodes.map((node: any) => (
            <NodeCard key={node._id} node={node} />
          ))}
        </div>
      )}
    </main>
  );
}