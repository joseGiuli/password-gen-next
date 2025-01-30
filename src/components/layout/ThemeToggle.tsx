"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <button
        className={`text-2xl fixed bottom-2 right-2 p-2 rounded-full  duration-300 hover:scale-110 transition-all text-black hover:text-red-600 dark:text-white dark:hover:text-gray-300 `}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
      </button>
    );
  }
}
