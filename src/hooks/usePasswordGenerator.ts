import { useState } from "react";
import { PasswordSettings } from "@/types";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");

  function generatePassword(settings: PasswordSettings) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = letters.toUpperCase();
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let generatedPassword = "";

    const characters =
      (settings.includeLowercase ? letters : "") +
      (settings.includeUppercase ? uppercaseLetters : "") +
      (settings.includeNumbers ? numbers : "") +
      (settings.includeSpecialChars ? specialChars : "");

    for (let i = 0; i < settings.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  }

  return { password, generatePassword };
}
