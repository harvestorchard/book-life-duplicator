'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export default function StoryPrompts() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium mb-2">1-year Story Prompt Program</h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Uncover memories with simple, thoughtful questions
          </h3>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Our <strong>1-Year Story Prompt Program</strong> delivers weekly, flexible prompts that make capturing
            your loved one's stories simple, meaningful, and fully customizable.
          </p>
        </div>

        <Tabs defaultValue="childhood" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto bg-transparent">
            <TabsTrigger
              value="childhood"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md"
            >
              Childhood
            </TabsTrigger>
            <TabsTrigger
              value="family"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md"
            >
              Family
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md"
            >
              Career
            </TabsTrigger>
            <TabsTrigger
              value="wisdom"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-md"
            >
              Wisdom
            </TabsTrigger>
          </TabsList>

          <TabsContent value="childhood" className="mt-6">
            <Card className="border-0 shadow-md bg-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Preserving Memories</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What was your favorite childhood memory?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">Did you have siblings? How was your relationship?</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">Who were your childhood friends and adventures?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What was your favorite toy growing up?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family" className="mt-6">
            <Card className="border-0 shadow-md bg-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Family Connections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What are your earliest memories of your parents?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">Are there family traditions you cherish?</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">Tell me about your grandparents. What were they like?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What values were important in your family?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="mt-6">
            <Card className="border-0 shadow-md bg-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Career Journey</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What was your first job? What do you remember about it?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">Who influenced your career choices?</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What achievement are you most proud of in your work life?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">How did your career evolve over the years?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wisdom" className="mt-6">
            <Card className="border-0 shadow-md bg-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Life Wisdom</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What life lesson took you the longest to learn?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What advice would you give to your younger self?</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What values or principles have guided your life?</p>
                    </div>
                    <div className="p-4 bg-background rounded-md">
                      <p className="font-medium">What do you hope future generations remember about you?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
