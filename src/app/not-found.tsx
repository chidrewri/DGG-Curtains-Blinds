import Link from "next/link";
import { DggIcon } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-navy px-6 text-center text-ivory">
      <DggIcon className="h-24 w-auto" />
      <h1 className="text-3xl">Page not found</h1>
      <p className="max-w-md text-mist">This page does not exist. Hindi mahanap ang pahinang ito.</p>
      <Link href="/" className="btn btn-gold">Go to the home page</Link>
    </main>
  );
}
