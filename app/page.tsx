import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Book, Code, Cpu, Globe } from 'lucide-react';

export default function Home() {
  const features = [
    { title: 'Custom Software Development', description: 'Tailored solutions to meet your unique business needs.', icon: Code },
    { title: 'Web Application Development', description: 'Scalable and responsive web applications using cutting-edge technologies.', icon: Globe },
    { title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android.', icon: Cpu },
    { title: 'Cloud Solutions', description: 'Leverage the power of cloud computing for your business.', icon: Book },
  ];

  const blogPosts = [
    { title: 'The Future of AI in Software Development', date: '2023-05-15', image: 'https://source.unsplash.com/300x200/?ai,technology' },
    { title: 'Best Practices for Secure Coding', date: '2023-05-10', image: 'https://source.unsplash.com/300x200/?security,coding' },
    { title: 'How to Choose the Right Tech Stack for Your Project', date: '2023-05-05', image: 'https://source.unsplash.com/300x200/?programming,computer' },
    { title: 'The Importance of User Experience in Software Design', date: '2023-04-30', image: 'https://source.unsplash.com/300x200/?ux,design' },
  ];

  const projects = [
    { title: 'E-commerce Platform', description: 'A scalable online shopping solution for a retail giant.', image: 'https://source.unsplash.com/300x200/?ecommerce' },
    { title: 'Healthcare Management System', description: 'Streamlining patient care and hospital operations.', image: 'https://source.unsplash.com/300x200/?healthcare' },
    { title: 'FinTech Mobile App', description: 'Secure and user-friendly mobile banking application.', image: 'https://source.unsplash.com/300x200/?finance,app' },
    { title: 'IoT Smart Home Solution', description: 'Connecting and controlling smart devices for modern homes.', image: 'https://source.unsplash.com/300x200/?smarthome' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovative Software Solutions</h1>
        <p className="text-xl mb-8">Empowering businesses with cutting-edge technology</p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Let's collaborate to bring your ideas to life.</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>

      {/* Blog Posts Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-40 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/blog" className="group">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}