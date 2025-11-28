import React from "react";

export const Benefit4Visual = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto">
    <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 font-sans">
      {/* Header */}
      <div className="bg-blue-600 p-4 flex justify-between items-start text-white">
        <div>
          <h3 className="font-bold text-lg">AI チャットサポート</h3>
          <p className="text-xs opacity-90">ご質問があればどうぞ</p>
        </div>
        <div className="text-xl opacity-80">↗</div>
      </div>

      {/* Body */}
      <div className="p-4 bg-gray-50">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
          <h4 className="font-bold text-gray-800 mb-1">担当者へのお問い合わせフォーム</h4>
          <p className="text-xs text-gray-500 mb-4">
            下記の内容を確認・編集のうえ、送信してください。
          </p>

          <form className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">タイトル</label>
              <div className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-gray-800">
                ユーザーがついていないプロダクトの買取について
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">内容</label>
              <div className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-gray-800 h-24">
                まだユーザーがついていないプロダクトの買取についてお問い合わせいたします。具体的な条件や詳細についてお伺いしたいです。
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">氏名</label>
              <div className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-gray-800">
                山田 太郎
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">メールアドレス</label>
              <div className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-gray-800">
                example@example.com
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">電話番号（任意）</label>
              <div className="w-full p-2 bg-white border border-gray-200 rounded text-sm text-gray-800">
                090-1234-5678
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                className="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 rounded text-sm font-medium text-white hover:bg-blue-700 shadow-sm"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <p className="mt-4 text-center text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
      ✨ 会話内容からフォームを自動入力
    </p>
  </div>
);
