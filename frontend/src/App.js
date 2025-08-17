import React, { useState } from "react";
import "./App.css";
import { Search, FileText, Users, TrendingUp, ChevronRight, Award, Clock, Target, Zap, ArrowRight, ArrowDown, Database, Brain, Cpu, Globe, Settings, BarChart3, CheckCircle, XCircle, ArrowDownRight, ArrowUpRight, Play, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

// Mock data for demonstration
const mockJobResults = {
  "cook": [
    { code: "51200101", title: "Food Service Worker", confidence: 95, description: "Prepares and serves food in restaurants, cafeterias, and other food service establishments" },
    { code: "51200102", title: "Chef", confidence: 87, description: "Plans menus and prepares food in professional kitchens" },
    { code: "51200103", title: "Kitchen Helper", confidence: 72, description: "Assists in food preparation and kitchen maintenance" }
  ],
  "tailor": [
    { code: "75310201", title: "Sewing Machine Operator", confidence: 95, description: "Operates sewing machines to stitch garments and textile products" },
    { code: "75310202", title: "Garment Cutter", confidence: 83, description: "Cuts fabric pieces for garment manufacturing" },
    { code: "75310203", title: "Fashion Designer", confidence: 71, description: "Designs and creates clothing and fashion accessories" }
  ],
  "driver": [
    { code: "83320101", title: "Motor Vehicle Driver", confidence: 94, description: "Drives cars, trucks, and other motor vehicles for transportation" },
    { code: "83320102", title: "Taxi Driver", confidence: 89, description: "Provides passenger transportation services in taxis" },
    { code: "83320103", title: "Delivery Driver", confidence: 76, description: "Delivers goods and packages using motor vehicles" }
  ],
  "teacher": [
    { code: "23410101", title: "Primary School Teacher", confidence: 92, description: "Teaches basic subjects to elementary school students" },
    { code: "23410102", title: "Secondary School Teacher", confidence: 88, description: "Instructs students in specific subjects at secondary level" },
    { code: "23410103", title: "Tutor", confidence: 74, description: "Provides personalized academic instruction to students" }
  ]
};

const featuredSearches = ["cook", "tailor", "driver", "teacher"];

const stats = [
  { label: "Job Classifications", value: "3,600+", icon: FileText },
  { label: "Daily Searches", value: "15,000+", icon: Search },
  { label: "Active Users", value: "50,000+", icon: Users },
  { label: "Accuracy Rate", value: "95%", icon: Target }
];

// Presentation Component
function PresentationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Project Presentation</h1>
                <p className="text-xs text-slate-600 font-medium">AI-Powered Job Search Workflow</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/')} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Back to Search Tool
            </Button>
          </div>
        </div>
      </header>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Title Section */}
          <section className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-lg">
              <Presentation className="w-5 h-5 mr-2" />
              Project Presentation
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              AI-Powered Job Search Tool
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-4xl mt-2">
                Workflow & Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Complete technical workflow and implementation strategy for modernizing India's job classification system
            </p>
          </section>

          {/* Problem Statement */}
          <section className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-500 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-red-800">Current Problem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Manual PDF searches through 3,600 job codes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Exact keyword matching only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Time-consuming and error-prone</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Poor user experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 bg-emerald-50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-emerald-800">Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-700">AI-powered semantic search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-700">Natural language understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-700">Instant results with confidence scoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-700">Modern, intuitive interface</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* System Architecture */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">System Architecture</h2>
              <p className="text-slate-600 text-lg">Complete technical stack and component interaction</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Frontend */}
              <Card className="border-2 border-blue-200 bg-blue-50 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Frontend Layer</h3>
                  <div className="space-y-2 text-blue-700">
                    <p>React.js Application</p>
                    <p>Tailwind CSS</p>
                    <p>Shadcn/UI Components</p>
                    <p>Responsive Design</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-slate-400 mb-4" />
                <ArrowDown className="w-8 h-8 text-slate-400 md:hidden" />
              </div>

              {/* Backend */}
              <Card className="border-2 border-purple-200 bg-purple-50 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Backend Layer</h3>
                  <div className="space-y-2 text-purple-700">
                    <p>FastAPI Framework</p>
                    <p>AI/ML Integration</p>
                    <p>Search Algorithms</p>
                    <p>API Endpoints</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center my-8">
              <ArrowDown className="w-8 h-8 text-slate-400" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* AI Layer */}
              <Card className="border-2 border-indigo-200 bg-indigo-50 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">AI/ML Layer</h3>
                  <div className="space-y-2 text-indigo-700">
                    <p>BERT/Transformer Models</p>
                    <p>Semantic Understanding</p>
                    <p>Confidence Scoring</p>
                    <p>Natural Language Processing</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-slate-400 mb-4" />
                <ArrowDown className="w-8 h-8 text-slate-400 md:hidden" />
              </div>

              {/* Database */}
              <Card className="border-2 border-green-200 bg-green-50 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Database Layer</h3>
                  <div className="space-y-2 text-green-700">
                    <p>MongoDB Storage</p>
                    <p>NCO-2015 Data</p>
                    <p>Search Indexing</p>
                    <p>Analytics Data</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI Search Workflow */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Search Workflow</h2>
              <p className="text-slate-600 text-lg">Step-by-step process of intelligent job matching</p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                <Card className="flex-1 border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">User Input Processing</h3>
                    <p className="text-slate-600">User enters natural language job description (e.g., "cook", "tailor", "driver")</p>
                  </CardContent>
                </Card>
                <ArrowDownRight className="w-8 h-8 text-blue-500" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                <Card className="flex-1 border-l-4 border-l-indigo-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AI Language Processing</h3>
                    <p className="text-slate-600">BERT/Transformer models analyze semantic meaning and context of the input</p>
                  </CardContent>
                </Card>
                <ArrowDownRight className="w-8 h-8 text-indigo-500" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                <Card className="flex-1 border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Semantic Matching</h3>
                    <p className="text-slate-600">AI matches input to NCO-2015 job codes using semantic similarity algorithms</p>
                  </CardContent>
                </Card>
                <ArrowDownRight className="w-8 h-8 text-purple-500" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                <Card className="flex-1 border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Results with Confidence Scoring</h3>
                    <p className="text-slate-600">System returns ranked results with confidence scores (95%, 87%, 72%)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Example Flow */}
          <section className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Real Example Flow</h2>
              <p className="text-blue-100 text-lg">See how "tailor" becomes "Sewing Machine Operator"</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 items-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold">User Types</p>
                <p className="text-blue-100">"tailor"</p>
              </div>

              <ArrowRight className="w-8 h-8 text-blue-300 mx-auto" />

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold">AI Processes</p>
                <p className="text-blue-100">Semantic analysis</p>
              </div>

              <ArrowRight className="w-8 h-8 text-blue-300 mx-auto" />

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold">Results Show</p>
                <p className="text-blue-100">"Sewing Machine Operator" (95%)</p>
              </div>
            </div>
          </section>

          {/* Implementation Phases */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Implementation Roadmap</h2>
              <p className="text-slate-600 text-lg">Phased approach to building the complete solution</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <CardTitle className="text-blue-800">Phase 1: Core Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Frontend Interface ✅</li>
                    <li>• Basic AI Integration</li>
                    <li>• NCO-2015 Database</li>
                    <li>• Search Algorithm</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <CardTitle className="text-indigo-800">Phase 2: Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• Multi-language Support</li>
                    <li>• Voice Input</li>
                    <li>• Advanced AI Models</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <CardTitle className="text-purple-800">Phase 3: Admin & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Admin Dashboard</li>
                    <li>• Analytics & Reporting</li>
                    <li>• Audit Trails</li>
                    <li>• User Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <CardTitle className="text-green-800">Phase 4: Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-700">
                    <li>• API for External Apps</li>
                    <li>• Government Systems</li>
                    <li>• Mobile Applications</li>
                    <li>• Enterprise Features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Impact & Benefits */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Expected Impact & Benefits</h2>
              <p className="text-slate-600 text-lg">Transforming government job classification efficiency</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">For Government Workers</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Time Savings</p>
                      <p className="text-slate-600">From minutes to seconds for job classification</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Higher Accuracy</p>
                      <p className="text-slate-600">AI-powered matching reduces human errors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Ease of Use</p>
                      <p className="text-slate-600">Natural language input, no training required</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">For Government</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Better Data Quality</p>
                      <p className="text-slate-600">Consistent, accurate job classifications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Cost Reduction</p>
                      <p className="text-slate-600">Reduced manual processing and training costs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Modernization</p>
                      <p className="text-slate-600">Digital transformation of classification process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Job Classification?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven job search and see how it can revolutionize government operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/')}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Live Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Specs
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function SearchTool() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query = searchQuery) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const results = mockJobResults[query.toLowerCase()] || [
      { code: "99999999", title: `${query} Related Position`, confidence: 75, description: `Professional role related to ${query}` }
    ];
    
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleFeaturedSearch = (term) => {
    setSearchQuery(term);
    handleSearch(term);
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return "bg-emerald-100 text-emerald-800 border-emerald-200";
    if (confidence >= 80) return "bg-blue-100 text-blue-800 border-blue-200";
    return "bg-amber-100 text-amber-800 border-amber-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">GovCode Hunt</h1>
                <p className="text-xs text-slate-600 font-medium">AI-Powered Job Classification</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-indigo-700 border-indigo-200 bg-indigo-50">
                NCO-2015 Compliant
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Search
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Find the Right Job Code
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                in Seconds
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Search through 3,600+ government job classifications using natural language. 
              Just describe the job, and our AI will find the perfect match.
            </p>
          </div>

          {/* Search Interface */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="flex rounded-2xl shadow-lg border border-slate-200 bg-white overflow-hidden">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Describe the job role... (e.g., cook, tailor, driver)"
                  className="border-0 text-lg py-6 px-6 focus-visible:ring-0 bg-transparent"
                />
                <Button
                  onClick={() => handleSearch()}
                  disabled={isSearching || !searchQuery.trim()}
                  className="m-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-200"
                >
                  {isSearching ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Featured Searches */}
            <div className="mt-6">
              <p className="text-sm text-slate-600 mb-3">Try these popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {featuredSearches.map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => handleFeaturedSearch(term)}
                    className="rounded-full border-slate-300 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Search Results</h2>
              <p className="text-slate-600">
                {isSearching ? 'Searching...' : `Found ${searchResults.length} matches for "${searchQuery}"`}
              </p>
            </div>

            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900">{result.title}</h3>
                          <Badge className={`${getConfidenceColor(result.confidence)} border`}>
                            {result.confidence}% match
                          </Badge>
                        </div>
                        <p className="text-lg font-mono text-blue-600 mb-2">Code: {result.code}</p>
                        <p className="text-slate-600 leading-relaxed">{result.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Government Agencies</h2>
            <p className="text-blue-100 text-lg">Streamlining job classification across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose GovCode Hunt?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Advanced AI technology meets government precision for accurate job classification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Matching</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  AI understands context and meaning, not just keywords. Find "Sewing Machine Operator" when you search for "tailor".
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Get results in seconds instead of manually searching through thousands of pages of documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Government Grade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Built specifically for Indian government standards with NCO-2015 compliance and audit trails.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">GovCode Hunt</span>
              </div>
              <p className="text-slate-400">Modernizing India's job classification system</p>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 Government of India. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;