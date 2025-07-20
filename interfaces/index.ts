export interface CardProps {
  title: string;
  imageSrc: string;
  price: number;
  location: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}
