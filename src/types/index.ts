export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  linkTo?: string;
  scrollToId?: string;
  externalUrl?: string;
}

export interface TreatmentProps {
  name: string;
  expanded?: boolean;
  onClick?: () => void;
  description?: string;
  learnMoreText?: string;
  bookingUrl?: string;
}