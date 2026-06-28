import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center my-50">

      <span className="rounded-full border px-4 py-2 text-sm">
        ✨ Build your future by manyfesting it
      </span>

      <h1 className="mt-8 text-6xl font-bold tracking-tight">
        Think.
        <br />
        Believe.
        <br />
        Live.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Manyfest helps you turn your biggest dreams
        into reality with consistent actions and meaningful progress.
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg" variant={"default"}>
          Manyfest Now
        </Button>
      </div>

    </section>
  );
}