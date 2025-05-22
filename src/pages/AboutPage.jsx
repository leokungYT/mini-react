import React from 'react';

function AboutPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            ผู้จัดทำ
          </h1>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              Todo App - ใช้ทำอะไร ไม่รู้ววบันทึกๆๆ
            </p>
            <div className="space-y-4">
              <ul className="list-disc list-inside ml-4 space-y-2">
                <p>นายจีรศักดิ์ พิมพ์คำไหล TEC3R</p>
                <p>tel 083xxxxxxx</p>
                <p>Email leokung45@gmail.com</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;