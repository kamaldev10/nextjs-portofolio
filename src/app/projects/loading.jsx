// app/projects/loading.tsx
import { Loader2 } from "lucide-react"; // Impor ikon loading

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <Loader2 className="animate-spin h-16 w-16 text-indigo-600 mb-4" />
      <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        Memuat Proyek...
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Mohon tunggu sebentar.
      </p>
    </div>
  );
}
