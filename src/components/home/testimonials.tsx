'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface TestimonialProps {
  content: string;
  author: string;
  date: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "My children gave me this as a Xmas present. Brilliant idea! They wanted my life story before I forget it all!!! I have really enjoyed writing it!",
    author: "Colin Hearn",
    date: "November 18th"
  },
  {
    content: "Your customer service has been incredible! So prompt and kind and helpful. Thank you for helping make a very special birthday gift come to life.",
    author: "Sophia Dc",
    date: "November 17th"
  },
  {
    content: "I've procrastinated for years about writing about my life. I received this wonderful opportunity from my son-in-law as a gift. I love that it gives me a question or topic to address. It's reflective for me and encourages me to look back and share about my life experiences. I've had a wonderful life as a nurse, pastor's wife, mother, missionary and a business owner. Such a wonderful life! Thank you for developing a wonderful platform to gather and share my thoughts.",
    author: "Dawn W",
    date: "November 17th"
  },
  {
    content: "The website is easy to use and easy to uplift photos. However, the reason for not giving 5 stars is that there was only the option to uplift one photo. I see that on the new version it is possible.",
    author: "Customer",
    date: "November 17th"
  },
  {
    content: "Memories for a lifetime. I loved the experience.",
    author: "Joseph Oglesby",
    date: "November 17th"
  },
  {
    content: "Not only is it a lasting memory for my family but a chance for me to do some reflecting of my experiences as a youth growing up. It's also an opportunity to get out the old scrapbooks and photo albums and relive those times. Rather than leaving a bunch of random pictures, I can keep and pass on just meaningful moments captured in time for my decendants to enjoy.",
    author: "Richard Lee",
    date: "November 16th"
  }
];

const Testimonial = ({ content, author, date }: TestimonialProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm h-full flex flex-col">
      <div className="flex mb-4">
        <StarRating rating={5} />
      </div>
      <p className="flex-grow mb-4 line-clamp-4">{content}</p>
      <div className="mt-auto">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src={i < rating
            ? "https://ext.same-assets.com/3883118250/3016672186.png"
            : "https://ext.same-assets.com/3883118250/1756853075.png"}
          alt={i < rating ? "Filled star" : "Empty star"}
          width={20}
          height={20}
          className="mr-1"
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hear it from our Customers</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-medium">Excellent</span>
            <StarRating rating={5} />
            <span className="text-sm">
              Based on <a href="https://www.trustpilot.com/review/mylifeinabook.com" className="underline font-medium" target="_blank" rel="noopener noreferrer">2394 reviews</a> on
            </span>
            <Image
              src="https://ext.same-assets.com/3883118250/2262370143.svg"
              alt="Trustpilot"
              width={80}
              height={20}
            />
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Testimonial
                  content={testimonial.content}
                  author={testimonial.author}
                  date={testimonial.date}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
