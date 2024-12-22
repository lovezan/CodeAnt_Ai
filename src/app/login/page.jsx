import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { PieChartIcon as ChartPie } from "lucide-react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab.png";
import devop from "../../assets/devop.png";
import key from "../../assets/key.png";
import bitbucket from "../../assets/bitbucket.png";
import subtract from "../../assets/subtract.png";

export function LoginPage() {
  const [activeTab, setActiveTab] = useState("saas");

  // const renderLoginButtons = (platforms) =>
  //   platforms.map((img, index) => (
  //     <Button
  //       key={index}
  //       variant="outline"
  //       className="w-full bg-white border border-gray-300 rounded-md p-3 hover:bg-blue-50 hover:border-blue-400 transition duration-200 ease-in-out flex items-center justify-center"
  //     >
  //       <img src={img} alt="Sign in" width={20} height={20} className="mr-3" />
  //       Sign in with {img.split("/").pop().split(".")[0]}
  //     </Button>
  //   ));

  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* First Section */}
      <div
        className="first-section hidden md:flex flex-col justify-center items-center p-8 space-y-8"
        style={{ "--background-image": `url(${subtract})` }}
      >
        <Card className=" shadow-lg rounded-lg rounded-lg4">
          <CardContent className="p-0 h-50 pt-0">
            <div className="flex items-center justify-center gap-3 mb-4 pt-4">
              <img src={logo} alt="Logo" className="h-8" />
              <h1 className="text-xl font-bold text-center">
                AI to Detect & Autofix Bad Code
              </h1>
            </div>
            <hr className=" border-gray-300" />
            <div className="flex justify-center md:grid-cols-3 gap-6 text-center justify-center">
              <div>
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm text-gray-500">Language Support</p>
              </div>
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-gray-500">Developers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100K+</p>
                <p className="text-sm text-gray-500">Hours Saved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Stat Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="border border-gray-300 bg-white shadow-lg rounded-lg3">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4 justify-between">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                  <ChartPie className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    ↑ 14%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    This week
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Issues Fixed</div>
              <div className="text-2xl font-bold">500K+</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section flex-grow bg-gray-200 flex flex-col items-center justify-center p-8 w-full md:w-auto">
        <Card className="w-full max-w-lg bg-white  shadow-lg rounded-lg1">
          <CardHeader>
            <div className="align-center text-center">
              <div className="flex justify-center items-center gap-3 mb-4">
                <img src={logo} alt="Logo" className="h-10" />
                <p className="text-xl font-200 text-center">CodeAnt AI</p>
              </div>
              <div className="flex justify-center items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-center">
                  Welcome to CodeAnt AI
                </h1>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex justify-center mb-6 pl-3 pr-3">
                <TabsTrigger
                  value="saas"
                  className={`tab-trigger${
                    activeTab === "saas" && "tab-trigger-active"
                  }`}
                >
                  SAAS
                </TabsTrigger>
                <TabsTrigger
                  value="self-hosted"
                  className={`tab-trigger${
                    activeTab === "self-hosted" && "tab-trigger-active"
                  }`}
                >
                  Self Hosted
                </TabsTrigger>
              </TabsList>
              <hr className="my-6 border-gray-300" />

              <TabsContent value="saas">
                <div className="space-y-4 flex flex-col items-center min-h-[300px] w-full">
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={github}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with Github
                  </Button>
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={bitbucket}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with Bitbucket
                  </Button>
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={devop}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with Azure DevOps
                  </Button>
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={gitlab}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with GitLab
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="self-hosted">
                <div className="space-y-4 flex flex-col items-center min-h-[300px] w-full">
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={gitlab}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with GitLab
                  </Button>
                  <Button
                    variant="outline"
                    className="w-3/4 bg-white rounded-md border border-gray-300"
                  >
                    <img
                      src={key}
                      alt="Company Logo"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    Sign in with SSO
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        {/* Footer */}
        <div className="w-full text-center mt-6">
          <p className="text-xs font-semibold text-muted-foreground">
            By signing up you agree to the{" "}
            <Link to="#" className="font-bold text-black-500">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
