// lib/data/certificatesData.ts

// The type definition for a single certificate object remains the same.
export interface Certificate {
  title: string;
  issuedBy: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  image: string; // Path to the brand logo, e.g., '/images/certificates/meta.png'
}

// NEW: A separate, flat list for featured certificates on the homepage section.
// This gives you full control over which 3 certificates to feature.
export const featuredCertificates: Certificate[] = [
  {
    title: "Belajar Pengembangan Web Intermediate",
    issuedBy: "Dicoding Indonesia",
    issueDate: "June 09, 2025",
    credentialId: "MEPJQ4G2LX3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJQ4G2LX3V",
    image: "/images/certificates/dicoding/8.png",
  },
  {
    title: "Front End Java Script Wave 5",
    issuedBy: "Binar Academy",
    issueDate: "January 15, 2025",
    credentialId: "FES2308KM5003",
    credentialUrl: "",
    image: "/images/certificates/binar/1.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuedBy: "Oracle Academy",
    issueDate: "July 24, 2023",
    credentialId: "100162630OCIF2023CA",
    credentialUrl: "",
    image: "/images/certificates/oracle/1.png",
  },
];

// NEW: All certificates, categorized by the issuer/brand.
// This will be used on the main /certificates page.
export const categorizedCertificates: Record<string, Certificate[]> = {
  "Dicoding Indonesia": [
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuedBy: "Dicoding Indonesia",
      issueDate: "February 19, 2025",
      credentialId: "KEXL7MYJWXG2",
      credentialUrl: "https://www.dicoding.com/certificates/KEXL7MYJWXG2",
      image: "/images/certificates/dicoding/1.png",
    },
    {
      title: "Programming Logic 101",
      issuedBy: "Dicoding Indonesia",
      issueDate: "February 19, 2025",
      credentialId: "NVP75W4VWXR0",
      credentialUrl: "https://www.dicoding.com/certificates/NVP75W4VWXR0",
      image: "/images/certificates/dicoding/2.png",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuedBy: "Dicoding Indonesia",
      issueDate: "February 19, 2025",
      credentialId: "JLX19K4YNP72",
      credentialUrl: "https://www.dicoding.com/certificates/JLX19K4YNP72",
      image: "/images/certificates/dicoding/3.png",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuedBy: "Dicoding Indonesia",
      issueDate: "March 8, 2025",
      credentialId: "N9ZO90Y1YXG5",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZO90Y1YXG5",
      image: "/images/certificates/dicoding/4.png",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuedBy: "Dicoding Indonesia",
      issueDate: "March 9, 2025",
      credentialId: "07Z63Q6M2ZQR",
      credentialUrl: "https://www.dicoding.com/certificates/07Z63Q6M2ZQR",
      image: "/images/certificates/dicoding/5.png",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuedBy: "Dicoding Indonesia",
      issueDate: "March 20, 2025",
      credentialId: "JMZVE07WQPN9",
      credentialUrl: "https://www.dicoding.com/certificates/JMZVE07WQPN9",
      image: "/images/certificates/dicoding/6.png",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      issuedBy: "Dicoding Indonesia",
      issueDate: "April 23, 2025",
      credentialId: "98XWE19V9XM3",
      credentialUrl: "https://www.dicoding.com/certificates/98XWE19V9XM3",
      image: "/images/certificates/dicoding/7.png",
    },
    {
      title: "Belajar Pengembangan Web Intermediate",
      issuedBy: "Dicoding Indonesia",
      issueDate: "09 June 2025",
      credentialId: "MEPJQ4G2LX3V",
      credentialUrl: "https://www.dicoding.com/certificates/MEPJQ4G2LX3V",
      image: "/images/certificates/dicoding/8.png",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuedBy: "Dicoding Indonesia",
      issueDate: "May 29, 2025",
      credentialId: "L4PQENQ7OPO1",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQENQ7OPO1",
      image: "/images/certificates/dicoding/9.png",
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuedBy: "Dicoding Indonesia",
      issueDate: "June 20, 2025",
      credentialId: "JMZVEYLV3PN9",
      credentialUrl: "https://www.dicoding.com/certificates/JMZVEYLV3PN9",
      image: "/images/certificates/dicoding/10.png",
    },
    {
      title: "Financial Literacy 101",
      issuedBy: "Dicoding Indonesia",
      issueDate: "April 25, 2025",
      credentialId: "JLX19YNJ5P72",
      credentialUrl: "https://www.dicoding.com/certificates/JLX19YNJ5P72",
      image: "/images/certificates/dicoding/11.png",
    },
  ],
  "Binar Academy": [
    {
      title: "Front End Java Script Wave 5",
      issuedBy: "Binar Academy",
      issueDate: "15 January 2025",
      credentialId: "FES2308KM5003",
      credentialUrl: "",
      image: "/images/certificates/binar/1.png",
    },
  ],
  "Oracle Academy": [
    {
      title: "Oracle primavera P6 Proffesional Project Management Fundamentals",
      issuedBy: "Oracle Academy",
      issueDate: "May 27, 2023",
      credentialId: "",
      credentialUrl: "",
      image: "/images/certificates/oracle/2.png",
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      issuedBy: "Oracle Academy",
      issueDate: "July 24, 2023",
      credentialId: "100162630OCIF2023CA",
      credentialUrl: "",
      image: "/images/certificates/oracle/1.png",
    },
    {
      title: "Database Design",
      issuedBy: "Oracle Academy",
      issueDate: "october 13, 2022",
      credentialId: "",
      credentialUrl: "",
      image: "/images/certificates/oracle/3.png",
    },
    {
      title: "Database Programming wit SQL",
      issuedBy: "Oracle Academy",
      issueDate: "November 27, 2022",
      credentialId: "",
      credentialUrl: "",
      image: "/images/certificates/oracle/4.png",
    },
  ],
};
