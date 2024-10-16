import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewData = ({ handleEdit, setStorage, Storage }) => {

  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Records</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="px-6 py-4 border border-blue-300">#</th>
              <th className="px-6 py-4 border border-blue-300">Name</th>
              <th className="px-6 py-4 border border-blue-300">Email</th>
              <th className="px-6 py-4 border border-blue-300">Course</th>
              <th className="px-6 py-4 border border-blue-300">Message</th>
              <th className="px-6 py-4 border border-blue-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {Storage.map((rec, index) => (
              <tr key={index} className="hover:bg-blue-50 text-gray-700 text-sm">
                <td className="border px-6 py-4 text-center">{index + 1}</td>
                <td className="border px-6 py-4 text-center">{rec.name}</td>
                <td className="border px-6 py-4 text-center">{rec.email}</td>
                <td className="border px-6 py-4 text-center">{rec.course}</td>
                <td className="border px-6 py-4 text-center">{rec.message}</td>
                <td className="border px-6 py-4 text-center">
                  <button
                    className="bg-green-500 text-white px-3 py-2 rounded-full shadow hover:bg-green-600 transition-all duration-200"
                    onClick={() => handleEdit(rec.id)}
                  >
                    <PencilIcon className="w-5 h-5 inline-block" />
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-2 ml-2 rounded-full shadow hover:bg-red-600 transition-all duration-200"
                    onClick={() => handleRemove(rec.id)}
                  >
                    <TrashIcon className="w-5 h-5 inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewData;

