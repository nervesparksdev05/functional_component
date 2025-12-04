import { useState } from 'react';
import { Search, SlidersHorizontal, Download, Save, MoreVertical } from 'lucide-react';

export default function CandidatesResumeResultTable() {
  const [selectedTab, setSelectedTab] = useState('View all');
  const [selectedResumes, setSelectedResumes] = useState([0, 1, 2, 5, 6]);

  const tabs = ['View all', 'High Scored', 'Medium Scored', 'Low Scored'];

  const resumes = [
    { id: 0, name: 'Lorem ipsum dolor.pdf', score: 60, date: '22 Jan 2022' },
    { id: 1, name: 'Lorem ipsum dolor.pdf', score: 72, date: '20 Jan 2022' },
    { id: 2, name: 'Lorem ipsum dolor.pdf', score: 78, date: '24 Jan 2022' },
    { id: 3, name: 'Lorem ipsum dolor.pdf', score: 38, date: '26 Jan 2022' },
    { id: 4, name: 'Lorem ipsum dolor.pdf', score: 42, date: '18 Jan 2022' },
    { id: 5, name: 'Lorem ipsum dolor.pdf', score: 66, date: '28 Jan 2022' },
    { id: 6, name: 'Lorem ipsum dolor.pdf', score: 91, date: '16 Jan 2022' },
  ];

  const toggleSelect = (id) => {
    setSelectedResumes(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedResumes.length === resumes.length) {
      setSelectedResumes([]);
    } else {
      setSelectedResumes(resumes.map(r => r.id));
    }
  };

  return (
    <div className="w-[1094px] h-[780px] bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-semibold text-gray-900">Candidates Resume Results</h1>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-sm font-medium rounded">
              5000 Resumes
            </span>
          </div>
          <p className="text-sm text-gray-500">Check all resumes scores with details</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Save size={16} />
            Save Resumes
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 flex items-center gap-2">
            <Download size={16} />
            Export All Matched Candidates
          </button>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-r border-gray-300 last:border-r-0 ${
                selectedTab === tab
                  ? 'bg-gray-50 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto mb-4">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-left">
              <th className="pb-3 pr-4 w-8">
                <input
                  type="checkbox"
                  checked={selectedResumes.length === resumes.length}
                  onChange={toggleSelectAll}
                  className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              <th className="pb-3 text-sm font-medium text-gray-700 pr-4">Candidates Resume</th>
              <th className="pb-3 text-sm font-medium text-gray-700 px-4">Matched Score (%)</th>
              <th className="pb-3 text-sm font-medium text-gray-700 px-4">Job Description</th>
              <th className="pb-3 text-sm font-medium text-gray-700 px-4">Analyzed Date</th>
              <th className="pb-3 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr key={resume.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 pr-4">
                  <input
                    type="checkbox"
                    checked={selectedResumes.includes(resume.id)}
                    onChange={() => toggleSelect(resume.id)}
                    className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="py-4 text-sm text-gray-900 pr-4">{resume.name}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-xs">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${resume.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 min-w-[40px]">
                      {resume.score}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">Associative UI/UX Designer</td>
                <td className="py-4 px-4 text-sm text-gray-600">{resume.date}</td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600">
              </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
        <div className="text-sm text-gray-600">Page 1 of 10</div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}