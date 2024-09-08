document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // بيانات المستخدمين
    const users = [
        { email: "student@example.com", password: "student123", role: "student" },
        { email: "teacher@example.com", password: "teacher123", role: "teacher" },
        { email: "admin@example.com", password: "admin123", role: "admin" }
    ];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // توجيه المستخدم إلى الصفحة المناسبة بناءً على الدور
            if (user.role === "admin") {
                window.location.href = "admin.html"; // صفحة المدير
            } else if (user.role === "teacher") {
                window.location.href = "teacher.html"; // صفحة المدرس (افترض وجود صفحة)
            } else if (user.role === "student") {
                window.location.href = "student.html"; // صفحة الطالب (افترض وجود صفحة)
            }
        } else {
            errorMessage.style.display = "block"; // عرض رسالة الخطأ
        }
    });
});