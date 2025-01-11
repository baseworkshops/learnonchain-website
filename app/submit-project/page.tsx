"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Save, HelpCircle, Loader2, CheckCircle2 } from "lucide-react";

const categories = ["Software", "Hardware", "Design", "Research", "Other"];
const budgetRanges = [
  "< $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "> $50,000",
];
const teamSizes = ["1-2", "3-5", "6-10", "11-20", "20+"];

export default function SubmitProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    timeline: "",
    budget: "",
    teamSize: "",
    technologies: "",
    name: "",
    email: "",
    phone: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => file.size <= 10 * 1024 * 1024);
    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const value = (e.target as HTMLInputElement).value.trim();
      if (value && !tags.includes(value)) {
        setTags(prev => [...prev, value]);
        (e.target as HTMLInputElement).value = '';
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title) newErrors.title = "Title is required";
    else if (formData.title.length > 100) newErrors.title = "Title must be less than 100 characters";

    if (!formData.description) newErrors.description = "Description is required";
    else if (formData.description.length < 100) newErrors.description = "Description must be at least 100 characters";
    else if (formData.description.length > 1000) newErrors.description = "Description must be less than 1000 characters";

    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.timeline) newErrors.timeline = "Timeline is required";
    if (!formData.budget) newErrors.budget = "Budget range is required";
    if (!formData.teamSize) newErrors.teamSize = "Team size is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSaveDraft = () => {
    // Implement draft saving logic
    console.log("Saving draft...");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Submit Your Project
            </h2>
            <p className="text-gray-300">Share your innovation with the community</p>
          </div>

          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Submission Successful!</h3>
              <p className="text-gray-300 mb-6">Your project has been submitted successfully. We'll review it and get back to you soon.</p>
              <Button
                onClick={() => setShowSuccess(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Submit Another Project
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <form
                onSubmit={handleSubmit}
                className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 space-y-6"
              >
                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                  
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="title" className="text-white">Project Title</Label>
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enter a clear, concise title (max 100 characters)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      maxLength={100}
                      className="bg-white/5 border-white/10 text-white mt-1"
                      placeholder="Enter project title"
                    />
                    {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                  </div>

                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="description" className="text-white">Description</Label>
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Provide a detailed description (100-1000 characters)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="bg-white/5 border-white/10 text-white mt-1 min-h-[150px]"
                      placeholder="Describe your project"
                    />
                    {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="text-white">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleInputChange("category", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-white">Estimated Completion</Label>
                      <Input
                        id="timeline"
                        type="date"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="bg-white/5 border-white/10 text-white mt-1"
                      />
                      {errors.timeline && <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-white">Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleInputChange("budget", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.budget && <p className="text-red-400 text-sm mt-1">{errors.budget}</p>}
                    </div>

                    <div>
                      <Label htmlFor="teamSize" className="text-white">Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => handleInputChange("teamSize", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          {teamSizes.map((size) => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.teamSize && <p className="text-red-400 text-sm mt-1">{errors.teamSize}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="technologies" className="text-white">Technologies & Tools</Label>
                    <Input
                      id="technologies"
                      placeholder="Type and press Enter to add tags"
                      onKeyDown={handleTagInput}
                      className="bg-white/5 border-white/10 text-white mt-1"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-white/5 hover:bg-white/10 cursor-pointer"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="files" className="text-white">Project Files</Label>
                    <div className="mt-1 border-2 border-dashed border-white/10 rounded-lg p-6 text-center">
                      <Input
                        id="files"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                        accept=".pdf,image/*"
                      />
                      <Label
                        htmlFor="files"
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="text-gray-300">Click to upload or drag and drop</span>
                        <span className="text-gray-400 text-sm">PDF or images (max 10MB each)</span>
                      </Label>
                    </div>
                    <div className="mt-2 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between text-gray-300 text-sm">
                          <span>{file.name}</span>
                          <span>{Math.round(file.size / 1024)}KB</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/5 border-white/10 text-white mt-1"
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/5 border-white/10 text-white mt-1"
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/5 border-white/10 text-white mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Project
                        <Upload className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSaveDraft}
                    className="border-white/10 hover:border-white/20 text-lg h-12"
                  >
                    Save Draft
                    <Save className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}