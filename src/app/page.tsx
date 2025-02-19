"use client";
import PasswordOptions from "@/components/PasswordGenerator/Options";
import PasswordDisplay from "@/components/PasswordGenerator/Display";
import PasswordStrengthMeter from "@/components/PasswordGenerator/SecurityMetter";
import { usePasswordGenerator } from "@/hooks/usePasswordGenerator";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const { password, generatePassword } = usePasswordGenerator();

  return (
    <main className="py-12 px-4">
      <div className="p-8 w-[min(100%,600px)] mx-auto rounded-lg shadow-sprightly">
        <h2 className="mb-4 font-medium text-2xl">Gerador de senhas</h2>
        <PasswordOptions onGenerate={generatePassword} />
        <PasswordDisplay password={password} />
        <PasswordStrengthMeter password={password} />
      </div>
      <ThemeToggle />
      <Toaster />
    </main>
  );
}
