import React, { useState } from "react";
import Pagination from "../../components/ui/pagination";
import { Plus } from "lucide-react";

const Colleges = () => {

  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;
  const tableHead = ['College',	'Domain',	'Admin',	'Users',	'Status',	'Actions'];
  const statuses = ["Active", "Inactive", "Pending"];

  const colleges = [
    {
      name: "National Tech University",
      domain: "ntu.edu",
      admin: "Dr. Angela Moore",
      email: "admin@ntu.edu",
      users: {
        total: 1340,
        students: 1100,
        teachers: 240
      },
      status: "Active"
    },
    {
      name: "Western State College",
      domain: "weststate.edu",
      admin: "Prof. Anthony Harris",
      email: "admin@weststate.edu",
      users: {
        total: 1020,
        students: 850,
        teachers: 170
      },
      status: "Active"
    },
    {
      name: "Creative Arts Institute",
      domain: "cai.edu",
      admin: "Dr. Monica Lee",
      email: "admin@cai.edu",
      users: {
        total: 580,
        students: 470,
        teachers: 110
      },
      status: "Active"
    },
    {
      name: "East Coast University",
      domain: "ecu.edu",
      admin: "Prof. Brian Young",
      email: "admin@ecu.edu",
      users: {
        total: 0,
        students: 0,
        teachers: 0
      },
      status: "Pending"
    },
    {
      name: "Central Business School",
      domain: "cbs.edu",
      admin: "Dr. Rachel Kim",
      email: "admin@cbs.edu",
      users: {
        total: 720,
        students: 590,
        teachers: 130
      },
      status: "Active"
    },
    {
      name: "Oceanview College",
      domain: "ovcollege.edu",
      admin: "Prof. Daniel Patel",
      email: "admin@ovcollege.edu",
      users: {
        total: 670,
        students: 550,
        teachers: 120
      },
      status: "Active"
    },
    {
      name: "Harmony Music Academy",
      domain: "hma.edu",
      admin: "Dr. Kevin Singh",
      email: "admin@hma.edu",
      users: {
        total: 420,
        students: 350,
        teachers: 70
      },
      status: "Active"
    },
    {
      name: "Capital Medical College",
      domain: "cmc.edu",
      admin: "Dr. Susan Wang",
      email: "admin@cmc.edu",
      users: {
        total: 980,
        students: 780,
        teachers: 200
      },
      status: "Active"
    },
    {
      name: "Greenfield University",
      domain: "gfu.edu",
      admin: "Prof. Thomas Allen",
      email: "admin@gfu.edu",
      users: {
        total: 1150,
        students: 950,
        teachers: 200
      },
      status: "Active"
    },
    {
      name: "Metropolitan Law School",
      domain: "mls.edu",
      admin: "Dr. Olivia Brooks",
      email: "admin@mls.edu",
      users: {
        total: 400,
        students: 310,
        teachers: 90
      },
      status: "Inactive"
    },
    {
      name: "Phoenix Polytechnic",
      domain: "phoenixpoly.edu",
      admin: "Dr. Nathan Clark",
      email: "admin@phoenixpoly.edu",
      users: {
        total: 890,
        students: 730,
        teachers: 160
      },
      status: "Active"
    },
    {
      name: "Liberty Technical College",
      domain: "ltc.edu",
      admin: "Prof. Megan Cooper",
      email: "admin@ltc.edu",
      users: {
        total: 760,
        students: 620,
        teachers: 140
      },
      status: "Active"
    },
    {
      name: "Redwood Engineering College",
      domain: "rec.edu",
      admin: "Dr. Steven Hall",
      email: "admin@rec.edu",
      users: {
        total: 1130,
        students: 900,
        teachers: 230
      },
      status: "Active"
    },
    {
      name: "Horizon Science University",
      domain: "hsu.edu",
      admin: "Prof. Grace Martinez",
      email: "admin@hsu.edu",
      users: {
        total: 1040,
        students: 860,
        teachers: 180
      },
      status: "Active"
    },
    {
      name: "Glacier College",
      domain: "glacier.edu",
      admin: "Dr. Ryan Scott",
      email: "admin@glacier.edu",
      users: {
        total: 490,
        students: 400,
        teachers: 90
      },
      status: "Pending"
    },
    {
      name: "Riverbend School of Design",
      domain: "rsd.edu",
      admin: "Prof. Emily Turner",
      email: "admin@rsd.edu",
      users: {
        total: 600,
        students: 500,
        teachers: 100
      },
      status: "Active"
    },
    {
      name: "Oakridge College of Nursing",
      domain: "oakridge.edu",
      admin: "Dr. Jason Reed",
      email: "admin@oakridge.edu",
      users: {
        total: 820,
        students: 650,
        teachers: 170
      },
      status: "Active"
    },
    {
      name: "Beacon Hill University",
      domain: "bhu.edu",
      admin: "Prof. Angela Carter",
      email: "admin@bhu.edu",
      users: {
        total: 350,
        students: 280,
        teachers: 70
      },
      status: "Inactive"
    },
    {
      name: "Starlight College",
      domain: "starlight.edu",
      admin: "Dr. Samuel Bennett",
      email: "admin@starlight.edu",
      users: {
        total: 900,
        students: 720,
        teachers: 180
      },
      status: "Active"
    },
    {
      name: "Zenith Business Academy",
      domain: "zba.edu",
      admin: "Prof. Chloe Diaz",
      email: "admin@zba.edu",
      users: {
        total: 780,
        students: 630,
        teachers: 150
      },
      status: "Active"
    }
  ];

  
  return (
    <div className="flex flex-col p-4 h-screen overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-3 md:items-center">
        <h2 className="text-xl font-bold">Manage College</h2>
        <button className="px-5 py-3 bg bg-primaryColor rounded-md text-white flex flex-row gap-3">
          <Plus />
          <span>Add College</span>
        </button>
      </div>

      {/* Filter Admin Section */}
      <div className="flex flex-col gap-4 border-2 mt-5 px-4 py-5">
        <h3 className="text-lg font-medium">Filter Colleges</h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-center">
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

      {/* College Details */}
      <div className="overflow-x-auto mt-5 border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {
                tableHead.map((val) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  {val}
                </th>
                ))
              }
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {colleges.map(({name, domain, email, admin, status, users}, idx) => (
              <tr key={idx}>
                {/* College Name */}
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                  {name}
                </td>

                {/* Domain Name */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {domain}
                </td>

                {/* Admin */}
                <td className="">
                  <div className="max-w-[15ch] truncate font-medium text-gray-900">{admin}</div>
                  <div className="text-sm text-gray-500">{email}</div>
                </td>

                {/* Users */}
                <td>
                  <div className="whitespace-nowrap font-medium text-gray-900">{users.total + ' total'}</div>
                  <div className="whitespace-nowrap text-sm text-gray-500">{users.students + ' students, ' + users.teachers + ' teachers'}</div>
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${status === 'Active' && 'bg-green-100 text-green-800'} ${status === 'Pending' && 'bg-yellow-100 text-yellow-800'} ${status === 'Inactive' && 'bg-red-100 text-red-800'}`}>
                    {status}
                  </span>
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
}

export default Colleges
