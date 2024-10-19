import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] sticky top-0 z-10">
      <nav className="bg-red-200 py-4 px-8 border-double border-b-8 border-white">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-white hover:text-red-50 mr-4">
                [웹서버보안프로그래밍 팀]
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <Link href="/teams">
              <div className="text-white hover:text-red-50 mr-4">팀원소개</div>
            </Link>
            <Link href="/projects">
              <div className="text-white hover:text-red-50 mr-4">프로젝트</div>
            </Link>
            <Link href="/videos">
              <div className="text-white hover:text-red-50 mr-4">영상</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
