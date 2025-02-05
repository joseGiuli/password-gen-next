import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { PasswordSettingsProps } from "@/types";

const PasswordOptions: React.FC<PasswordSettingsProps> = ({
  settings,
  handleSwitchChange,
}) => {
  const {
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
  } = settings;

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
    </div>
  );
};

export default PasswordOptions;
