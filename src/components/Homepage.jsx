import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addToPastes, updateToPastes } from "../redux/PasteSlice"
import toast from 'react-hot-toast';

const Homepage = () => {
    const allPastes = useSelector((state) => state.paste.pastes)
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createAt: new Date().toISOString(),
        }
        if (pasteId) {
            dispatch(updateToPastes(paste));
            toast.success("Paste updated!");
        } else {
            dispatch(addToPastes(paste));
            toast.success("Paste created!");
        }
        setTitle("");
        setValue("");
        setSearchParams("");
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            }
        }
    }, [pasteId, allPastes]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors duration-700">
            <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-xl transition-all duration-500">
                <div className="flex flex-row gap-3 items-center mb-6">
                    <input
                        className="flex-1 p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-blue-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 outline-none"
                        type="text"
                        placeholder="Enter the title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                        onClick={createPaste}
                    >
                        {pasteId ? "Update My Paste" : "Create My Paste"}
                    </button>
                </div>
                <textarea
                    className="w-full rounded-xl mt-2 min-h-[180px] p-4 bg-gray-700 text-white placeholder-gray-400 border border-blue-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 outline-none resize-y"
                    value={value}
                    placeholder="Enter content here"
                    onChange={(e) => setValue(e.target.value)}
                    rows={10}
                />
            </div>
        </div>
    )
}
export default Homepage