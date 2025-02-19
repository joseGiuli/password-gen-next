import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { PasswordOptionsProps } from "@/types";
import { FaArrowRotateLeft } from "react-icons/fa6";

const PasswordOptions: React.FC<PasswordOptionsProps> = ({ onGenerate }) => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

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

  const handleGenerate = () => {
    onGenerate({
      length,
      includeNumbers,
      includeSpecialChars,
      includeUppercase,
      includeLowercase,
    });
    setIsGenerated(true);
  };

  return (
    <div>
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
          />
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGenerate();
              }
            }}
            min={3}
            max={100}
            className="w-20 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-customBlack"
          />
        </div>
      </div>
      <div className="mb-2 grid md:grid-cols-2 [&_div]:mb-4 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_label]:mb-2">
        <div>
          <label>Incluir letras maiúsculas (A-Z)</label>
          <Switch
            checked={includeUppercase}
            onCheckedChange={() =>
              handleSwitchChange(setIncludeUppercase, includeUppercase)
            }
          />
        </div>
        <div>
          <label>Incluir letras minúsculas (a-z)</label>
          <Switch
            checked={includeLowercase}
            onCheckedChange={() =>
              handleSwitchChange(setIncludeLowercase, includeLowercase)
            }
          />
        </div>
        <div>
          <label>Incluir números (0-9)</label>
          <Switch
            checked={includeNumbers}
            onCheckedChange={() =>
              handleSwitchChange(setIncludeNumbers, includeNumbers)
            }
          />
        </div>
        <div>
          <label>Incluir símbolos (#!@$)</label>
          <Switch
            className="custom-switch"
            checked={includeSpecialChars}
            onCheckedChange={() =>
              handleSwitchChange(setIncludeSpecialChars, includeSpecialChars)
            }
          />
        </div>
      </div>
      <button
        onClick={handleGenerate}
        disabled={length < 3}
        className="w-full bg-customTeal-100 disabled:opacity-75 text-white p-4 rounded hover:bg-customTeal-200 flex items-center justify-center gap-2"
      >
        {isGenerated ? (
          <>
            <FaArrowRotateLeft className="inline-block" />
            Gerar Novamente
          </>
        ) : (
          "Gerar Senha"
        )}
      </button>
    </div>
  );
};

export default PasswordOptions;
