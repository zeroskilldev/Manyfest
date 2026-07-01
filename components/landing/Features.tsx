import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { features } from "./features";

export const Features = () => {
    return <section className="pt-32 my-10">
        <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Everything you need to manyfest your future
          </h2>

          <p className="mt-4 text-muted-foreground">
            Designed to help you dream bigger, stay focused, and achieve more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {

            return (
              <Card key={feature.title}>
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>
                    <div className="border-b-2">
                        
                    </div>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
}