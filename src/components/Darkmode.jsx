import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="bg-primary flex justify-end px-4 py-2">
      <button
        onClick={toggleMode}
        className="text-2xl border-2 gap-0.5 py-0.5 px-2 rounded-full flex justify-center items-center bg-accent hover:cursor-pointer"
      >
        <div className="text-card-foreground">
          {isDark ? "Dark Mode" : "Light Mode"}
        </div>
        <div>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>
      </button>
    </div>
  );
};

export default DarkMode;
