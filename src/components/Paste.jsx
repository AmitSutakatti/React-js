import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { removeFromPastes } from "../redux/PasteSlice"
import toast from 'react-hot-toast';
import { NavLink } from "react-router-dom"

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 transition-colors duration-700">
      <div className="flex justify-center mb-8">
        <input
          className="p-3 rounded-xl w-[90vw] max-w-xl bg-gray-700 text-white placeholder-gray-400 border border-blue-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 outline-none shadow-md"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center gap-7">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              className="border border-gray-700 bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl p-6 transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
              key={paste?._id}
            >
              <div className="text-xl font-bold text-blue-400 mb-2 truncate">{paste.title}</div>
              <div className="text-gray-200 mb-4 whitespace-pre-line break-words">{paste.content}</div>
              <div className="flex flex-wrap gap-3 justify-center mb-2">
                <NavLink
                  to={`/?pasteId=${paste?._id}`}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  Edit
                </NavLink>
                <NavLink
                  to={`/pastes/${paste?._id}`}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow hover:from-teal-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  View
                </NavLink>
                <button
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleDelete(paste?._id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold shadow hover:from-yellow-600 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to Clipboard");
                  }}
                >
                  Copy
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold shadow hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Share
                </button>
              </div>
              <div className="text-xs text-gray-400 text-right">{paste.createdAt}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-lg mt-10">No pastes found.</div>
        )}
      </div>
    </div>
  )
}

export default Pastes