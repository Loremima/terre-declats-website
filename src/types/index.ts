export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface TreatmentProps {
  name: string;
  expanded?: boolean;
  onClick?: () => void;
}