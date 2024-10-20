import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      date: '2023-05-15',
      author: 'John Doe',
      excerpt: 'Explore how artificial intelligence is revolutionizing the software development process and what it means for developers and businesses alike.',
      image: 'https://source.unsplash.com/800x600/?ai,technology',
    },
    {
      title: 'Best Practices for Secure Coding',
      date: '2023-05-10',
      author: 'Jane Smith',
      excerpt: 'Learn essential techniques and strategies to write secure code and protect your applications from common vulnerabilities.',
      image: 'https://source.unsplash.com/800x600/?security,coding',
    },
    {
      title: 'How to Choose the Right Tech Stack for Your Project',
      date: '2023-05-05',
      author: 'Mike Johnson',
      excerpt: 'A comprehensive guide to selecting the most suitable technologies for your next software project, considering factors like scalability, performance, and team expertise.',
      image: 'https://source.unsplash.com/800x600/?programming,computer',
    },
    {
      title: 'The Importance of User Experience in Software Design',
      date: '2023-04-30',
      author: 'Sarah Brown',
      excerpt: 'Discover why prioritizing user experience is crucial for the success of your software products and how to implement UX best practices in your development process.',
      image: 'https://source.unsplash.com/800x600/?ux,design',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">DevCo Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} | By {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Button asChild>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}