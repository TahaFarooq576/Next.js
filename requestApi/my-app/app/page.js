"use client";
import Image from "next/image";

export default function Home() {
  const handleSubmit = async () => {
    // if you expect an event, e.preventDefault() maybe
    let data = {
      name: "Taha Farooq",
      role: "Coder"
    };
    const a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await a.json();
    console.log(res);
  };
 
  return (
    <div>
      <h1>Next.js API Routes Demo</h1>
      <button onClick={handleSubmit}>Click me</button>
    </div>
  );
}
