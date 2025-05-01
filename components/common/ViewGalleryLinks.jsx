import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function ViewGalleryLinks() {
  return (
    <div className="mt-12 flex justify-center">
      <Link
        href="/projects"
        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-sm sm:text-base text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 space-x-2"
      >
        <span>View Projects Gallery</span>
        <FiArrowRight className="text-lg" />
      </Link>
    </div>
  );
}
