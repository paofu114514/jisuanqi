// script.js - 基础计算器功能
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            
            if (value === 'C') {
                // 清除
                display.value = '';
            } else if (value === '=') {
                // 计算
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                // 追加输入
                display.value += value;
            }
        });
    });
});