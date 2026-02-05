export interface Movie {
  id: number;
  title: string;
  image: string;
  overview?: string;
}

export interface MovieCardMainProps {
  movies: Movie[]
  title?: string,
}

export interface TitleProps {
  children: string;
}

export interface RootProps {
  children: React.ReactNode;
  className?: string;
}