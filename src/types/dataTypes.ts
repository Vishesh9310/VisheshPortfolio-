export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    details: string;
}

export interface Project {
  id: number;
  img: string;
  heading: string;
  desc: string;
  about: string;
  date: string;
  codebtn: string;
  previewbtn: string;
}

export interface Certificate {
    img: string;
    desc: string;
    date: string;
}

export interface Blog {
  id: number;
  img: string;
  cat: string;
  title: string;
  content: string;
  tags: string[];
}

export interface Service {
  img: React.ElementType; // React component type for icons 
  heading: string;
  about: string;
}