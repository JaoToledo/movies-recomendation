// src/app/movies/[id]/layout.tsx

// 1. Rename the function to start with an uppercase letter (e.g., MovieLayout)
export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Return only the wrapping elements for this page, NOT <html> and <body>
  return (
    <section>
      {/* You can add a header or other UI specific to the movie details page here */}
      {children} {/* This is where the page.tsx content will be rendered */}
    </section>
  );
}