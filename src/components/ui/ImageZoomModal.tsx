// components/ui/ImageZoomModal.tsx
"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  aspect?: string;
}

export default function ImageZoomModal({
  isOpen,
  onClose,
  src,
  aspect = "aspect-[16/9]",
}: ImageZoomModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className={`relative max-w-4xl w-full ${aspect}`}>
          <Image
            src={src}
            alt="Zoomed"
            fill
            className="object-contain rounded-lg"
            onClick={onClose}
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-1 bg-white dark:bg-gray-800 rounded-full shadow"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
