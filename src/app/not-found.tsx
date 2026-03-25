import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-navy-950 flex items-center justify-center min-h-screen text-white">
        <div className="text-center">
          <div className="font-display text-9xl font-bold text-gold-500 mb-4">404</div>
          <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
          <p className="text-white/50 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/en" className="inline-flex items-center gap-2 bg-gold-500 text-white px-6 py-3 font-semibold hover:bg-gold-600 transition-colors">
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
