const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Mills",
    url: "https://ryankmills.com",
    sameAs: [
      "https://github.com/noogler617",
      "https://www.linkedin.com/in/ryan-k-mills/",
    ],
    jobTitle: "Ethical Hacker",
    description:
      "Ethical hacker, tinkerer, and builder. Exploring cybersecurity, hands-on projects, and creative tech solutions.",
    email: "ryan@ryankmills.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;