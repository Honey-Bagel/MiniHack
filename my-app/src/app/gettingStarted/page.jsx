'use client';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';

export default function GettingStarted() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col mt-10 ml-32">
          <div>
            <div className="flex text-5xl font-bold text-black mb-4">
              Getting Started
            </div>
            <div className="flex text-2xl font-semibold w-96">
              Try it yourself! Enter the ingredients you have on hand and we will generate a recipe using what you have available.
            </div>
          </div>
          <div>
            <div className="w-6/12 mt-2">
              <TextareaAutosize
                minRows={3}
                maxRows={5}
                placeholder="Enter ingredients here..."
                className="border rounded-lg w-full p-2" 
                value={text}
              />
            </div>
            <div>
              <button className="flex border rounded-lg bg-yellow-500 mt-1">
                <div className="text-black font-semibold p-1 px-6">
                  Generate!
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className='w-10/12 mt-20 border rounded-lg'>
              HI
            </div>
          </div>
        </div>
      </div>
    </>
  );
}