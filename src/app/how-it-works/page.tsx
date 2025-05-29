import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FaqSection from '@/components/home/faq-section';
import Testimonials from '@/components/home/testimonials';
import StoryPrompts from '@/components/home/story-prompts';

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How it Works</h1>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Effortless Storytelling, Beautifully Crafted
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We make it easy for anyone to create a beautiful book that captures
              the memories and moments that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="py-12 bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">A simple, guided process</h2>
            <p className="text-lg mb-12 text-center">
              From the first question to the final book, our simple process helps
              you create a keepsake that's truly one-of-a-kind.
            </p>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Choose Your Book Theme</h3>
                  <p className="text-lg mb-4">Select the perfect theme for their story</p>
                  <p>
                    Whether it's preserving cherished memories, celebrating a couple's journey,
                    or documenting new parenthood, we have a book theme that fits every story.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://ext.same-assets.com/1726640075/4127996828.svg"
                    alt="Choose your book theme"
                    width={200}
                    height={200}
                    className="max-w-xs"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <Image
                    src="https://ext.same-assets.com/1726640075/2284344077.svg"
                    alt="Receive story prompts"
                    width={200}
                    height={200}
                    className="max-w-xs"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-3">Receive and Manage Story Prompts</h3>
                  <p className="text-lg mb-4">Effortless prompt delivery and management.</p>
                  <p className="mb-4">
                    For a full year, we'll send thoughtful questions regularly, guiding your loved one
                    to share their experiences at a pace that suits them. Our platform makes it easy to
                    receive, edit, or even create your own prompts!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Customizable Frequency:</strong> Set the pace—weekly, bi-weekly, monthly, or all at once!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Easy Navigation:</strong> Access and manage prompts through a clean, organized interface.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Prompt Notifications:</strong> Stay informed with updates and prompt reminders.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Voice-to-Text Option:</strong> Easily narrate and capture stories with our voice-to-text feature.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Personalize and Review</h3>
                  <p className="text-lg mb-4">Customize the story, your way.</p>
                  <p className="mb-4">
                    Edit responses, add photos, and even create your own questions to ensure
                    the final book reflects their unique life.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Multiple Editors:</strong> Share access with family members or friends.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Real-Time Notifications:</strong> Get updates when your loved one responds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Collaborative Editing:</strong> Multiple people can review and edit the content.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://ext.same-assets.com/1726640075/1636691063.svg"
                    alt="Personalize and review"
                    width={200}
                    height={200}
                    className="max-w-xs"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <Image
                    src="https://ext.same-assets.com/1726640075/617842045.svg"
                    alt="Choose a beautiful cover"
                    width={200}
                    height={200}
                    className="max-w-xs"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-3">Choose a Beautiful Cover</h3>
                  <p className="text-lg mb-4">Design a book that's as special as the stories inside.</p>
                  <p className="mb-4">
                    Pick from a variety of cover designs that complement the theme and content
                    of your book, making it a keepsake to treasure.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Cover Templates:</strong> Choose from a curated collection of 40 unique designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Imagery:</strong> Personalize your cover with your own photo on select templates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Print and Cherish</h3>
                  <p className="text-lg mb-4">A beautiful keepsake, delivered to your door.</p>
                  <p className="mb-4">
                    Once completed, their stories are printed in a high-quality book,
                    ready to be shared and enjoyed by family and future generations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Order Additional Copies:</strong> Easily order extra copies for other family members.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Multiple Delivery Options:</strong> Send the finished book to multiple addresses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>International Shipping:</strong> Free Book shipping, delivered worldwide.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://ext.same-assets.com/1726640075/942279592.svg"
                    alt="Print and cherish"
                    width={200}
                    height={200}
                    className="max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Prompts */}
      <StoryPrompts />

      {/* FAQ */}
      <FaqSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action */}
      <section className="py-16 bg-primary/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">
              Start crafting Their story today
            </h2>
            <Link href="/">
              <Button size="lg" className="uppercase">
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
