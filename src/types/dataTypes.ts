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

export interface ImageItem {
  id: number;
  src: string;
  alt?: string;
};

export interface Project {
  id: number;
  img: ImageItem;
  imageList: ImageItem[];
  heading: string;
  desc: string;
  about: string | string[];
  date: string;
  codebtn: string;
  previewbtn: string;
}

export interface Certificate {
  id: number;
  img: string;
  name: string;
  desc: string;
  date: string;
}

export interface ColleageAchievement{
  id: number;
  img: string;
  name: string;
  desc: string;
  date: string;
}

export interface ColleageFeedData {
  id: number;
  name: string;
  media: string; 
  type: "image" | "video"; 
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