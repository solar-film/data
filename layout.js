const sidebarHTML = `
    <!-- Overlay สำหรับปิดเมนูเมื่อคลิกพื้นที่ว่าง -->
    <div id="sidebarOverlay" class="fixed inset-0 bg-black/50 z-40 hidden backdrop-blur-sm transition-opacity duration-300"></div>
    
    <!-- Sidebar -->
    <aside id="sidebar" class="fixed top-0 left-0 z-50 w-72 h-screen bg-[#1e293b] text-white shadow-2xl transition-all duration-300 transform -translate-x-full overflow-y-auto">
        <div class="h-full px-4 py-8">
            
            <!-- Logo -->
            <div class="flex flex-col items-center mb-10 mt-2">
                <div class="bg-slate-700/50 w-16 h-16 flex items-center justify-center rounded-2xl mb-4 text-white font-bold text-3xl shadow-inner border border-white/10 italic">G</div>
                <h2 class="font-bold text-xl uppercase tracking-widest text-center">
                    GOOD <span class="text-[#ff6b00]">GROUP</span>
                </h2>
            </div>

            <!-- Menu Content -->
<div class="space-y-8">

    <!-- Overview -->
    <section>
        <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">Overview</p>
        <nav class="space-y-1">
            <a href="index.html" class="nav-item flex items-center p-3 px-4 rounded-xl transition-all duration-200">
                <i class="fas fa-chart-line w-6 text-lg"></i>
                <span class="ml-3 font-medium">สรุปภาพรวม</span>
            </a>
        </nav>
    </section>

    <!-- Departments -->
    <section>
        <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">Departments</p>
        <nav class="space-y-1">

            <!-- Admin -->
            <div class="dropdown">
                <button class="dropdown-btn w-full flex items-center justify-between p-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                    <div class="flex items-center">
                        <i class="fas fa-user-shield w-6 text-lg"></i>
                        <span class="ml-3 font-medium">แผนกแอดมิน</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-300"></i>
                </button>
                <div class="dropdown-content hidden flex-col mt-1 ml-6 pl-4 border-l border-slate-700 space-y-1">
                    <a href="contact.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ปริมาณการติดต่อ</a>
                </div>
            </div>

            <!-- แผนกฟิล์มอาคาร -->
            <div class="dropdown">
                <button class="dropdown-btn w-full flex items-center justify-between p-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                    <div class="flex items-center">
                        <i class="fas fa-building w-6 text-lg"></i>
                        <span class="ml-3 font-medium">แผนกฟิล์มอาคาร</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-300"></i>
                </button>
                <div class="dropdown-content hidden flex-col mt-1 ml-6 pl-4 border-l border-slate-700 space-y-1">
                    <a href="contact.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ปริมาณการติดต่อ</a>
                    <a href="calendar-building.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ปฎิทินคิวจอง</a>
                    <a href="customer-building.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ข้อมูลคิวนัดลูกค้า</a>
                    <a href="feedback-building.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">Feedback ลูกค้า</a>
                    <a href="misktage-building.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">งานหลุด/ไม่ติดตั้ง</a>
                </div>
            </div>

            <!-- แผนกฟิล์มรถยนต์ -->
            <div class="dropdown">
                <button class="dropdown-btn w-full flex items-center justify-between p-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                    <div class="flex items-center">
                        <i class="fas fa-car-side w-6 text-lg"></i>
                        <span class="ml-3 font-medium">แผนกฟิล์มรถยนต์</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-300"></i>
                </button>
                <div class="dropdown-content hidden flex-col mt-1 ml-6 pl-4 border-l border-slate-700 space-y-1">
                    <a href="calendar-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ปฎิทินคิวจอง</a>
                    <a href="customer-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ข้อมูลการติดตั้ง</a>
                    <a href="film_car_analysis.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">กราฟข้อมูลการติดตั้ง</a>
                    <a href="sales-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">วิเคราะห์ยอดขาย</a>
                    <a href="damage-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ความเสียหาย</a>
                    <a href="feedback-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">Feedback ลูกค้า</a>
                    <a href="inventory-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">สต๊อกฟิล์มรถยนต์</a>
                </div>
            </div>

            <!-- Marketing -->
            <div class="dropdown">
                <button class="dropdown-btn w-full flex items-center justify-between p-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                    <div class="flex items-center">
                        <i class="fas fa-bullseye w-6 text-lg"></i>
                        <span class="ml-3 font-medium">แผนกการตลาด</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-300"></i>
                </button>
                <div class="dropdown-content hidden flex-col mt-1 ml-6 pl-4 border-l border-slate-700 space-y-1">
                    <a href="date.html" target="_blank" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ค่าใช้จ่ายการทำโฆษณา รายวัน</a>
                    <a href="month.html" target="_blank" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ค่าใช้จ่ายการทำโฆษณา รายเดือน</a>
                    <a href="year.html" target="_blank" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">ค่าใช้จ่ายการทำโฆษณา รายปี</a>
                </div>
            </div>

            <!-- Store -->
            <div class="dropdown">
                <button class="dropdown-btn w-full flex items-center justify-between p-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                    <div class="flex items-center">
                        <i class="fas fa-boxes-stacked w-6 text-lg"></i>
                        <span class="ml-3 font-medium">คลังสินค้า (Store)</span>
                    </div>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-300"></i>
                </button>
                <div class="dropdown-content hidden flex-col mt-1 ml-6 pl-4 border-l border-slate-700 space-y-1">
                    <a href="stock-3mfilm.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">สต๊อกฟิล์ม 3M</a>
                    <a href="stock-mhlfilm.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">สต๊อกฟิล์ม MHL</a>
                    <a href="inventory-car.html" class="sub-nav-item block p-2 text-sm text-slate-400 hover:text-[#ff6b00] transition-colors">สต๊อกฟิล์ม รถยนต์</a>
                </div>
            </div>

        </nav>
    </section>

</div>

                <section>
                    <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4 px-4">Others</p>
                    <nav class="space-y-1">
                        <a href="#" class="nav-item flex items-center p-3 px-4 rounded-xl transition-all duration-200">
                            <i class="fas fa-file-invoice-dollar w-6 text-lg"></i>
                            <span class="ml-3 font-medium">รายงาน (Reports)</span>
                        </a>
                        <a href="#" class="nav-item flex items-center p-3 px-4 rounded-xl transition-all duration-200">
                            <i class="fas fa-cog w-6 text-lg"></i>
                            <span class="ml-3 font-medium">ตั้งค่า</span>
                        </a>
                    </nav>
                </section>
            </div>
        </div>
    </aside>

    <!-- Global Header -->
    <header class="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-[45] flex items-center px-6 border-b border-slate-200 shadow-sm">
        <button id="sidebarToggleBtn" class="text-slate-800 p-2 text-xl hover:text-[#ff6b00] transition-colors focus:outline-none">
            <i class="fas fa-bars"></i>
        </button>
        <span class="ml-4 font-bold text-slate-900 tracking-tight text-lg">GOOD <span class="text-[#ff6b00]">GROUP</span></span>
    </header>
`;

