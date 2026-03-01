const btn = document.getElementById('translateBtn');
const source = document.getElementById('source');
const target = document.getElementById('target');
const result = document.getElementById('result');
const historyList = document.getElementById('history');

btn.addEventListener('click', async () => {
    const text = source.value.trim();
    if (!text) return;

    result.textContent = 'מתרגם...';
    try {
        // פנייה ישירה לפורט של ה-Backend (הצינור שפתחנו ב-8081)
        const res = await fetch('http://localhost:8081/translate', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, target: target.value })
        });
        const data = await res.json();
        result.textContent = data.translatedText;
        loadHistory();
    } catch (err) {
        result.textContent = 'שגיאה: ' + err.message;
    }
});

async function loadHistory() {
    try {
        // פנייה ישירה לפורט של ה-Backend לקבלת היסטוריה
        const res = await fetch('http://localhost:8081/history'); 
        const data = await res.json();
        historyList.innerHTML = data.map(t => `<li>${t.source_text} → ${t.translated_text}</li>`).join('');
    } catch (err) {
        console.error('שגיאה בטעינת ההיסטוריה:', err);
    }
}

loadHistory();