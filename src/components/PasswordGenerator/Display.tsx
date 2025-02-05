import { PasswordDisplayProps } from "@/types";

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  password,
  copied,
  handleCopy,
}) => {
  return (
    password && (
      <div className="mt-4 p-4 bg-gray-100 dark:bg-[#404040] rounded">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium dark:text-red-500">Senha gerada:</p>
          <button
            onClick={handleCopy}
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
    )
  );
};

export default PasswordDisplay;
