export interface PasswordSettings {
  length: number;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
}

export interface PasswordOptionsProps {
  onGenerate: (settings: PasswordSettings) => void;
}

export interface PasswordDisplayProps {
  password: string;
}

export interface SecurityMeterProps {
  length: number;
}

export interface PasswordStrengthMeterProps {
  password: string;
}
