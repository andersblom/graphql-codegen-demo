import Link from "next/link";

export default async function Web() {
  return (
    <div>
      <h1>Examples:</h1>
      <Link href="/manual">Manual</Link>{" "}
      <Link href="/codegen">Codegen</Link>
    </div>
  );
}
