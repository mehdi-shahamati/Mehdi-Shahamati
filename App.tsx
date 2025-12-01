import React from 'react';
import Resume from './components/Resume';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans-custom bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <Resume />
      <div className="text-center mt-8 text-slate-400 text-xs print:hidden">
        <p>Designed for A4 Printing &middot; Use browser print to save as PDF</p>
      </div>
    </div>
  );
};

export default App;