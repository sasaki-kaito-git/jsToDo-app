`use strict`;
// todoの入力欄を取得
const textInput = document.getElementById('text-input');

// todoのリストを取得
const todoList = document.getElementById('todo-list')

// todoの入力欄に対して、keydownイベントを登録
textInput.addEventListener('keydown', e => {
    // 入力されたテキストを取得し、前後の空白を削除
    const text = textInput.value.trim();
// 入力欄が空でないか、Enterキーが押されたかを確認
    if (text === '' || e.key !== 'Enter') {
        return;
    }
    console.log('Todoが入力された');
});

