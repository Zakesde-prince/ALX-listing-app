export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
