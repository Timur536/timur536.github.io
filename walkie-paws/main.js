const faqItems = document.querySelectorAll(".questions__item");
faqItems.forEach(item => {
    const toggle = item.querySelector(".questions__item-toggle");
    const answer = item.querySelector(".questions__item-answer");
    const bgColor = item.querySelector(".questions__item-wrap")

    toggle.addEventListener("click", () => {
        const isOpen = answer.classList.contains("is-active");
        // Сбрасываем цвет у всех
        faqItems.forEach(i => {
            i.querySelector(".questions__item-wrap").classList.remove("is-active");
        });

        // Закрыть все ответы
        faqItems.forEach(i => {
            const ans = i.querySelector(".questions__item-answer");
            ans.style.maxHeight = null;
            ans.classList.remove("is-active");
            ans.style.display = "none";
        });

        // Если не был открыт — открыть и покрасить
        if (!isOpen) {
            answer.style.display = "block";
            const height = answer.scrollHeight + "px";
            answer.style.maxHeight = height;
            answer.classList.add("is-active");
            answer.style.backgroundColor = "#fff"
            bgColor.classList.add("is-active"); // вот тут и красим
            bgColor.classList.add("is-active");
            toggle.classList.add("toggle-white"); // <<< добавляем класс для тоггла

        }else{
            toggle.classList.remove("toggle-white");
        }
    });
});