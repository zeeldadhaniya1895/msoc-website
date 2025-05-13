import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div
      className={`bg-gray-900 border-none shadow-lg rounded-lg ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 25px 25px rgba(0, 0, 0, 0.15)" } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`flex justify-between items-center mb-4 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`mt-4 pt-4 border-t border-gray-800 ${className}`}>{children}</div>;
}; 