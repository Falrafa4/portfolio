import { useParams } from 'react-router';

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {slug}</h1>
      <p className="text-text-muted">Project details will appear here.</p>
    </div>
  );
}
