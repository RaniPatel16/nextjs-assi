"use client";

import Link from "next/link";
import { useState } from "react";
import { students } from "../data/students";

export default function StudentDirectoryPage() {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All courses");
  const visibleStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
    const matchesCourse = course === "All courses" || student.course === course;
    return matchesSearch && matchesCourse;
  });

  return <main className="page-wrap">
    <BackHome />
    <section className="hero hero-blue"><p className="eyebrow">CAMPUS · STUDENTS</p><h1>Find your<br />people.</h1><p>A friendly directory of students in our learning community.</p><span className="hero-shape">✳</span></section>
    <section className="content-section">
      <div className="section-heading"><div><p className="eyebrow">THE COMMUNITY</p><h2>All students <span className="count">{visibleStudents.length}</span></h2></div><p className="muted">Get to know your classmates</p></div>
      <div className="filters"><input aria-label="Search students" placeholder="Search by name..." value={search} onChange={(event) => setSearch(event.target.value)} /><select aria-label="Filter by course" value={course} onChange={(event) => setCourse(event.target.value)}><option>All courses</option><option>Computer Science</option><option>Information Technology</option><option>Data Science</option></select></div>
      <div className="student-grid">{visibleStudents.map((student, index) => <Link href={`/${student.id}`} className="student-card" key={student.id}><div className={`avatar ${student.color}`}>{student.name.split(" ").map((part) => part[0]).join("")}</div><span className="card-number">STUDENT {String(index + 1).padStart(2, "0")}</span><h3>{student.name}</h3><p>{student.course}</p><span className="card-footer">{student.year}<span>View profile ↗</span></span></Link>)}</div>
      {visibleStudents.length === 0 && <p className="empty-state">No students found. Try another name or course.</p>}
    </section>
  </main>;
}

function BackHome() { return <nav className="top-nav"><Link href="/" className="brand"><span className="brand-dot" /> STUDY CLUB</Link><Link href="/">Home ↗</Link></nav>; }
