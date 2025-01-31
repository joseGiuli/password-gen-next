"use client";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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

  // Função para garantir que pelo menos um switch permaneça ativo
  const handleSwitchChange = (
    setter: (value: boolean) => void,
    currentValue: boolean
  ) => {
    const activeSwitches = [
      includeNumbers,
      includeSpecialChars,
      includeUppercase,
      includeLowercase,
    ].filter(Boolean).length; // .filter(Boolean) remove todos os valores false do array, mantendo apenas true

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
    <div className="p-4 max-w-md mx-auto  rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Número de caracteres: {length}
        </label>
        <div className="flex items-center gap-4">
          <Slider
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            min={3}
            max={100}
            step={1}
            className=""
          />
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={3}
            max={100}
            className="w-20 p-2 border border-gray-300 dark:border-[#656565] rounded-md bg-gray-50 dark:bg-[#404040]"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">1234</label>
        <Switch
          checked={includeNumbers}
          onCheckedChange={() =>
            handleSwitchChange(setIncludeNumbers, includeNumbers)
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">#!@$</label>
        <Switch
          checked={includeSpecialChars}
          onCheckedChange={() =>
            handleSwitchChange(setIncludeSpecialChars, includeSpecialChars)
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">ABCD</label>
        <Switch
          checked={includeUppercase}
          onCheckedChange={() =>
            handleSwitchChange(setIncludeUppercase, includeUppercase)
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">abcd</label>
        <Switch
          checked={includeLowercase}
          onCheckedChange={() =>
            handleSwitchChange(setIncludeLowercase, includeLowercase)
          }
        />
      </div>
      <button
        onClick={generatePassword}
        disabled={length < 3}
        className="w-full bg-blue-500 disabled:opacity-75  text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Gerar Senha
      </button>

      {password && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-[#404040] rounded">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium dark:text-red-500">
              Senha gerada:
            </p>
            <button
              onClick={() => handleCopy()}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              {copied ? (
                <span className="text-green-500">✔️ Copiado!</span>
              ) : (
                "📋 Copiar"
              )}
            </button>
          </div>
          <p className="text-lg dark:text-white font-bold break-all">
            {password}
          </p>
        </div>
      )}
      <ThemeToggle />
      <Toaster />
    </div>
  );
}
