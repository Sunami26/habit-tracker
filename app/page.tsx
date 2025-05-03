'use client';

import {
  Bed,
  Droplet,
  Monitor,
  Flame,
  Home as HomeIcon,
  BarChart,
  Settings,
  Sun,
  Moon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', sleep: 5.5, water: 4, screen: 2.2 },
  { name: 'Tue', sleep: 6, water: 4.1, screen: 2.1 },
  { name: 'Wed', sleep: 6, water: 4.8, screen: 2.3 },
  { name: 'Thu', sleep: 6.5, water: 4.5, screen: 2.8 },
  { name: 'Fri', sleep: 6, water: 4.2, screen: 3.2 },
  { name: 'Sat', sleep: 5.8, water: 3.9, screen: 4 },
  { name: 'Sun', sleep: 7, water: 3.6, screen: 4.8 },
];

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans flex flex-col items-center transition-colors">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 shadow dark:shadow-white">
        <h1 className="text-xl font-bold">Personal Habit Tracker</h1>
        <div className="flex gap-4 items-center text-gray-700 dark:text-gray-300">
          <HomeIcon />
          <BarChart />
          <Settings />
          <button
            className="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-2">Welcome to Personal Analytics</h2>
        <h2 className="text-3xl font-bold mb-6">& Habit Tracker</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Start Tracking
        </button>
      </section>

      {/* Habit Progress Bars */}
      <section className="mt-10 w-full max-w-xl space-y-6 px-4">
        <HabitProgress icon={<Bed />} label="Sleep" value="7 hrs" fill="w-[80%]" color="bg-blue-600" />
        <HabitProgress icon={<Droplet />} label="Water" value="6 glasses" fill="w-[60%]" color="bg-cyan-400" />
        <HabitProgress icon={<Monitor />} label="Screen Time" value="3 hrs" fill="w-[40%]" color="bg-purple-500" />
      </section>

      {/* Line Chart Section */}
      <section className="w-full max-w-4xl mt-12 px-4">
        <h3 className="text-2xl font-bold mb-4 text-center">Weekly Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke={isDark ? '#ffffff' : '#000000'} />
            <YAxis domain={[1, 8]} stroke={isDark ? '#ffffff' : '#000000'} />
            <Tooltip
              contentStyle={{ backgroundColor: isDark ? '#222' : '#fff', color: isDark ? '#fff' : '#000' }}
            />
            <Legend />
            <Line type="monotone" dataKey="sleep" stroke="#2563eb" name="Sleep" />
            <Line type="monotone" dataKey="water" stroke="#06b6d4" name="Water" />
            <Line type="monotone" dataKey="screen" stroke="#a855f7" name="Screen Time" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Streak Section */}
      <section className="mt-10 text-xl font-semibold flex items-center gap-2 text-red-600 dark:text-red-400">
        <Flame className="text-2xl" />
        <p>
          Current Streak: <span className="text-black dark:text-white font-bold">4 Days</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full mt-16 py-4 flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Credits</a>
      </footer>
    </main>
  );
}

// Progress Bar Component
function HabitProgress({
  icon,
  label,
  value,
  fill,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  fill: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 w-28">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className={`h-full ${color} ${fill} rounded-full transition-all`}></div>
      </div>
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{value}</span>
    </div>
  );
}
