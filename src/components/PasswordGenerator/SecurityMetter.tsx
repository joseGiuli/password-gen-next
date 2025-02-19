import { PasswordStrengthMeterProps } from "@/types";
import React from "react";

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
}) => {
  const calculateStrength = (password: string) => {
    // score maximo 6
    let score = 0;

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  const strength = calculateStrength(password);

  const getStrengthLabel = () => {
    if (strength <= 2) {
      return { label: "Fraca", color: "bg-red-600" };
    } else if (strength <= 4) {
      return { label: "Média", color: "bg-yellow-600" };
    } else {
      return { label: "Forte", color: "bg-green-600" };
    }
  };

  const { label, color } = getStrengthLabel();

  const widthClasses = [
    "w-0", // 0
    "w-1/6", // 1
    "w-1/3", //  2
    "w-1/2", //  3
    "w-2/3", //  4
    "w-5/6", //  5
    "w-full", //  6
  ];

  const widthClass = widthClasses[strength] || "w-0";

  return (
    password && (
      <div>
        <div className="w-full bg-gray-300 rounded-b  dark:bg-gray-600">
          <div className={`${color} ${widthClass} rounded-b relative`}>
            <div className=" mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              <label className="font-semibold text-white px-2 text-xs leading-none">
                {label}
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PasswordStrengthMeter;
