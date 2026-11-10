import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("tl");

export default function Page() {
  return <HomePage lang="tl" />;
}
