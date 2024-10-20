import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      client: 'MegaShop Inc.',
      description: 'A scalable online shopping solution for a retail giant, featuring product management, user accounts, and secure payment processing.',
      image: 'https://source.unsplash.com/800x600/?ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      title: 'Healthcare Management System',
      client: 'HealthCare Network',
      description: 'An integrated system for managing patient records, appointments, and billing for a network of hospitals.',
      image: 'https://source.unsplash.com/800x600/?healthcare',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'FinTech Mobile App',
      client: 'FinanceNow',
      description: 'A secure and user-friendly mobile banking application with features like account management, transfers, and investment tracking.',
      image: 'https://source.unsplash.com/800x600/?finance',
      technologies: ['React Native', 'Node.js', 'GraphQL', 'Firebase'],
    },
    {
      title: 'IoT Smart Home Solution',
      client: 'SmartLiving Co.',
      description: 'An integrated platform for connecting and controlling smart devices in modern homes, including lighting, thermostats, and security systems.',
      image: 'https://source.unsplash.com/800x600/?smarthome',
      technologies: ['Vue.js', 'Python', 'MQTT', 'TensorFlow'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>Client: {project.client}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}