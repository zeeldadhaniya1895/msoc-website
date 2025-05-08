import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      sphereGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      meshStandardMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      meshBasicMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      color: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
      planeGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & any, HTMLElement>;
    }
  }
}

export {}; 