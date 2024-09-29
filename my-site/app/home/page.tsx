// app/home/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="px-6 py-10">
      {/* About Me */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm a [Your Profession], with experience in [Your Field]. I love working on innovative projects and sharing my knowledge with others.
        </p>
      </section>

      {/* Detailed Project List */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Project One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A detailed description of your project.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Project Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A detailed description of your project.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume */}
      <section className="text-center">
        <Button variant="default" className="mt-4">Download My Resume</Button>
      </section>
    </div>
  );
}
