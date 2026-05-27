import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { ProjectDetail } from './ProjectDetail';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title.split(' — ')[0],
    description: project.summary
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
