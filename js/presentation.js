/* ============================================================
   Motor de presentaciones (Excel, Word, PowerPoint, Informática)
   ============================================================ */

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #eef2f7;
    display: flex; justify-content: center; align-items: center;
    min-height: 100vh; padding: 20px;
}

.presentation-container {
    max-width: 1200px; width: 100%;
    background: #ffffff; border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden; padding: 20px 30px 30px;
    transition: all 0.3s;
}

/* ---------- SELECTOR DE CURSO ---------- */
.course-selector {
    display: flex; gap: 15px; margin-bottom: 20px;
    border-bottom: 2px solid #e9edf4; padding-bottom: 15px; flex-wrap: wrap;
}
.course-selector button {
    background: #ecf0f3; border: none;
    padding: 10px 28px; border-radius: 30px;
    font-weight: 600; font-size: 16px; color: #2c3e50;
    cursor: pointer; transition: 0.2s;
    display: inline-flex; align-items: center; gap: 8px;
}
.course-selector button:hover { background: #d5dde6; }
.course-selector button.active-basico { background: var(--primary-color); color: white; }
.course-selector button.active-intermedio { background: var(--accent-color); color: white; }

/* ---------- HEADER ---------- */
.header {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid #e9edf4; padding-bottom: 15px;
    margin-bottom: 20px; flex-wrap: wrap;
}
.header h1 { font-size: 24px; font-weight: 600; color: #2c3e50; }
.header .badge { color: white; padding: 6px 16px; border-radius: 30px; font-size: 14px; font-weight: 500; }
.badge-basico { background: var(--primary-color); }
.badge-intermedio { background: var(--accent-color); }
.header .slide-counter { font-size: 14px; color: #7f8c8d; }

/* ---------- CONTENIDO ---------- */
.slide-content { min-height: 420px; padding: 10px 5px 20px; }
.slide-content h2 {
    font-size: 28px; color: #2c3e50; margin-bottom: 20px;
    padding-left: 15px; border-left: 6px solid var(--primary-color);
}
.slide-content h2.intermedio { border-left-color: var(--accent-color); }
.slide-content .step-list { list-style: none; padding: 0; }
.slide-content .step-list li {
    background: #f8faff; margin-bottom: 16px;
    padding: 16px 20px; border-radius: 12px;
    border-left: 4px solid var(--primary-color);
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    display: flex; align-items: flex-start; gap: 12px;
    line-height: 1.6; color: #1e2a3a;
}
.slide-content .step-list li.intermedio { border-left-color: var(--accent-color); }
.slide-content .step-list li .icon { font-size: 28px; min-width: 40px; text-align: center; }
.slide-content .step-list li .text { flex: 1; }
.slide-content .step-list li .text strong { color: #2c3e50; }

.slide-content .example-box {
    background: #f0f7ff; border-radius: 12px;
    padding: 15px 20px; margin: 15px 0 10px;
    border: 1px dashed #b3d4fc;
    font-family: 'Courier New', monospace; font-size: 15px;
}
.slide-content .example-box.intermedio { background: #f4f0fa; border-color: #c9b8e6; }

.slide-content .tip {
    background: #fff9e6; border-radius: 10px;
    padding: 12px 18px; margin: 12px 0;
    border-left: 5px solid #f1c40f; font-size: 15px;
}

.slide-content .visual-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px; margin: 10px 0;
}
.slide-content .visual-grid .item {
    background: #ecf0f3; border-radius: 8px;
    padding: 12px 8px; text-align: center; font-size: 14px;
}

.slide-content .data-table {
    display: grid; grid-template-columns: auto repeat(4, 1fr);
    gap: 4px; background: #e9edf4; padding: 4px;
    border-radius: 8px; margin: 10px 0; font-size: 14px;
}
.slide-content .data-table .cell {
    background: white; padding: 6px 10px;
    border-radius: 4px; text-align: center;
}
.slide-content .data-table .header-cell { background: #d5dde6; font-weight: 600; }

/* ---------- NAVEGACIÓN ---------- */
.navigation {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 25px; padding-top: 20px;
    border-top: 1px solid #e9edf4; flex-wrap: wrap; gap: 10px;
}
.nav-buttons { display: flex; gap: 12px; }
.nav-buttons button {
    background: #ecf0f3; border: none;
    padding: 10px 22px; border-radius: 30px;
    font-weight: 500; font-size: 15px; color: #2c3e50;
    cursor: pointer; transition: 0.2s;
    display: inline-flex; align-items: center; gap: 8px;
}
.nav-buttons button:hover { background: #d5dde6; }
.nav-buttons button:disabled { opacity: 0.5; cursor: not-allowed; }
.nav-buttons button.primary { background: var(--primary-color); color: white; }
.nav-buttons button.primary:hover:not(:disabled) { background: var(--primary-hover); }
.nav-buttons button.primary.intermedio { background: var(--accent-color); }
.nav-buttons button.primary.intermedio:hover:not(:disabled) { background: var(--accent-hover); }
.index-btn { background: #bdc3c7; color: #2c3e50; }
.index-btn:hover { background: #a0a8af; }

/* ---------- MODAL ÍNDICE ---------- */
.modal-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.5);
    justify-content: center; align-items: center; z-index: 999;
}
.modal-overlay.active { display: flex; }
.modal-box {
    background: white; border-radius: 24px;
    max-width: 700px; width: 90%;
    max-height: 80vh; overflow-y: auto;
    padding: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.modal-box h3 {
    font-size: 22px; margin-bottom: 20px; color: #2c3e50;
    border-bottom: 2px solid #e9edf4; padding-bottom: 12px;
}
.modal-box .index-item {
    display: flex; justify-content: space-between;
    padding: 10px 0; border-bottom: 1px solid #f0f3f8;
    cursor: pointer; transition: 0.1s; color: #2c3e50;
}
.modal-box .index-item:hover { background: #f7faff; padding-left: 8px; }
.modal-box .index-item .idx-badge {
    background: var(--primary-color); color: white;
    border-radius: 30px; padding: 2px 12px;
    font-size: 12px; font-weight: 600;
}
.modal-box .index-item .idx-badge.intermedio { background: var(--accent-color); }
.close-modal {
    background: #e74c3c; color: white; border: none;
    padding: 8px 20px; border-radius: 30px;
    margin-top: 20px; cursor: pointer; font-weight: 500;
}
.close-modal:hover { background: #c0392b; }

@media (max-width: 768px) {
    .presentation-container { padding: 15px; }
    .header h1 { font-size: 20px; }
    .slide-content h2 { font-size: 22px; }
    .nav-buttons button { padding: 8px 14px; font-size: 13px; }
}