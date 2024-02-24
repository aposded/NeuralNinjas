/** @format */

import classNames from 'classnames'
import React,{useEffect,useState} from 'react'
import Icon from '../Text/Icon'
import InputLabel from './InputLabel'
import SelectOption from './SelectOption';

export default function Select({className,label,options,currentOption,setCurrentOption,placeholder,nullable,containerClassName,disabled,optional,...props}) {

    const [expanded,setExpanded]=useState(false);
    const [currentOptions,setCurrentOptions]=useState(options);

    useEffect(() => {
        if(nullable&&options.length>0) {
            setCurrentOptions([{id: 'default',value: placeholder},...options]);
        }
    },[setCurrentOptions,options,placeholder,nullable]);


    const setOption=(option) => {
        if(!disabled) {
            setCurrentOption(option)
            setExpanded(false)
        }
    }

    const toggleExpanded=(event) => {
        if(!disabled) {
            setExpanded(expanded => !expanded);
        }
    }

    return (
        <div className={classNames("p-1",containerClassName)}>
            {label? (
                <InputLabel optional={optional} htmlFor={props.name? props.name:null}>{label}</InputLabel>
            ):null}
            <div className={classNames('relative rounded-md shadow-lg cursor-pointer',className)}
                tabIndex='0'
            >
                <div
                    onClick={toggleExpanded}
                    className='p-2 border rounded-md bg-light border-slate-300'
                >
                    <input
                        className=
                        'w-full text-lg font-semibold transition-all cursor-pointer bg-light focus:outline-none focus:shadow-outline focus:border-primary'
                        {...props}
                        placeholder={placeholder}
                        value={
                            currentOption!=='default'? (
                                options.find(option => option.id===currentOption)?.value||''):''}
                        readOnly />
                    <Icon icon='chevron-down' className={classNames('absolute right-4 top-1/2 -translate-y-1/2 transition-transform',`${expanded? 'rotate-180':''}`)} />
                </div>
                {expanded? (
                    <div className='absolute left-0 right-0 z-50 p-1 mt-4 overflow-y-scroll rounded-md shadow-lg top-full bg-light max-h-64'>
                        {currentOptions.map(option => (
                            <SelectOption key={option.id||'default'} onClick={() => setOption(option.id||'default')} >{option.value}</SelectOption>
                        ))}
                    </div>
                ):null}
            </div>
        </div>
    )
}
