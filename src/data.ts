import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    price: number;
    stack: string[];
}

export const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description for Project 1',
      imageUrl: project1,
      projectUrl: '#',
      price: 40,
      stack: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a description for Project 2',
      imageUrl: project2,
      projectUrl: '#',
      price: 40,
      stack: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is a description for Project 3',
      imageUrl: project3,
      projectUrl: '#',
      price: 40,
      stack: ['Javascript']
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'This is a description for Project 4',
      imageUrl: project4,
      projectUrl: '#',
      price: 40,
      stack: ['JavaScript', 'HTML', 'CSS']
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'This is a description for Project 5',
      imageUrl: project1,
      projectUrl: '#',
      price: 40,
      stack: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'This is a description for Project 6',
      imageUrl: project2,
      projectUrl: '#',
      price: 40,
      stack: ['PHP', 'Symfony']
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'This is a description for Project 7',
      imageUrl: project3,
      projectUrl: '#',
      price: 40,
      stack: ['Svelte', 'Firebase']
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'This is a description for Project 8',
      imageUrl: project4,
      projectUrl: '#',
      price: 100,
      stack: ['Svelte', 'Firebase']
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'This is a description for Project 9',
      imageUrl: project1,
      projectUrl: '#',
      price: 100,
      stack: ['Svelte', 'Firebase']
    },
    {
      id: 10,
      title: 'Project 10',
      description: 'This is a description for Project 10',
      imageUrl: project2,
      projectUrl: '#',
      price: 100,
      stack: ['Svelte', 'Firebase']
    },
  ];
 
export const stackOptions = (): string[] => {
  const allStacks = mockProjects.map(project => project.stack).flat();
  const uniqueStacks = [...new Set(allStacks)];
  return uniqueStacks;
}
