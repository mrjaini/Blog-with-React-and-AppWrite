import React , { forwardRef , useId}from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
},ref) {
    const id = useId();
    return (
        <div className='w-full'> 
            {label && <label htmlFor={id}
            className='' >
                <select
                {...props}
                id = {id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black ouline-none 
                    focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}`}>
                        {options?.map((option) => (
                            <option key={option.value} value={option}>{option}</option>
                        )) }
                </select>
            </label> }
        </div>
    )
}
export default forwardRef(Select)
