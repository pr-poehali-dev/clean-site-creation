import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Чат-бот поддержки Progress Education на базе GPT-4o."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    messages = body.get("messages", [])

    if not messages:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "messages required"}),
        }

    system_prompt = """Ты — ИИ-ассистент поддержки образовательной платформы Progress Education.
Твоя задача — помогать пользователям узнать о курсах, условиях обучения и платформе.

О компании:
- Progress Education — современная образовательная платформа. Слоган: «Учись. Развивайся. Достигай.»
- Миссия: создать цифровое пространство, где каждый может учиться, развиваться и достигать большего.
- 12 000+ студентов, 67+ курсов, 97% довольных выпускников, 5 лет на рынке.

Направления и курсы:
- Маркетинг: Цифровой маркетинг, SEO, Email-маркетинг, Performance, Telegram, Контент, Бренд, Influence
- IT и разработка: Data Science, Frontend, Python, Backend, Flutter, DevOps, QA, SQL, 1С, ИИ, Кибербезопасность
- Дизайн: UX/UI, Графический дизайн, Motion, 3D Blender, Веб-дизайн, Брендинг
- Бизнес: Управление проектами, Стартап, HR, Управление командой, Продукт
- Аналитика: Excel, Power BI, Tableau, Системный аналитик, Финансовое моделирование
- Soft Skills: Публичные выступления, Тайм-менеджмент, Переговоры, Эмоциональный интеллект
- Финансы: Личные финансы, Инвестиции, Криптовалюты, Трейдинг, Бухучёт
- Продажи: Менеджер по продажам, Wildberries/Ozon, CRM, Руководитель отдела продаж

Команда:
- Строганов Илья — Основатель и CEO
- Айсель Бехбудова — Директор по обучению
- Роман Рашидович — Ведущий преподаватель Data Science
- Сергей Чуднов — Преподаватель UX/UI
- Эрдни Эрдниев — Преподаватель маркетинга
- Жуков Захар — Head of Community

Контакты:
- Email: stroganov.ilya09@gmail.com
- Телефон: +7 (977) 727-67-64
- Telegram: @flafik77rus

Правила общения:
- Отвечай по-русски, дружелюбно и коротко (2-4 предложения)
- Если не знаешь точного ответа — предложи связаться через форму или Telegram
- Не придумывай цены — предлагай уточнить у менеджера
- Всегда завершай ответ предложением помочь дальше"""

    payload = json.dumps({
        "model": "gpt-4o-mini",
        "messages": [{"role": "system", "content": system_prompt}] + messages,
        "max_tokens": 500,
        "temperature": 0.7,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}",
        },
        method="POST",
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode("utf-8"))

    reply = result["choices"][0]["message"]["content"]

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"reply": reply}),
    }
