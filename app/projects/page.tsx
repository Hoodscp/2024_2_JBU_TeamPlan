import React from 'react'
import { GiStairsGoal } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'

export default function projectsPage() {
  return (
    <div>
      <section
        className="bg-blue-500 text-white text-center py-24 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/jbu.jpg')" }}
      >
        <h1 className="text-4xl font-bold">중부대학교 도서관</h1>
        <p className="mt-4 text-lg">
          중앙도서관 API를 활용한 중부대 도서관 서비스 제작
        </p>
      </section>

      <section id="project-intro" className="py-16 bg-red-100/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">프로젝트 소개</h2>

          <div className="p-4 bg-white rounded-lg shadow mb-8 flex flex-col items-center">
            <FaCalendarAlt className="text-9xl mb-4 " />

            <h3 className="text-xl font-semibold">개발 기간</h3>
            <p className="mt-2">2024년 10월 22일 ~ 2024년 12월까지 24일</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow mb-8 flex flex-col items-center">
            <GiStairsGoal className="text-9xl mb-4 " />
            <h3 className="text-xl font-semibold">개발 목표</h3>
            <p className="mt-2">
              1학기 수업에서 프론트엔드를 위한 정적인 웹페이지를 제작하였다면
              <br />
              2학기에는 백엔드 기능을 중점으로 공부하며 웹페이지를 제작할
              예정입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 ">
        <div className="container mx-auto text-center">
          <div className="bg-gray-100 py-6 px-8 rounded-lg inline-block">
            <h2 className="text-3xl font-bold">개발 환경</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow">
              <img
                src="/nextjs.png"
                alt="Feature 1 Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow">
              <img
                src="/mongo.png"
                alt="Feature 2 Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow">
              <img
                src="/library.jpg"
                alt="Feature 3 Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-red-100/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">기능 구현</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
              <img
                src="/register.png"
                className="w-full h-auto object-cover mb-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">회원기능</h3>
                <p className="mt-2">
                  몽고DB에 연결하여 회원가입, 로그인, 로그아웃 기능을 구현하여{' '}
                  <br />
                  회원관리가 가능하게 기능구현
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
              <img src="/api.png" className="w-full h-auto object-cover mb-4" />
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">API</h3>
                <p className="mt-2">
                  중앙도서관 API를 활용하여 도서 검색 기능 구현
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
              <img
                src="/jjim.png"
                className="w-full h-auto object-cover mb-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">대출 희망 목록</h3>
                <p className="mt-2">
                  즐겨찾기, 찜목록과 같이 대출 희망 목록 기능 구현
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
              <img
                src="/request.png"
                className="w-full h-auto object-cover mb-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">게시판</h3>
                <p className="mt-2">
                  도서 추천 게시판, 희망도서 신청 게시판 구현
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow">
              <img
                src="/mypage.png"
                className="w-full h-auto object-cover mb-4"
              />
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">마이페이지</h3>
                <p className="mt-2">
                  대출 현황, 독서 목표 설정등 마이페이지 기능 구현
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-red-200 text-white font-bold py-6">
        <div className="container mx-auto text-center ">
          <p>중부대학교 웹서버보안프로그래밍</p>
        </div>
      </footer>
    </div>
  )
}
