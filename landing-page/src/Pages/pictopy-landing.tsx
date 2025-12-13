"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import PictopyLogo from "@/assets/PictoPy_Logo.png";
import MacLogo from "@/assets/mac-logo.png";
import WindowsLogo from "@/assets/windows-logo.svg";
import LinuxLogo from "@/assets/linux-logo.svg";

const PictopyLanding: FC = () => {
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  const handleDownloadClick = (platform: string) => {
    setDownloadStarted(`Download for ${platform} started`);
    setTimeout(() => setDownloadStarted(null), 3000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--accent))"
            fillOpacity="0.15"
            d="M0,192L1440,96V0H0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        {/* Logo + Title */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <img
            src={PictopyLogo}
            alt="PictoPy logo"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-4xl font-bold sm:text-6xl bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
            PictoPy
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground sm:text-2xl">
          Organize your photos effortlessly. Available for Mac, Windows, and Linux.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="flex items-center gap-2"
            onClick={() => handleDownloadClick("Mac")}
          >
            <img src={MacLogo} alt="Mac" className="h-6 w-6" />
            Download for Mac
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => handleDownloadClick("Windows")}
          >
            <img src={WindowsLogo} alt="Windows" className="h-6 w-6" />
            Download for Windows
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => handleDownloadClick("Linux")}
          >
            <img src={LinuxLogo} alt="Linux" className="h-6 w-6" />
            Download for Linux (.deb)
          </Button>
        </div>

        {/* Toast */}
        {downloadStarted && (
          <div className="fixed right-4 top-20 z-50 rounded-md bg-green-600 px-5 py-3 text-sm text-white shadow-lg animate-in slide-in-from-right">
            {downloadStarted}
          </div>
        )}
      </div>
    </section>
  );
};

export default PictopyLanding;
