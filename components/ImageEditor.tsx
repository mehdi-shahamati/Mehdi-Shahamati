import React, { useState, useRef } from 'react';
import { Upload, Sparkles, RefreshCw, Download, Image as ImageIcon, X } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

const EXAMPLE_PROMPTS = [
  "Change style to impressionist",
  "Add a vintage look",
  "Make it look like a watercolor painting",
  "Convert to a charcoal sketch"
];

const ImageEditor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size too large. Please select an image under 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setOriginalImage(event.target?.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!originalImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await editImageWithGemini(originalImage, prompt);
      setGeneratedImage(result);
    } catch (err: any) {
      setError(err.message || "Something went wrong while generating.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setOriginalImage(null);
    setGeneratedImage(null);
    setPrompt('');
    setError(null);
  };

  return (
    <div className="max-w-6xl mx-auto min-h-[80vh] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
      
      {/* Sidebar Controls */}
      <div className="w-full md:w-1/3 bg-slate-50 p-6 border-r border-slate-200 flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-serif-custom font-bold text-slate-800 flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-teal-600" />
            AI Art Studio
          </h2>
          <p className="text-sm text-slate-500">
            Upload an artwork or photo and transform it using natural language prompts powered by Gemini.
          </p>
        </div>

        {/* Upload Area */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Source Image</label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all
              ${originalImage ? 'border-teal-300 bg-teal-50/30' : 'border-slate-300 hover:border-teal-400 hover:bg-slate-100'}
            `}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/png, image/jpeg, image/webp" 
              onChange={handleFileChange} 
            />
            {originalImage ? (
              <div className="relative h-40 w-full">
                <img src={originalImage} alt="Source" className="w-full h-full object-contain rounded" />
                <button 
                  onClick={(e) => { e.stopPropagation(); handleClear(); }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-4">
                <Upload className="w-8 h-8 text-slate-400" />
                <span className="text-sm text-slate-500 font-medium">Click to upload image</span>
                <span className="text-xs text-slate-400">(Max 5MB)</span>
              </div>
            )}
          </div>
        </div>

        {/* Prompt Area */}
        <div className="space-y-2 flex-grow flex flex-col">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Edit Instruction</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={!originalImage || isLoading}
            placeholder={originalImage ? "E.g., 'Add a retro filter', 'Make it look like a sketch', 'Remove the background'" : "Upload an image first..."}
            className="w-full h-32 p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
          />
          
          {/* Example Prompts */}
          <div className="pt-2">
             <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Try an example:</span>
             <div className="flex flex-wrap gap-2 mt-2">
               {EXAMPLE_PROMPTS.map((ex) => (
                 <button
                   key={ex}
                   onClick={() => setPrompt(ex)}
                   disabled={isLoading}
                   className="text-xs bg-white hover:bg-teal-50 text-slate-600 hover:text-teal-700 py-1.5 px-3 rounded-md border border-slate-200 hover:border-teal-200 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                   type="button"
                 >
                   {ex}
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-xs rounded border border-red-100">
            {error}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={!originalImage || !prompt || isLoading}
          className={`
            w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all
            ${!originalImage || !prompt || isLoading 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg'
            }
          `}
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Edit
            </>
          )}
        </button>
      </div>

      {/* Main Canvas Area */}
      <div className="w-full md:w-2/3 bg-slate-100/50 p-6 flex flex-col items-center justify-center relative min-h-[400px]">
        {generatedImage ? (
           <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="relative max-w-full max-h-[600px] shadow-lg rounded-lg overflow-hidden border border-slate-200 bg-white">
                <img src={generatedImage} alt="Generated Art" className="max-w-full max-h-[600px] object-contain" />
              </div>
              <div className="flex gap-4">
                 <a 
                   href={generatedImage} 
                   download="zinat-studio-edit.png"
                   className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm hover:bg-slate-50 transition-colors shadow-sm"
                 >
                   <Download className="w-4 h-4" /> Download
                 </a>
                 <button 
                   onClick={() => setGeneratedImage(null)}
                   className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm hover:bg-slate-50 transition-colors shadow-sm"
                 >
                   <RefreshCw className="w-4 h-4" /> Try Again
                 </button>
              </div>
           </div>
        ) : (
          <div className="text-center text-slate-400 flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-slate-300" />
            </div>
            <p className="max-w-xs text-sm">
              Your generated artwork will appear here. <br/>
              Use the controls on the left to start creating.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default ImageEditor;