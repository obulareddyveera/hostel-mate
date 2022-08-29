import React from 'react';

const InputField = ({id, placeholder, handler}) => {
    return (
        <label className="relative block p-3 border-2 border-gray-200 rounded-lg" htmlFor={id}>
            <input
                className="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
                id={id}
                type="text"
                value={handler.value}
                onClick={(e) => handler.changeHandler(id, e.target.value)}
                placeholder={placeholder}
            />
            <span className="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                {placeholder}
            </span>
        </label>
    )
}

export default InputField;