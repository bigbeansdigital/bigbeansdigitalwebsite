import Link from "next/link";
import fs from "fs";
import path from "path";

function getRoutes(dir: string, baseRoute = ""): string[] {
  const routes: string[] = [];

  if (!fs.existsSync(dir)) {
    return routes;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (!item.isDirectory()) continue;

    const folderName = item.name;

    // Ignore Next.js special folders
    if (
      folderName.startsWith("[") ||
      folderName.startsWith("(") ||
      folderName.startsWith("_") ||
      folderName === "api"
    ) {
      continue;
    }

    const folderPath = path.join(dir, folderName);
    const pageFile = path.join(folderPath, "page.tsx");

    if (fs.existsSync(pageFile)) {
      const route =
        folderName === "page"
          ? "/"
          : `${baseRoute}/${folderName}`.replace(/\/+/g, "/");

      routes.push(route);
    }

    routes.push(...getRoutes(folderPath, `${baseRoute}/${folderName}`));
  }

  return routes;
}

function formatRouteName(route: string) {
  if (route === "/") return "Home";

  return route
    .split("/")
    .filter(Boolean)
    .map((word) =>
      word
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase())
    )
    .join(" / ");
}

export default function Sitemap() {
  const appDirectory = path.join(process.cwd(), "app");

  const routes = ["/", ...getRoutes(appDirectory)]
    .filter((route, index, array) => array.indexOf(route) === index)
    .filter((route) => route !== "/sitemap")
    .sort();

  return (
    <main className="min-h-screen bg-white text-[#171717]">

      {/* Breadcrumb */}

      <section className="w-full bg-white py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-5 sm:px-8 py-3 sm:py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">

            <Link
              href="/"
              className="text-sm sm:text-base text-gray-700 hover:text-[#F8BC04] transition-colors duration-300"
            >
              Home
            </Link>

            <span className="text-[#F8BC04] text-base sm:text-lg">
              →
            </span>

            <span className="text-sm sm:text-base font-semibold text-black">
              Sitemap
            </span>

          </div>
        </div>
      </section>

      {/* Sitemap */}

      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">

        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[0.3em] text-[#F8BC04] uppercase">
            Explore BIGBEANS DIGITAL
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-[#171717]">
            Sitemap
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
            Explore all the important pages of BIGBEANS DIGITAL.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {routes.map((route) => (
            <Link
              key={route}
              href={route}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F8BC04] hover:shadow-lg"
            >
              <span className="font-semibold text-[#171717] group-hover:text-[#F8BC04] transition-colors">
                {formatRouteName(route)}
              </span>

              <span className="text-[#F8BC04] text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}