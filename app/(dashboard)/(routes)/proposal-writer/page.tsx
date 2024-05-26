import { InputFormCaption } from "@/components/input-form-caption";
import React from "react";

const Page = () => {
  return (
    <div className="container relative">
      <main className="flex-1" >
        <div className="my-8 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
          AI Proposal Writer
        </div>
        <InputFormCaption />
      </main>
    </div>
  );
};

export default Page;
