import React from "react";
import {
  Plus,
  RefreshCcw,
  Send,
  Shield,
  Settings,
  Building,
  User,
  Bell,
  EllipsisVertical,
  MoveRight,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const tableHead = [
    "College",
    "Admin",
    "Users",
    "Engagement",
    "Last Active",
    "Status",
    "Actions",
  ];

  const systemLogs = [
    {
      title: "System update completed",
      description: "Version 2.4.1 deployed successfully",
      timestamp: "2023-11-15 08:30:22",
      type: "info",
    },
    {
      title: "Database backup",
      description: "Automated backup completed successfully",
      timestamp: "2023-11-15 03:00:05",
      type: "info",
    },
    {
      title: "Failed login attempts",
      description: "Multiple failed attempts from IP 192.168.1.45",
      timestamp: "2023-11-14 22:15:30",
      type: "warning",
    },
    {
      title: "API rate limit exceeded",
      description: "Rate limit exceeded for Medical University API key",
      timestamp: "2023-11-14 15:42:18",
      type: "warning",
    },
    {
      title: "Storage limit approaching",
      description: "University of Technology at 85% storage capacity",
      timestamp: "2023-11-14 11:20:45",
      type: "warning",
    },
  ];

  const adminUsers = [
    {
      name: "John Smith",
      email: "john.smith@notifyedu.com",
      role: "Super Admin",
      lastActive: "10 minutes ago",
      status: "Active",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@notifyedu.com",
      role: "System Admin",
      lastActive: "2 hours ago",
      status: "Active",
    },
    {
      name: "Michael Davis",
      email: "michael.davis@notifyedu.com",
      role: "Support Admin",
      lastActive: "1 day ago",
      status: "Active",
    },
  ];

  const dashboardData = {
    totalColleges: {
      count: 8,
      changePercent: 8.7,
      statusBreakdown: {
        active: 6,
        pending: 1,
        inactive: 1,
      },
    },
    totalUsers: {
      count: 5860,
      changePercent: 12.5,
      breakdown: {
        students: 5267,
        teachers: 593,
      },
    },
    totalAnnouncements: {
      count: 1055,
      changePercent: 18.2,
      avgPerCollege: 176,
      avgOpenRate: 78,
    },
    topActiveCollege: {
      name: "Atria Institute Of Technology",
      announcementsThisMonth: 235,
      note: "Most active this month",
    },
  };

  const collegesData = [
    {
      college: "University of Technology",
      domain: "uot.edu",
      admin: {
        name: "Dr. Robert Johnson",
        email: "admin@uot.edu",
      },
      users: {
        total: 1250,
        students: 1130,
        teachers: 120,
      },
      engagement: 78,
      lastActive: "2 hours ago",
      status: "Active",
    },
    {
      college: "State College",
      domain: "statecollege.edu",
      admin: {
        name: "Prof. Sarah Williams",
        email: "admin@statecollege.edu",
      },
      users: {
        total: 980,
        students: 885,
        teachers: 95,
      },
      engagement: 65,
      lastActive: "1 day ago",
      status: "Active",
    },
    {
      college: "City University",
      domain: "cityuniv.edu",
      admin: {
        name: "Dr. Michael Brown",
        email: "admin@cityuniv.edu",
      },
      users: {
        total: 0,
        students: 0,
        teachers: 0,
      },
      engagement: null,
      lastActive: "Never",
      status: "Pending",
    },
    {
      college: "Technical Institute",
      domain: "techinst.edu",
      admin: {
        name: "Prof. Emily Davis",
        email: "admin@techinst.edu",
      },
      users: {
        total: 750,
        students: 682,
        teachers: 68,
      },
      engagement: 72,
      lastActive: "5 hours ago",
      status: "Active",
    },
    {
      college: "Liberal Arts College",
      domain: "lac.edu",
      admin: {
        name: "Dr. James Wilson",
        email: "admin@lac.edu",
      },
      users: {
        total: 620,
        students: 560,
        teachers: 60,
      },
      engagement: 58,
      lastActive: "3 days ago",
      status: "Active",
    },
    {
      college: "Medical University",
      domain: "medu.edu",
      admin: {
        name: "Dr. Lisa Chen",
        email: "admin@medu.edu",
      },
      users: {
        total: 890,
        students: 780,
        teachers: 110,
      },
      engagement: 82,
      lastActive: "1 hour ago",
      status: "Active",
    },
    {
      college: "Business School",
      domain: "bschool.edu",
      admin: {
        name: "Prof. David Lee",
        email: "admin@bschool.edu",
      },
      users: {
        total: 320,
        students: 280,
        teachers: 40,
      },
      engagement: null,
      lastActive: "2 weeks ago",
      status: "Inactive",
    },
    {
      college: "Engineering College",
      domain: "engcol.edu",
      admin: {
        name: "Dr. Jennifer Taylor",
        email: "admin@engcol.edu",
      },
      users: {
        total: 1050,
        students: 950,
        teachers: 100,
      },
      engagement: 75,
      lastActive: "12 hours ago",
      status: "Active",
    },
  ];

  const filterOptionInDays = [7, 70, 90];

  const getIcon = (type) => {
    switch (type) {
      case "info":
        return <Activity className="text-blue-400" size={20} />;
      case "warning":
        return <AlertTriangle className="text-yellow-400" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col p-4 h-screen gap-4">
      <div className="flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
        <div className="">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Platform Dashboard
          </h2>
          <div className="text-base sm:text-md text-gray-500">
            Comprehensive overview of your platform's performance and metrics
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <select className="border border-gray-300 rounded-md px-4 py-2">
            {filterOptionInDays.map((day, ind) => (
              <option key={ind} value={day}>{`Last ${day} Days`}</option>
            ))}
          </select>
          <RefreshCcw className="bg-gray-200 w-9 h-9 p-2 rounded-lg" />
        </div>
      </div>

      {/* 4 Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <button className="px-5 py-3 bg bg-primaryColor rounded-md text-white flex flex-row gap-3 items-center justify-center">
          <Plus />
          <span>Add College</span>
        </button>
        <button className="px-5 py-3 bg rounded-md text-gray-800 bg-gray-200 flex flex-row gap-3 items-center justify-center">
          <Send />
          <span>Send Announcement</span>
        </button>
        <button className="px-5 py-3 bg rounded-md text-gray-800 bg-gray-200 flex flex-row gap-3 items-center justify-center">
          <Shield />
          <span>Manage Platform Admin</span>
        </button>
        <button className="px-5 py-3 bg rounded-md text-gray-800 bg-gray-200 flex flex-row gap-3 items-center justify-center">
          <Settings />
          <span>Platform Setting</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="border border-gray-200 rounded-sm flex flex-col p-4 gap-3 bg-gray-50">
          <div className="flex flex-row justify-between">
            <div className="">Total Colleges</div>
            <Building />
          </div>
          <div className="text-2xl">{dashboardData.totalColleges.count}</div>
          <div className="">
            <span
              className={`${
                dashboardData.totalColleges.changePercent > 0
                  ? "text-green-400"
                  : "text-red-500"
              } text-md`}
            >
              {dashboardData.totalColleges.changePercent}%
            </span>
            <span className="text-sm text-gray-500"> from last period</span>
          </div>
          <div className="flex flex-row gap-4">
            <div className="rounded-md px-2 py-1 bg-green-100 text-green-600">
              {dashboardData.totalColleges.statusBreakdown.active} Active
            </div>
            <div className="rounded-md px-2 py-1 bg-yellow-100 text-yellow-600">
              {dashboardData.totalColleges.statusBreakdown.pending} Pending
            </div>
            <div className="rounded-md px-2 py-1 bg-red-100 text-yellow-600">
              {dashboardData.totalColleges.statusBreakdown.inactive} Inactive
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 rounded-sm flex flex-col p-4 gap-3 bg-gray-50">
          <div className="flex flex-row justify-between">
            <div className="">Total Users</div>
            <User />
          </div>
          <div className="text-2xl">{dashboardData.totalUsers.count}</div>
          <div className="">
            <span
              className={`${
                dashboardData.totalUsers.changePercent > 0
                  ? "text-green-400"
                  : "text-red-500"
              } text-md`}
            >
              {dashboardData.totalUsers.changePercent}%
            </span>
            <span className="text-sm text-gray-500"> from last period</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col text-left">
              <div className="text-gray-400 text-md">Students</div>
              <div className="">
                {dashboardData.totalUsers.breakdown.students}
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="text-gray-400 text-md">Teachers</div>
              <div className="">
                {dashboardData.totalUsers.breakdown.teachers}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 rounded-sm flex flex-col p-4 gap-3 bg-gray-50">
          <div className="flex flex-row justify-between">
            <div className="">Total Announcement</div>
            <Bell />
          </div>
          <div className="text-2xl">
            {dashboardData.totalAnnouncements.count}
          </div>
          <div className="">
            <span
              className={`${
                dashboardData.totalAnnouncements.changePercent > 0
                  ? "text-green-400"
                  : "text-red-500"
              } text-md`}
            >
              {dashboardData.totalAnnouncements.changePercent}%
            </span>
            <span className="text-sm text-gray-500"> from last period</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-gray-500">Average Per College</div>
              <div className="">
                {dashboardData.totalAnnouncements.avgPerCollege}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-gray-500">Average Open Rate</div>
              <div className="">
                {dashboardData.totalAnnouncements.avgOpenRate}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-200 rounded-sm flex flex-col p-4 gap-3 bg-gray-50">
          <div className="flex flex-row justify-between">
            <div className="">Most Active College</div>
            <Building />
          </div>
          <div className="text-2xl">{dashboardData.topActiveCollege.name}</div>
          <div className="text-gray-500 flex flex-row justify-between">
            <div className="">Anouncement This Month</div>
            <div className="">
              {dashboardData.topActiveCollege.announcementsThisMonth}
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="">Note: {dashboardData.topActiveCollege.note}</div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-4">
        <div className="">
          <div className="text-xl md:text-2xl font-medium">
            Registered College
          </div>
          <div className="text-gray-500">
            Overview of all colleges in the platform
          </div>
        </div>
        <table className="overflow-x-auto min-w-full overflow-y-auto">
          <thead className="border-b border-gray-200">
            {tableHead.map((val, ind) => (
              <td
                key={ind}
                className="px-6 py-3 text-left text-md font-medium whitespace-nowrap"
              >
                {val}
              </td>
            ))}
          </thead>
          <tbody className="">
            {collegesData.map((data, index) => (
              <tr
                className="hover:bg-gray-50 border-t border-gray-200 bg-white"
                key={index}
              >
                {/* college */}
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="">{data.college}</div>
                  <div className="text-gray-500 text-sm">{data.domain}</div>
                </td>
                {/* admin */}
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="">{data.admin.name}</div>
                  <div className="text-gray-500 text-sm">
                    {data.admin.email}
                  </div>
                </td>
                {/* user */}
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="">{"Total: " + data.users.total}</div>
                  <div className="text-gray-500 text-sm">
                    {"Students: " +
                      data.users.students +
                      ", Teachers: " +
                      data.users.teachers}
                  </div>
                </td>
                {/* engagement */}
                <td className="whitespace-nowrap px-6 py-4">
                  {data.engagement}
                </td>
                {/* last active */}
                <td className="whitespace-nowrap px-6 py-4">
                  {data.lastActive}
                </td>
                {/* status */}
                <td className="whitespace-nowrap px-6 py-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${data.status === 'Active' && 'bg-green-100 text-green-800'} ${data.status === 'Pending' && 'bg-yellow-100 text-yellow-800'} ${data.status === 'Inactive' && 'bg-red-100 text-red-800'}`}>
                    {data.status}
                  </span>
                </td>
                {/* actions */}
                <td className="whitespace-nowrap px-6 py-4">
                  <button>
                    <EllipsisVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border border-gray-200 p-4 flex flex-row justify-between items-center -mt-4">
        <div className="text-gray-500 text-sm">Showing 8 of 8 Colleges</div>
        <Link to="/colleges" className="flex flex-row gap-1 items-center">
          <span className="text-sm">View All Colleges</span>
          <MoveRight />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 px-4 py-4 border border-gray-100 overflow-x-auto">
          <div className="min-w-full lg:w-auto">
            <div className="text-lg font-medium">Platform Admins</div>
            <div className="text-sm text-gray-500">
              Manage platform administrator accounts
            </div>
          </div>
          <table className="">
            <thead>
              <tr>
                {["Name", "Role", "Last Active", "Status", "Actions"].map(
                  (val, indx) => (
                    <td
                      key={indx}
                      className="whitespace-nowrap text-gray-500 px-6 py-4"
                    >
                      {val}
                    </td>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((val, indx) => (
                <tr className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="">{val.name}</div>
                    <div className="">{val.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{val.role}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {val.lastActive}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${val.status === 'Active' && 'bg-green-100 text-green-800'} ${val.status === 'Pending' && 'bg-yellow-100 text-yellow-800'} ${val.status === 'Inactive' && 'bg-red-100 text-red-800'}`}>
                    {val.status}
                  </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <EllipsisVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            className="bg-primaryColor flex items-center justify-center gap-3 text-white px-4 py-2 rounded-lg"
          >
            <Plus />
            <span>Add Admin</span>
          </button>
        </div>
        <div className="bg-white rounded-xl p-6 w-full shadow-sm border border-gray-200">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">System Logs</h2>
            <p className="text-sm text-gray-500">
              Recent system activity and events
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {systemLogs.map((log, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex gap-3 items-start">
                  <span className="mt-1">{getIcon(log.type)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{log.title}</p>
                    <p className="text-sm text-gray-500">{log.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 whitespace-nowrap">
                  {log.timestamp}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200 mt-4">
            <button className="w-full bg-primaryColor transition text-white text-sm py-2 rounded-md">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
