import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddRepositoryModal({ onAddRepository }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [language, setLanguage] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !language || !size) {
      setError("All fields are required!");
      return;
    }

    const newRepository = {
      name,
      isPublic,
      language,
      size: `${size} KB`,
      updatedAt: "Just now",
    };
    onAddRepository(newRepository);
    setOpen(false);

    // Reset form
    setName("");
    setIsPublic(true);
    setLanguage("");
    setSize("");
    setError("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Add Repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p className="font-medium">Add Repository</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg p-3 font-bold"></DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Enter the repository details below and click "Save" to add it to
            your list.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="visibility"
                className="text-right text-sm font-medium"
              >
                Visibility
              </Label>
              <RadioGroup
                defaultValue={isPublic ? "public" : "private"}
                onValueChange={(value) => setIsPublic(value === "public")}
                className="col-span-3 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public" className="text-sm">
                    Public
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private" className="text-sm">
                    Private
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="language"
                className="text-right text-sm font-medium"
              >
                Language
              </Label>
              <Input
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="size" className="text-right text-sm font-medium">
                Size (KB)
              </Label>
              <Input
                id="size"
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Save Repository
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
