import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, variant, className, onClick }) {
  const baseClass = "px-4 py-2 text-center rounded";
  const variantClass =
    variant === "outline" ? "border border-gray-500" : "bg-blue-500 text-white";
  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function HomePage() {
  const navigate = useNavigate(); // Get the navigate function to navigate programmatically

  // Handle navigation on button click
  const handleLogin = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleRepositories = () => {
    navigate("/repositories"); // Navigate to repositories page
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to CodeAnt AI</h1>
      <div className="space-y-4">
        <Button className="w-full" onClick={handleLogin}>
          Go to Login
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleRepositories}
        >
          View Repositories
        </Button>
      </div>
    </div>
  );
}
