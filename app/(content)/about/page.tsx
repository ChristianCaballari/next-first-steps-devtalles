import type { Metadata } from "next";

export const metadata: Metadata = {
     title: 'SEO Title About',
     description: 'SEO Description',
     keywords: ['About Page', 'Christian', 'Iinformacion', '...']
};

export default function AboutPage() {
     return (
          <>
               <span className="text-7xl">About Page</span>
          </>
     )
}