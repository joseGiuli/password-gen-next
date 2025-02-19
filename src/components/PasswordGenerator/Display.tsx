import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { PasswordDisplayProps } from "@/types";
import { useToast } from "@/hooks/useToast";

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const { toast } = useToast();
  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast({
        title: "Sucesso!",
        description: "Senha copiada com sucesso!",
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    password && (
      <div className="mt-4 p-4 bg-gray-100 dark:bg-[#404040] rounded-t flex gap-4">
        <div className="w-full flex gap-2 items-center justify-around">
          <p className="text-lg dark:text-white font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
            {password}
          </p>
          <button
            onClick={handleCopy}
            className="p-4 bg-gray-200 rounded hover:bg-gray-300"
          >
            {copied ? (
              <LuCopyCheck className="dark:text-black size-6" />
            ) : (
              <LuCopy className="dark:text-black size-6" />
            )}
          </button>
        </div>
      </div>
    )
  );
};

export default PasswordDisplay;
