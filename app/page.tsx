import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6 bg-slate-950 text-slate-100">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">Ankur&apos;s Portfolio</h1>
        <p className="text-sm text-slate-400">
          Finance · Healthcare · Green Energy
        </p>
      </div>

      <Button className="px-6">
        View Projects
      </Button>
    </main>
  );
}
