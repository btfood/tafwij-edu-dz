/* assets/js/main.js */

document.addEventListener("DOMContentLoaded", () => {
    // 1. تحديث السنة تلقائياً في الفوتر
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // يمكننا إضافة أكواد الفلترة لمعرض الصور أو القائمة الجانبية للهاتف هنا لاحقاً
    console.log("تم تحميل الأساس التقني للمشروع بنجاح.");
});