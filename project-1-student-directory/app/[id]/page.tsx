import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../../data/students";

export default async function StudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((item) => item.id === id);
  if (!student) notFound();

  return <main className="page-wrap detail-wrap"><nav className="top-nav"><Link href="/" className="brand"><span className="brand-dot" /> STUDY CLUB</Link><Link href="/">← All students</Link></nav><section className="detail-card"><div className={`avatar avatar-large ${student.color}`}>{student.name.split(" ").map((part) => part[0]).join("")}</div><p className="eyebrow">STUDENT PROFILE · {student.id}</p><h1>{student.name}</h1><p className="lead">{student.course} · {student.year}</p><div className="detail-info"><span>Email</span><a href={`mailto:${student.email}`}>{student.email}</a></div><Link className="button-link" href="/">Back to directory</Link></section></main>;
}
