import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Sidebar } from "../../components/slidebar";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiCircle, FiDatabase } from "react-icons/fi"; // Import the search icon

import { Loader2 } from "lucide-react";
import { AddRepositoryModal } from "../../components/add-repository-model"; // Ensure this path is correct
import "./repo.module.css";

const initialRepositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
  },
];

export function RepositoriesPage() {
  const [repositories, setRepositories] = useState(initialRepositories);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to control "Load More" functionality

  const filteredRepositories = repositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulating an API call to refresh repositories
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // For demonstration, we'll just randomize the 'updatedAt' field
    const refreshedRepositories = repositories.map((repo) => ({
      ...repo,
      updatedAt: `${Math.floor(Math.random() * 7) + 1} days ago`,
    }));
    setRepositories(refreshedRepositories);
    setIsRefreshing(false);
  };

  const handleAddRepository = (newRepository) => {
    setRepositories([newRepository, ...repositories]);
  };

  const handleLoadMore = () => {
    setShowAll(true); // Set showAll to true to show all repositories
    setTimeout(() => {
      // Smooth scroll after loading more repositories
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="p-4  md:p-8  ">
          <Card className="bg-white">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                {/* Repositories Header */}
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Repositories
                  </CardTitle>

                  <CardDescription>
                    {repositories.length} total repositories
                  </CardDescription>
                </div>

                {/* Buttons for Refresh and Add Repository */}
                <div className="flex flex-row justify-between items-center mt-4 p-0 md:mt-0 space-x-2 p-0">
                  {/* Refresh Button */}
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-solid rounded-lg1" // Applying rounded corners to the whole button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                  >
                    {isRefreshing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Refreshing...
                      </>
                    ) : (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" />
                        Refresh All
                      </>
                    )}
                  </Button>

                  {/* Add Repository Modal Button */}
                  <Button
                    variant="solid"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-cyan-50 rounded-lg1" // Rounded corners for Add Repository button
                  >
                    <AddRepositoryModal onAddRepository={handleAddRepository} />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative mb-4 pl-6 rounded-lg">
                <FiSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Search Repositories"
                  className="pl-10 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-64"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              {/* <hr className="border-gray-300" /> */}
              <div className="space-y-0">
                {filteredRepositories
                  .slice(0, showAll ? filteredRepositories.length : 8)
                  .map((repo) => (
                    <div
                      key={repo.name}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col md:flex-col justify-between items-start space-y-2 md:space-y-0">
                        {/* Public/Private Label */}
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-lg">{repo.name}</h3>
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-2xl ${
                              repo.isPublic
                                ? "bg-blue-100 text-blue-600 border border-blue-300"
                                : "bg-blue-50 text-blue-600 border border-blue-300"
                            }`}
                          >
                            {repo.isPublic ? "Public" : "Private"}
                          </span>
                        </div>

                        {/* Additional Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center space-x-0">
                            <span>{repo.language}</span>
                            {/* Solid Circle */}
                            <GoDotFill className="text-blue-500" />
                          </div>
                          <div className="flex items-center space-x-3">
                            {/* Database Icon */}
                            <FiDatabase className="text-muted-foreground h-4 w-4" />
                            <span>{repo.size} KB</span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Updated {repo.updatedAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>

            <CardFooter>
              {!showAll && (
                <Button
                  variant="outline"
                  className="w-full  border-solid border-2 border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RepositoriesPage;
