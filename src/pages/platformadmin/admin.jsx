import React, { useState } from "react";
import Pagination from "../../components/ui/pagination";
import { Plus } from "lucide-react";

const Admin = () => {
  const colleges = [
    { id: 1, name: "MIT" },
    { id: 2, name: "Harvard" },
    { id: 3, name: "Stanford" },
  ];

  const adminDetails = [
    {
      initials: "DRJ",
      name: "Dr. Robert Johnson",
      email: "admin@uot.edu",
      college: "University of Technology",
      status: "Active",
      lastLogin: "Today at 10:30 AM",
      created: "2023-01-15"
    },
    {
      initials: "PSW",
      name: "Prof. Sarah Williams",
      email: "admin@statecollege.edu",
      college: "State College",
      status: "Active",
      lastLogin: "Yesterday at 3:45 PM",
      created: "2023-02-20"
    },
    {
      initials: "DMB",
      name: "Dr. Michael Brown",
      email: "admin@cityuniv.edu",
      college: "City University",
      status: "Pending",
      lastLogin: "Never",
      created: "2023-09-05"
    },
    {
      initials: "PED",
      name: "Prof. Emily Davis",
      email: "admin@techinst.edu",
      college: "Technical Institute",
      status: "Active",
      lastLogin: "3 days ago",
      created: "2023-03-10"
    },
    {
      initials: "DJW",
      name: "Dr. James Wilson",
      email: "admin@lac.edu",
      college: "Liberal Arts College",
      status: "Active",
      lastLogin: "1 week ago",
      created: "2023-04-22"
    },
    {
      initials: "DLC",
      name: "Dr. Lisa Chen",
      email: "admin@medu.edu",
      college: "Medical University",
      status: "Active",
      lastLogin: "Today at 9:15 AM",
      created: "2023-05-18"
    },
    {
      initials: "PDL",
      name: "Prof. David Lee",
      email: "admin@bschool.edu",
      college: "Business School",
      status: "Inactive",
      lastLogin: "2 months ago",
      created: "2023-06-30"
    },
    {
      initials: "DJT",
      name: "Dr. Jennifer Taylor",
      email: "admin@engcol.edu",
      college: "Engineering College",
      status: "Active",
      lastLogin: "Yesterday at 11:20 AM",
      created: "2023-07-12"
    },
    {
      initials: "PKN",
      name: "Prof. Kevin Nash",
      email: "admin@eco.edu",
      college: "Economics College",
      status: "Pending",
      lastLogin: "Never",
      created: "2023-08-01"
    },
    {
      initials: "DAS",
      name: "Dr. Amanda Smith",
      email: "admin@lawschool.edu",
      college: "Law School",
      status: "Active",
      lastLogin: "4 days ago",
      created: "2023-09-09"
    },
    {
      initials: "PML",
      name: "Prof. Mark Lewis",
      email: "admin@politech.edu",
      college: "Polytechnic College",
      status: "Active",
      lastLogin: "2 hours ago",
      created: "2023-10-15"
    },
    {
      initials: "DNB",
      name: "Dr. Nancy Brown",
      email: "admin@artsuniv.edu",
      college: "Arts University",
      status: "Inactive",
      lastLogin: "1 month ago",
      created: "2023-11-20"
    },
    {
      initials: "PRD",
      name: "Prof. Richard Daniels",
      email: "admin@designinst.edu",
      college: "Design Institute",
      status: "Pending",
      lastLogin: "Never",
      created: "2023-12-05"
    },
    {
      initials: "DCL",
      name: "Dr. Carol Lin",
      email: "admin@culinary.edu",
      college: "Culinary College",
      status: "Active",
      lastLogin: "Today at 8:00 AM",
      created: "2024-01-02"
    },
    {
      initials: "PTS",
      name: "Prof. Tom Sanders",
      email: "admin@music.edu",
      college: "Music Academy",
      status: "Inactive",
      lastLogin: "2 weeks ago",
      created: "2024-01-18"
    },
    {
      initials: "DRK",
      name: "Dr. Rachel Kim",
      email: "admin@pharmacol.edu",
      college: "Pharmacology Institute",
      status: "Active",
      lastLogin: "Yesterday at 1:15 PM",
      created: "2024-02-10"
    },
    {
      initials: "PSN",
      name: "Prof. Steven Nolan",
      email: "admin@bioeng.edu",
      college: "Bioengineering College",
      status: "Active",
      lastLogin: "Today at 12:05 PM",
      created: "2024-03-01"
    },
    {
      initials: "DAH",
      name: "Dr. Alice Harper",
      email: "admin@datauniv.edu",
      college: "Data Science University",
      status: "Pending",
      lastLogin: "Never",
      created: "2024-03-22"
    },
    {
      initials: "PFB",
      name: "Prof. Felix Brown",
      email: "admin@robotics.edu",
      college: "Robotics Institute",
      status: "Active",
      lastLogin: "3 hours ago",
      created: "2024-04-05"
    },
    {
      initials: "DGG",
      name: "Dr. Grace Green",
      email: "admin@envsci.edu",
      college: "Environmental Science College",
      status: "Active",
      lastLogin: "Today at 7:45 AM",
      created: "2024-04-10"
    }
  ];
  
  const tableHead = ['Admin',	'College',	'Status',	'Last Login',	'Created',	'Actions']
  const statuses = ["Active", "Inactive", "Pending"];
  const [search, setSearch] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;


  return (
    <div className="flex flex-col p-4 h-screen overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-3 md:items-center">
        <h2 className="text-xl font-bold">Manage College Admins</h2>
        <button className="px-5 py-3 bg bg-primaryColor rounded-md text-white flex flex-row gap-3">
          <Plus />
          <span>Add Admins</span>
        </button>
      </div>

      {/* Filter Admin Section */}
      <div className="flex flex-col gap-4 border-2 mt-5 px-4 py-5">
        <h3 className="text-lg font-medium">Filter Admins</h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-center">
          {/* Filter By college */}
          <select className="border border-gray-300 rounded-md px-4 py-2 flex-1">
            <option value="">Select the College</option>
            {colleges.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>

          {/* Filter By status */}
          <select className="border border-gray-300 rounded-md px-4 py-2 flex-1">
            <option value="">Select the Status</option>
            {statuses.map((name, key) => (
              <option key={key} value={name}>
                {name}
              </option>
            ))}
          </select>

          {/* Filter By search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Admin Details */}
      <div className="overflow-x-auto mt-5 border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {tableHead.map((val) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adminDetails.map(({initials, college, email, name, status, lastLogin, created}, idx) => (
              <tr key={idx}>
                {/* Admin Info */}
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                    {initials}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500">admin@uot.edu</div>
                  </div>
                </td>

                {/* College */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {college}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${status === 'Active' && 'bg-green-100 text-green-800'} ${status === 'Pending' && 'bg-yellow-100 text-yellow-800'} ${status === 'Inactive' && 'bg-red-100 text-red-800'}`}>
                    {status}
                  </span>
                </td>

                {/* Last Login */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lastLogin}
                </td>

                {/* Created */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {created}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-600 text-xl">
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
};

export default Admin;
