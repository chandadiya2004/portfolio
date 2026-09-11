import researchData from '../../data/sections/research.json';

export const StructuredData = () => {
  const baseUrl =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://www.diyachanda.tech';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Diya Chanda',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        image: `${baseUrl}/images/og-image.png`,
        sameAs: [
          'https://github.com/chandadiya2004',
          'https://www.linkedin.com/in/diya-chanda2004/',
          'https://www.researchgate.net/profile/Diya-Chanda',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        name: 'Diya Chanda',
        alternateName: [
          'Diya Chanda Portfolio',
          'diyachanda.tech',
          'Diya Chanda Tech',
          'Diya Chanda AI',
        ],
        url: baseUrl,
        description:
          'Official portfolio of Diya Chanda — AI Researcher & Machine Learning Engineer.',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: 'Diya Chanda — AI Researcher & Machine Learning Engineer',
        description:
          'Diya Chanda is an AI researcher & engineer specializing in explainable deep learning, computer vision, and RAG web systems. Published IEEE & Springer author.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        mainEntity: {
          '@type': 'Person',
          '@id': `${baseUrl}/#person`,
          name: 'Diya Chanda',
          givenName: 'Diya',
          familyName: 'Chanda',
          jobTitle: 'AI Researcher & AI Engineer',
          description:
            'AI researcher and machine learning engineer bridging empirical deep learning with production web systems. Specializing in explainable AI, computer vision, and RAG-augmented intelligent architectures. Published author at IEEE ICRITO and Springer LNNS.',
          url: baseUrl,
          image: `${baseUrl}/images/profile.webp`,
          sameAs: [
            'https://github.com/chandadiya2004',
            'https://www.linkedin.com/in/diya-chanda2004/',
            'https://www.researchgate.net/profile/Diya-Chanda',
          ],
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'The Neotia University',
            department: {
              '@type': 'Organization',
              name: 'Computer Science & Engineering (AI & ML)',
            },
          },
          knowsAbout: [
            'Artificial Intelligence',
            'Deep Learning',
            'Computer Vision',
            'Explainable AI (XAI)',
            'RAG (Retrieval-Augmented Generation)',
            'Natural Language Processing',
            'Full-Stack Web Development',
            'PyTorch',
            'FastAPI',
            'Next.js',
            'PostgreSQL',
          ],
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/profile.webp`,
        },
      },
      /* Published Research Papers Schema - dynamically synced from research.json */
      ...researchData.papers.map((paper) => ({
        '@type': 'ScholarlyArticle',
        headline: paper.title,
        name: paper.title,
        author: paper.authors.map((authorName: string) =>
          authorName === 'Diya Chanda'
            ? { '@type': 'Person', '@id': `${baseUrl}/#person`, name: authorName }
            : { '@type': 'Person', name: authorName }
        ),
        datePublished: paper.date,
        publisher: { '@type': 'Organization', name: paper.publisher },
        publication: paper.publishedIn,
        sameAs: paper.doiLink,
        description: paper.abstract,
      })),
      /* Production Software Systems Schema */
      {
        '@type': 'SoftwareApplication',
        name: 'CampusSphere',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://ssh.arpanpramanik.dev/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Enterprise-grade institutional credit banking and NAAC/NIRF accreditation compliance verification platform.',
      },
      {
        '@type': 'SoftwareSourceCode',
        name: 'JalDrishti (जलदृष्टि)',
        codeRepository: 'https://github.com/chandadiya2004/JalDrishti-AI',
        programmingLanguage: 'Python, PyTorch, OpenCV, FastAPI',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Deep learning computer vision platform for real-time aquatic ecosystem monitoring and species telemetry.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'RecipeAI',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://recipe-ai-diya.vercel.app/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Generative AI culinary assistant with ingredient-based vision recognition and macro-nutrient analysis.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'FruitQ-GradeX Platform',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://fruitq-quality-classifier.streamlit.app/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Interactive Streamlit web application providing real-time fruit grading inference and Grad-CAM visual heatmaps.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
