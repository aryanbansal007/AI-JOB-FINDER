import React, { useState } from "react";
import "./App.css";
import { Search, FileText, Users, TrendingUp, ChevronRight, Award, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";

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

function App() {
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