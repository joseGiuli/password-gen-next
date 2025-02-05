"use client";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import PasswordOptions from "@/components/PasswordGenerator/Options";
import PasswordDisplay from "@/components/PasswordGenerator/Display";

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const passwordSettings = {
    length,
    setLength,
    includeNumbers,
    setIncludeNumbers,
    includeSpecialChars,
    setIncludeSpecialChars,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
  };

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = letters.toUpperCase();
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let generatedPassword = "";

    const characters =
      (includeLowercase ? letters : "") +
      (includeUppercase ? uppercaseLetters : "") +
      (includeNumbers ? numbers : "") +
      (includeSpecialChars ? specialChars : "");

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    setCopied(false);
  };

  const handleSwitchChange = (
    setter: (value: boolean) => void,
    currentValue: boolean
  ) => {
    const activeSwitches = [
      includeNumbers,
      includeSpecialChars,
      includeUppercase,
      includeLowercase,
    ].filter(Boolean).length;

    if (currentValue && activeSwitches === 1) {
      return;
    }

    setter(!currentValue);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Sucesso!",
      description: "Senha copiada com sucesso!",
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 max-w-md mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl font-medium mb-3">Gerador de senhas</h2>
      <PasswordOptions
        settings={passwordSettings}
        handleSwitchChange={handleSwitchChange}
      />
      <button
        onClick={generatePassword}
        disabled={length < 3}
        className="w-full bg-blue-500 disabled:opacity-75 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Gerar Senha
      </button>
      <PasswordDisplay
        password={password}
        copied={copied}
        handleCopy={handleCopy}
      />
      <ThemeToggle />
      <Toaster />
    </div>
  );
}
