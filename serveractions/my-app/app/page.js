
"use client"
import { useRef } from "react";

import { submitaction } from "@/actions/count";
export default function Home() {
  let ref = useRef();

  return (
    <div>
      <form ref={ref} action ={(e)=>{submitaction(e); e.current.reset() }}>
        <label>Name</label>
        <input name="Name" id="Name" type="text" className="text-shadow-indigo-400"/>


         <label>Address</label>
        <input name="add" id="add" type="text" className="text-shadow-amber-400"/>


        <button>Submit</button>
        
      </form>
    </div>
  );
}
