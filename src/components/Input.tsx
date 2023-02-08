import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import s from './teste.module.scss'

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelName: string
  errorMessage?: string
  whiteSpace?: boolean
  labelBackgroundColor?: string
}

export function Input({
  labelName,
  errorMessage,
  whiteSpace,
  labelBackgroundColor,
  ...props
}: InputProps) {
  return (
    <div className="flex min-h-[3.125rem] flex-col">
      <div
        className={`relative z-10 h-full rounded-md  
        border
        ${
          errorMessage
            ? 'border-solid border-danger1'
            : 'border-solid border-[var(--color-gray9)]'
        } 
        
        py-3 px-4 
        ${
          errorMessage
            ? 'focus-within:border-danger2'
            : 'focus-within:border-[var(--color-gray12)]'
        } 
        transition-color duration-150 ease-basic-transition
        `}
      >
        <input
          className={`peer h-full w-full cursor-text bg-[transparent] outline-0 placeholder:text-[transparent]`}
          placeholder={labelName}
          {...props}
        />
        <label
          className={`${
            errorMessage ? 'text-danger1' : 'text-[var(--color-gray9)]'
          }  absolute 
          top-1/2 left-4
          z-[-1] flex
          h-[1.125rem] translate-y-[-50%] items-center bg-appBackground1
          leading-[0] transition-[top,left,color,font-size,transform,padding] duration-150 ease-basic-transition
          peer-focus:top-0
          peer-focus:left-[10px]
          peer-focus:translate-y-[-50%]
          peer-focus:px-[0.1875rem]
          peer-focus:text-sm
          ${
            errorMessage
              ? 'peer-focus:text-danger1'
              : 'peer-focus:text-[var(--color-gray12)]'
          }
          peer-[&:not(:placeholder-shown)]:top-0
          peer-[&:not(:placeholder-shown)]:left-[10px]
          peer-[&:not(:placeholder-shown)]:translate-y-[-50%]
          peer-[&:not(:placeholder-shown)]:px-[0.1875rem]
          peer-[&:not(:placeholder-shown)]:text-sm
          
          `}
          style={
            labelBackgroundColor
              ? { backgroundColor: labelBackgroundColor }
              : {}
          }
        >
          {labelName}
        </label>
      </div>
      {errorMessage && (
        <span className="flex animate-subtle-content-reveal items-center gap-2 text-sm text-danger1">
          <ExclamationTriangleIcon />
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export function WIPAnimatedLabelInput({
  labelName,
  errorMessage,
  whiteSpace,
  labelBackgroundColor,
  ...props
}: InputProps) {
  return (
    <div className="flex min-h-[3.125rem] flex-col">
      <div
        className={`relative z-10 h-full rounded-md  
        border-r-2
        border-l-2
        border-b-2
        ${
          errorMessage
            ? 'border-solid border-danger1'
            : 'border-solid border-[var(--color-gray9)]'
        } 
        
        py-3 px-4 
        ${
          errorMessage
            ? 'focus-within:border-danger2'
            : 'focus-within:border-[var(--color-gray12)]'
        } 
        transition-color duration-150 ease-basic-transition

        ${s.subject}
        focus-within:before:border-l-[var(--color-gray12)]
        focus-within:before:border-t-[var(--color-gray12)]
        focus-within:after:border-t-[var(--color-gray12)]
        focus-within:after:border-r-[var(--color-gray12)]
        `}
      >
        <input
          className={`peer h-full w-full cursor-text bg-[transparent] outline-0 placeholder:text-[transparent]`}
          placeholder={labelName}
          {...props}
        />
        <line
          className={`${s.line} 
          peer-[:not(:focus)]:delay- 
          transition-color
          duration-150
          ease-basic-transition 
          peer-focus:w-[calc(97%-(41.17px+2px))] peer-focus:bg-[var(--color-gray12)] peer-[&:not(:placeholder-shown)]:w-[calc(97%-(41.17px+2px))]`}
        />
        <label
          className={`${
            errorMessage ? 'text-danger1' : 'text-[var(--color-gray9)]'
          } absolute top-1/2 
          left-4 z-[-1]
          flex h-[1.125rem]
          translate-y-[-50%] items-center bg-appBackground1 leading-[0]
          transition-[top,left,color,font-size,transform,padding] duration-150 ease-basic-transition
          peer-focus:top-0
          peer-focus:left-[10px]
          peer-focus:translate-y-[-50%]
          peer-focus:px-[0.125rem]
          peer-focus:text-sm
          ${
            errorMessage
              ? 'peer-focus:text-danger1'
              : 'peer-focus:text-[var(--color-gray12)]'
          }
          bg-[transparent]
          peer-[&:not(:placeholder-shown)]:top-0
          peer-[&:not(:placeholder-shown)]:left-[10px]
          peer-[&:not(:placeholder-shown)]:translate-y-[-50%]
          peer-[&:not(:placeholder-shown)]:px-[0.125rem]

          peer-[&:not(:placeholder-shown)]:text-sm
          
          `}
          style={
            labelBackgroundColor
              ? { backgroundColor: labelBackgroundColor }
              : {}
          }
        >
          {labelName}
        </label>
      </div>
      {errorMessage && (
        <span className="flex animate-subtle-content-reveal items-center gap-2 text-sm text-danger1">
          <ExclamationTriangleIcon />
          {errorMessage}
        </span>
      )}
    </div>
  )
}

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  labelName: string
  errorMessage?: string
  whiteSpace?: boolean
  labelBackgroundColor?: string
}

export function TextArea({
  labelName,
  errorMessage,
  whiteSpace,
  labelBackgroundColor,
  className,
  ...props
}: TextAreaProps) {
  return (
    <div className="flex min-h-[3.125rem] flex-col">
      <div
        className={`relative z-10 h-full rounded-md border ${
          errorMessage
            ? 'border-solid border-danger1'
            : 'border-solid border-[var(--color-gray9)]'
        } py-3 px-4 ${
          errorMessage
            ? 'focus-within:border-danger2'
            : 'focus-within:border-[var(--color-gray12)]'
        } transition-color duration-150 ease-basic-transition`}
      >
        <textarea
          className={
            className
              ? 'peer h-full w-full cursor-text bg-[transparent] outline-0 placeholder:text-[transparent] ' +
                className
              : 'peer h-full w-full cursor-text bg-[transparent] outline-0 placeholder:text-[transparent]'
          }
          placeholder={labelName}
          {...props}
        />
        <label
          className={`${
            errorMessage ? 'text-danger1' : 'text-[var(--color-gray9)]'
          } absolute top-6
          left-4 z-[-1]
          flex h-[1.125rem]
          translate-y-[-50%] items-center bg-appBackground1 leading-[0]
          transition-[top,left,color,font-size,transform,padding] duration-150 ease-basic-transition
          peer-focus:top-0
          peer-focus:left-[10px]
          peer-focus:translate-y-[-50%]
          peer-focus:px-[0.125rem]
          peer-focus:text-sm
          ${
            errorMessage
              ? 'peer-focus:text-danger1'
              : 'peer-focus:text-[var(--color-gray12)]'
          }
          peer-[&:not(:placeholder-shown)]:top-0
          peer-[&:not(:placeholder-shown)]:left-[10px]
          peer-[&:not(:placeholder-shown)]:translate-y-[-50%]
          peer-[&:not(:placeholder-shown)]:px-[0.125rem]
          peer-[&:not(:placeholder-shown)]:text-sm
          
          `}
          style={
            labelBackgroundColor
              ? { backgroundColor: labelBackgroundColor }
              : {}
          }
        >
          {labelName}
        </label>
      </div>
      {errorMessage && (
        <span className="flex animate-subtle-content-reveal items-center gap-2 text-sm text-danger1">
          <ExclamationTriangleIcon />
          {errorMessage}
        </span>
      )}
    </div>
  )
}
