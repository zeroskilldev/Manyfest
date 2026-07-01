import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 my-10">
      <div className="mx-auto max-w-4xl rounded-3xl border px-10 py-16 text-center">
        <h2 className="text-4xl font-bold">
            Think. Believe. Live.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Your future starts with one decision. Create your first <i>manyfest </i>
          today and take the first step toward your goals.
        </p>

        <Button className="mt-8 gap-2" size="lg">
          Manyfest Now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};