function initLayout() {
    const container = document.createElement('div');
    container.innerHTML = sidebarHTML;
    document.body.prepend(container);

    const btn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    const toggleSidebar = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
    };

    btn.onclick = (e) => { e.stopPropagation(); toggleSidebar(); };
    overlay.onclick = toggleSidebar;

    // Dropdown Logic
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.fa-chevron-down');
            content.classList.toggle('hidden');
            content.classList.toggle('flex');
            icon.classList.toggle('rotate-180');
        };
    });

    // ดึง Element ของปุ่มมาเก็บไว้
    const backToTopBtn = document.getElementById("backToTop");

    // เมื่อมีการ Scroll หน้าจอ ให้เรียกฟังก์ชัน scrollFunction
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        // ถ้าเลื่อนลงมาเกิน 200px ให้แสดงปุ่ม
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // เมื่อคลิกที่ปุ่ม ให้เลื่อนกลับไปด้านบนสุดแบบ Smooth
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // ทำให้การเลื่อนดูนุ่มนวล
        });
    });



    // Auto Active Highlight
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('bg-[#ff6b00]', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
            item.classList.remove('text-slate-300', 'hover:bg-white/5');
        } else {
            item.classList.add('text-slate-300', 'hover:bg-white/5');
        }
    });

    document.querySelectorAll('.sub-nav-item').forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('text-[#ff6b00]', 'font-semibold');
            const parentContent = item.closest('.dropdown-content');
            if (parentContent) {
                parentContent.classList.remove('hidden');
                parentContent.classList.add('flex');
                parentContent.previousElementSibling.querySelector('.fa-chevron-down').classList.add('rotate-180');
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', initLayout);