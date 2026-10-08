"use client";
import React, { useState } from "react";
import css from "../aiDevStyle.module.css";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function OurTechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={css.OurTechStackWrapper}>
      <ContentWidth>
        <div className={css.techStackContent}>
          <div className={css.headerContainer}>
            <h2 className={css.title}>Our Tech Stack</h2>
            <p className={css.subtitle}>
              Learn how our 6-step approach streamlines success and efficiency.
            </p>
          </div>

          <div className={css.tabNavigation}>
            {techStackData.categories.map((category, index) => (
              <button
                key={index}
                className={`${css.tabButton} ${activeTab === index ? css.activeTab : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className={css.tabContent}>
            <div className={css.techBoxWrapper}>
              {techStackData.categories[activeTab].tools.map((tool, index) => (
                <div key={index} className={css.techBox}>
                  <Image width={40} height={40} src={tool.img} loading="lazy" alt={tool.label} />
                  <span>{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
const techStackData = {
  categories: [
    {
      name: "LLMs & NLP",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/llm/LLaMA.svg",
          label: "LLaMA",
        },
        {
          img: "/assests/logo/aipage/techStack/llm/LangChain.svg",
          label: "LangChain",
        },
        {
          img: "/assests/logo/aipage/techStack/llm/HuggingFace.svg",
          label: "HuggingFace",
        },
      ],
    },
    {
      name: "Vision & Audio",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/Vision/YOLOv8.svg",
          label: "YOLOv8",
        },
        {
          img: "/assests/logo/aipage/techStack/Vision/Whisper.svg",
          label: "Whisper",
        },
        {
          img: "/assests/logo/aipage/techStack/Vision/Wav2Lip.svg",
          label: "Wav2Lip",
        },
        {
          img: "/assests/logo/aipage/techStack/Vision/StyleGAN.svg",
          label: "StyleGAN",
        },
      ],
    },
    {
      name: "Infra & Deployment",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/infra/Supabase.svg",
          label: "Supabase",
        },
        {
          img: "/assests/logo/aipage/techStack/infra/Docker.svg",
          label: "Docker",
        },
        {
          img: "/assests/logo/aipage/techStack/infra/EC2.svg",
          label: "EC2",
        },
        {
          img: "/assests/logo/aipage/techStack/infra/ONNX.svg",
          label: "ONNX",
        },
        // {
        //   img: "/assests/logo/aipage/techStack/infra/TorchScript.svg",
        //   label: "TorchScript",
        // },
      ],
    },
    {
      name: "MLOps",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/MLOps/Monitoring.svg",
          label: "Monitoring",
        },
        {
          img: "/assests/logo/aipage/techStack/MLOps/Quantization.svg",
          label: "Quantization",
        },
        {
          img: "/assests/logo/aipage/techStack/MLOps/LoRA.svg",
          label: "LoRA",
        },
        {
          img: "/assests/logo/aipage/techStack/MLOps/Drift Detection.svg",
          label: "Drift Detection",
        },
      ],
    },
    {
      name: "Gen AI",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/genAI/DALL·E.svg",
          label: "DALL·E",
        },
        {
          img: "/assests/logo/aipage/techStack/genAI/DreamBooth.svg",
          label: "DreamBooth",
        },
        {
          img: "/assests/logo/aipage/techStack/genAI/Stable Diffusion.svg",
          label: "Stable Diffusion",
        },
      ],
    },
    {
      name: "RAG & Search",
      tools: [
        {
          img: "/assests/logo/aipage/techStack/rag/Pinecone.svg",
          label: "Pinecone",
        },
        {
          img: "/assests/logo/aipage/techStack/rag/Weaviate.svg",
          label: "Weaviate",
        },
        {
          img: "/assests/logo/aipage/techStack/rag/Chroma.svg",
          label: "Chroma",
        },
      ],
    },
  ],
};
