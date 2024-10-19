import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="image-container font-[family-name:var(--font-geist-mono)] font-bold">
      <img src="/teams.jpg" alt="" className="background-image" />
      <h1 className="title">웹보안프로그래밍 팀 프로젝트를 소개합니다!</h1>
      <div className="button-container">
        <Link href="/teams">
          <button className="large-button bg-red-100 hover:bg-red-100/50">
            팀원소개
          </button>
        </Link>
        <Link href="/projects">
          <button className="large-button bg-red-100 hover:bg-red-100/50">
            프로젝트
          </button>
        </Link>
        <Link href="/videos">
          <button className="large-button bg-red-100 hover:bg-red-100/50">
            동영상
          </button>
        </Link>
      </div>
    </div>
  )
}
