import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Crawlio",
    short_name: "Crawlio",
    description:
      "Download entire websites into local files. Browse offline or hand them to your AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#9b4dff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
