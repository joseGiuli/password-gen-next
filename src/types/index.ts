export interface PasswordSettingsProps {
  settings: {
    length: number;
    setLength: (value: number) => void;
    includeNumbers: boolean;
    setIncludeNumbers: (value: boolean) => void;
    includeSpecialChars: boolean;
    setIncludeSpecialChars: (value: boolean) => void;
    includeUppercase: boolean;
    setIncludeUppercase: (value: boolean) => void;
    includeLowercase: boolean;
    setIncludeLowercase: (value: boolean) => void;
  };
  handleSwitchChange: (
    setter: (value: boolean) => void,
    currentValue: boolean
  ) => void;
}

export interface PasswordDisplayProps {
  password: string;
  copied: boolean;
  handleCopy: () => void;
}
