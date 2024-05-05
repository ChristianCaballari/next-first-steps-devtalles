import { Metadata } from "next";

export const metadata: Metadata = {
     title: 'SEO Title Contact',
     description: 'SEO Descripcion',
     keywords: ['Contact Page', 'Informacion', '...']
};
export default function ContactPage() {
     return (
          <>
               <span className="text-7xl">ContactPage</span>
          </>
     )
}