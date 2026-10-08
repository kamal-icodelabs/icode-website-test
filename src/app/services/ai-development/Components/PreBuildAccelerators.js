import React from "react";
import css from "../aiDevStyle.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";

export default function PreBuildAccelerators() {
  return (
    <div className={css.PreBuildAcceleratorsWrapper}>
      <ContentWidth>
        <div className={css.gradientCardWrapper}>
          <div className={css.headingWithIcon}>
            <Image width={120} height={120} src="/assests/img/ai-dev/clock.gif" alt="ticking clock" /> 
            
            <h2>Pre-Built <br/ > Accelerators</h2>
          </div>

          <ul className={css.ptContainers}>
            {preBuildPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </ContentWidth>
    </div>
  );
}

const preBuildPoints = [
  "Marketplace Smart Search (Weaviate + OpenAI + Sharetribe)",
  "AI Listing Generator (GPT-4 + Sharetribe listing API)",
  "RAG Chatbot Starter Kit (LangChain + Weaviate + OpenAI)",
  "AI Moderation Pipeline (content + image + fraud detection)",
  "Document Indexing & Auto Summary Toolkit",
];
